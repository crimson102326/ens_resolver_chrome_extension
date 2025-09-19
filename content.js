// Content script to detect ENS names in selected text
(function() {
  let selectedText = '';
  let isENSName = false;

  // Function to check if text looks like an ENS name
  function isENSNameFormat(text) {
    if (!text) return false;
    
    // ENS names typically end with .eth and contain only alphanumeric characters and hyphens
    const ensPattern = /^[a-zA-Z0-9-]+\.eth$/;
    return ensPattern.test(text.trim());
  }

  // Listen for text selection
  document.addEventListener('mouseup', function() {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    if (text !== selectedText) {
      selectedText = text;
      isENSName = isENSNameFormat(text);
      
      // Send message to background script about selection change
      chrome.runtime.sendMessage({
        type: 'selectionChanged',
        text: selectedText,
        isENSName: isENSName
      });
    }
  });

  // Also listen for keyboard selection
  document.addEventListener('keyup', function() {
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    if (text !== selectedText) {
      selectedText = text;
      isENSName = isENSNameFormat(text);
      
      chrome.runtime.sendMessage({
        type: 'selectionChanged',
        text: selectedText,
        isENSName: isENSName
      });
    }
  });

  // Listen for messages from background script
  chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.type === 'getSelection') {
      sendResponse({
        text: selectedText,
        isENSName: isENSName
      });
    }
  });
})();
