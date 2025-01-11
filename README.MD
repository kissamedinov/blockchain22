# AI Model Marketplace dApp

## Team
**Sultan Kissamedinov**, **Azat Bolatbekov**, **Biba Koszhanova**

## Description
This project demonstrates a decentralized application (dApp) for an AI model marketplace. The marketplace allows users to list, purchase, rate, and manage AI models while leveraging blockchain technology to ensure transparency and security.

---

## Features

### **Smart Contract Functionalities:**
- **List a Model:**
  Register a new AI model by providing its name, description, and price.
- **Purchase a Model:**
  Purchase an AI model using its unique identifier, with payment sent directly to the creator.
- **Rate a Model:**
  Leave a rating for a purchased AI model to help improve its overall score.
- **View Model Details:**
  Access key details about a model such as its name, description, price, creator, and average rating.
- **Withdraw Funds:**
  Enable creators to withdraw their earnings from model sales.

### **Frontend Functionalities:**
- **Form to List Models:**
  Add new models through an intuitive form.
- **Model Display:**
  View available models with details like price, owner, and ratings.
- **Interactive Actions:**
  Buttons to purchase and rate models, as well as view additional details.
- **Creator Withdrawal:**
  Withdraw accumulated funds through the dApp interface.

---

## Technologies Used
- **Solidity:** Language for smart contract development.
- **Web3.js:** Ethereum JavaScript API for interacting with the blockchain.
- **Ganache:** Local blockchain for development and testing.
- **Node.js:** JavaScript runtime environment.
- **HTML/CSS/JavaScript:** Frontend for the dApp.

---

## Prerequisites
- Node.js installed.
- Solidity Compiler (`solc`) installed.
- Ganache installed and running.
- MetaMask installed in your browser.

---

## Setup

### **Clone the Repository**
```bash
git clone https://github.com/kissamedinov/blockchain22
cd smart-contract
```

### **Install Dependencies**
```bash
npm install
```

### **Compile and Deploy Smart Contract**
- **Using Truffle:**
```bash
truffle compile
truffle migrate
```
- **Using Remix:**
  Compile and deploy the contract using Remix, then update the `ABI` and contract address in `app.js`.

---

## Running the dApp
1. Start the server:
    ```bash
    npm install -g http-server
    http-server
    ```
2. Open the application in your browser (usually at `http://127.0.0.1:8080`).

---

## Troubleshooting

### **Invalid Opcode Error:**
1. Ensure the Solidity compiler version matches the pragma version in the smart contract.
2. Recompile the contract to update the ABI and bytecode.
3. Restart Ganache to reset the blockchain state and redeloy the contract.

### **Deprecation Warnings:**
Update dependencies to replace deprecated modules:
```bash
npm update
```

---

## License
This project is licensed under the **MIT License**.

---

## Link to Repository
[GitHub Repository](https://github.com/kissamedinov/blockchain22)

