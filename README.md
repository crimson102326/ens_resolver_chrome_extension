# ENS Resolver Chrome Extension

<a href="../../releases"><img src="assests/256.png" align="right" alt="ENS Resolver Icon" wdth="100"/></a>

A Chrome extension that detects ENS names in selected text and provides a context menu option to view the wallet on [Debank](https://debank.com). 

[Download the lasted packaged extension from the Releases page](../../releases)

This Chrome extension makes it effortless to explore ENS wallet profiles directly from any webpage. When you highlight text that ends with .eth, it automatically detects it as an ENS name and adds a new context menu option: "Go to Debank".

When you click the menu item, the extension uses a public Ethereum RPC API to resolve the ENS name into its corresponding Ethereum wallet address. It then instantly opens the wallet’s profile on [Debank](https://debank.com), where you can view tokens, DeFi positions, NFTs, and transaction history associated with that address.

This saves time by eliminating the need to manually copy-paste ENS names into explorers or wallet dashboards — everything happens in one step, directly from your browser.



<details>
<summary><a style="font-size: 20px;"><strong>Installation</strong></a></summary>

### Prerequisites
- Google Chrome browser (version 88 or higher)
- Node.js (for development)

### Installation Steps

1. **Download the Extension**
   ```bash
   git clone https://github.com/crimson102326/ens_resolver.git
   cd ens_resolver
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Load Extension in Chrome**
   - Open Chrome and navigate to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top-right corner)
   - Click "Load unpacked"
   - Select the `ens_resolver` folder
   - The extension should now appear in your extensions list

4. **Verify Installation**
   - Look for the ENS Resolver icon in your browser toolbar
   - The extension is now ready to use!
</details>


<details>
<summary><a style="font-size: 20px;"><strong>How to Use</strong></a></summary>

### Basic Usage
1. **Navigate to any webpage**          containing ENS names (e.g., `crimson.eth`, `uniswap.eth`)
2. **Right-click on the ENS name**      you want to resolve
3. **Select "Resolve ENS on Debank"**   from the context menu
4. **A new tab will open**              showing the wallet details on Debank

### Example Use Cases
- **Research**:         Quickly check wallet balances and transactions for any ENS name
- **Verification**:     Verify ENS ownership and associated wallet addresses
- **DeFi Analysis**:    Analyze DeFi positions and holdings for specific ENS domains
- **Social**:           Check wallet activity for ENS names mentioned in articles or social media

### Supported ENS Formats
- Standard ENS names:   `crimson.eth`
- Subdomains:           `app.uniswap.eth`
- Custom ENS domains:   `name.dao.eth`
</details>

<details>
<summary><a style="font-size: 20px;"><strong>Contribution</strong></a></summary>

We welcome contributions to improve the ENS Resolver extension! Here's how you can help:

### Ways to Contribute
- **Report Bugs**:           Found a bug? Open an issue with detailed information
- **Feature Requests**:      Have an idea? Submit a feature request
- **Code Contributions**:    Submit pull requests for bug fixes or new features
- **Documentation**:         Help improve documentation and examples
- **Testing**:               Test the extension and report any issues

### Development Setup

1. **Fork and Clone**
   ```bash
   git clone https://github.com/crimson102326/ens_resolver.git
   cd ens_resolver
   ```

2. **Install Dependencies**
   ```bash
   pnpm install
   ```

3. **Make Changes**
   - Edit the source files (`background.js`, `content.js`, `manifest.json`)
   - Test your changes in Chrome's developer mode

4. **Submit Pull Request**
   - Create a new branch for your changes
   - Commit your changes with descriptive messages
   - Submit a pull request with a clear description

### Development Guidelines
- Follow existing code style and conventions
- Add comments for complex functionality
- Test thoroughly before submitting
- Update documentation for new features
</details>


<details>
<summary><a style="font-size: 20px;"><strong>Getting Started</strong></a></summary>

### Quick Start Guide

1. **Install the extension** using the steps above
2. **Visit any webpage** with ENS names
3. **Right-click an ENS name** and select "Resolve ENS on Debank"
4. **Explore the wallet** information on the opened Debank page

### Troubleshooting

**Extension not working?**
- Ensure you're using Chrome version 88 or higher
- Check that the extension is enabled in `chrome://extensions/`
- Try refreshing the webpage and testing again

**ENS name not resolving?**
- Verify the ENS name is valid and active
- Check your internet connection
- Some ENS names may not have associated wallets

**Need help?**
- Check the [Issues page](https://github.com/crimson102326/ens_resolver/issues) for known problems
- Create a new issue with detailed information about your problem
</details>

<details>
<summary><a style="font-size: 20px;"><strong>Acknowledgments</strong></a></summary>

- ENS (Ethereum Name Service) for the naming system
- Debank for providing wallet analytics
- The Ethereum community for inspiration and support

</details>

<div align="center">
  <p>Made with ❤️ for the Ethereum community</p>
  <p>
    <a href="https://github.com/crimson102326/ens_resolver">⭐ Star this repo</a> •
    <a href="https://github.com/crimson102326/ens_resolver/issues">🐛 Report Bug</a> •
    <a href="https://github.com/crimson102326/ens_resolver/issues">💡 Request Feature</a>
  </p>
</div>
