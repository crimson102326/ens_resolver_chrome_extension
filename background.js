
// Function to resolve ENS name using a public API
async function resolveENSName(name) {
  try {
    // Use a public ENS API service
    const response = await fetch(`https://api.ensideas.com/ens/resolve/${name}`);
    
    if (response.ok) {
      const data = await response.json();
      if (data.address) {
        return data.address;
      }
    }
    
    // Fallback: try another API
    const fallbackResponse = await fetch(`https://api.ens.domains/name/${name}`);
    if (fallbackResponse.ok) {
      const fallbackData = await fallbackResponse.json();
      if (fallbackData.address) {
        return fallbackData.address;
      }
    }
    
    return null;
  } catch (err) {
    console.error("Failed to resolve ENS:", err);
    return null;
  }
}

// Store current selection state
let currentSelection = {
  text: '',
  isENSName: false
};

// Function to resolve ENS name to address
async function getENSAddress(name) {
  try {
    const address = await provider.resolveName(name);
    console.log(`${name} → ${address}`);
    return address;
  } catch (err) {
    console.error("Failed to resolve ENS:", err);
    return null;
  }
}

// Function to create or update context menu
function updateContextMenu() {
  // Remove existing menu item
  chrome.contextMenus.removeAll(() => {
    // Create new menu item only if ENS name is selected
    if (currentSelection.isENSName) {
      chrome.contextMenus.create({
        id: "viewOnDebank",
        title: `Go to Debank`,
        contexts: ["selection"]
      });
    }
  });
}

// Listen for messages from content script
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'selectionChanged') {
    currentSelection = {
      text: request.text,
      isENSName: request.isENSName
    };
    updateContextMenu();
  }
});

// Listen for context menu click
chrome.contextMenus.onClicked.addListener(async (info, tab) => {
  if (info.menuItemId === "viewOnDebank") {
    const selectedText = info.selectionText.trim();

    // Double-check it's an ENS name
    if (!selectedText.endsWith(".eth")) {
      console.log("Not a valid ENS name:", selectedText);
      return;
    }

    try {
      // Resolve ENS name to address
      const address = await resolveENSName(selectedText);
      
      if (address) {
        // Open Debank profile page
        const debankUrl = `https://debank.com/profile/${address}`;
        chrome.tabs.create({ url: debankUrl });
      } else {
        // Show error message
        chrome.scripting.executeScript({
          target: { tabId: tab.id },
          func: (text) => alert(`Failed to resolve ENS name: ${text}`),
          args: [selectedText]
        });
      }
    } catch (err) {
      console.error("Error resolving ENS:", err);
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: (text) => alert(`Error resolving ENS name: ${text}`),
        args: [selectedText]
      });
    }
  }
});

// Initialize context menu on extension install
chrome.runtime.onInstalled.addListener(() => {
  // Context menu will be created dynamically based on selection
  console.log("ENS Resolver extension installed");
});
