Here's a detailed `README.md` file for your GitHub repository:

---

# 0nCode Script

## Overview

The **0nCode Script** is a Node.js automation tool designed to interact with a specific web service. It provides functionalities like sending requests, managing boosts, and optimizing resource usage for multiple accounts. This script is ideal for users who need to automate tasks across multiple accounts with JWT Token-based authentication.

## Features

- **Multi-Account Management**: Manage and automate actions for multiple accounts.
- **Boost Optimization**: Automatically calculates and purchases the most efficient boosts based on your current resources.
- **Customizable Settings**: Easily configure the number of accounts, tokens, and proxies.
- **Real-Time Monitoring**: Displays real-time updates on account status, including current score, taps, and reserved funds.

## Installation

### Prerequisites

- **Node.js**: Version 20 or higher is required. [Download Node.js](https://nodejs.org/).

### Step-by-Step Guide

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/0ncode-script.git
   cd 0ncode-script
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Script**

   ```bash
   node start.js
   ```

4. **Configure Settings**
   - Upon starting the script, you'll be prompted to enter the number of accounts and the JWT Tokens.
   - Follow the on-screen instructions to set up each account.

## How to Obtain JWT Token

To use the script, you need to extract the JWT Token from the network request:

1. **Open Developer Tools** in your browser (usually F12).
2. **Navigate to the Network Tab**.
3. **Log in or perform the necessary action** to generate the network requests.
4. **Look for the request** that includes `Authorization` in its headers.
5. **Copy the JWT Token** from the `Authorization` header.

## Script Usage

### Options Available

- **Start Script**: Begins the automation process for all configured accounts.
- **Settings**: Modify account settings, including adding new accounts or updating JWT Tokens.
- **Exit**: Safely exits the script.

### Advanced Configuration

The script supports additional configurations via a `settings.json` file, which is automatically generated after the first run. You can manually edit this file to set proxies, customize boosts, and more.

## Example Output

```bash
Account 1: Success | Score: 563781.19 | Taps: 4 | Reserved Funds: 500000
Account 1: Not enough score to buy 1 farlucky boosts
Account 2: Success | Score: 200055.74 | Taps: 12 | Reserved Funds: 300000
Account 2: Not enough score to buy 1 faryote boosts
```

## Contributing

We welcome contributions! Please submit a pull request or open an issue to report bugs or request features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Disclaimer

This script is provided "as is" without warranty of any kind. Use it at your own risk.
