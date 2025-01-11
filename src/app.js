const contractAddress = "0x94087f1974c08219423e0c6f827f0d1ce3526bbd";
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "FundsWithdrawn",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			}
		],
		"name": "listModel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "creator",
				"type": "address"
			}
		],
		"name": "ModelListed",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "buyer",
				"type": "address"
			}
		],
		"name": "ModelPurchased",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "rater",
				"type": "address"
			}
		],
		"name": "ModelRated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			}
		],
		"name": "purchaseModel",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			},
			{
				"internalType": "uint8",
				"name": "rating",
				"type": "uint8"
			}
		],
		"name": "rateModel",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			}
		],
		"name": "withdrawFunds",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "contractBalance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getModelCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "modelId",
				"type": "uint256"
			}
		],
		"name": "getModelDetails",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint16",
				"name": "totalRating",
				"type": "uint16"
			},
			{
				"internalType": "uint8",
				"name": "avgRating",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "models",
		"outputs": [
			{
				"internalType": "string",
				"name": "name",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "price",
				"type": "uint256"
			},
			{
				"internalType": "address payable",
				"name": "creator",
				"type": "address"
			},
			{
				"internalType": "uint8",
				"name": "ratingCount",
				"type": "uint8"
			},
			{
				"internalType": "uint16",
				"name": "totalRating",
				"type": "uint16"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "purchased",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
];

let contract;
let account;
let web3;


async function connectWeb3() {
    if (window.ethereum) {
        web3 = new Web3(window.ethereum);
        try {
            await window.ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Connected to Ethereum via MetaMask");
        } catch (error) {
            console.error("User denied account access");
        }
    } else {
        alert('Non-Ethereum browser detected. Please install MetaMask!');
    }
}

async function getContract() {
    if (!web3) {
        await connectWeb3();
    }
    if (!contract) {
        contract = new web3.eth.Contract(contractABI, contractAddress);
    }
    return contract;
}

// Загрузка моделей
async function loadModels() {
    const modelsList = document.getElementById("models-list");
    modelsList.innerHTML = "";

    try {
        const modelsCount = await contract.methods.getModelCount().call();

        if (modelsCount === 0) {
            modelsList.innerHTML = "<p>No models available</p>";
            return;
        }

        for (let i = 0; i < modelsCount; i++) {
            const model = await contract.methods.getModelDetails(i).call();

            const modelDiv = document.createElement("div");
            modelDiv.className = "model";
            modelDiv.innerHTML = `
                <h3>${model.name}</h3>
                <p>Description: ${model.description}</p>
                <p>Price: ${web3.utils.fromWei(model.price, "ether")} ETH</p>
                <p>Owner: ${model.owner}</p>
                <p>Average Rating: ${model.averageRating || 0} / 5</p>
                <button onclick="purchaseModel(${i})">Purchase</button>
                <button onclick="rateModel(${i}, 5)">Rate 5 Stars</button>
            `;
            modelsList.appendChild(modelDiv);
        }
    } catch (err) {
        console.error("Error loading models:", err);
    }
}

// Добавление новой модели
async function listModel(name, description, price) {
    try {
        const priceInWei = web3.utils.toWei(price, "ether");
        await contract.methods.listModel(name, description, priceInWei).send({ from: account });
        alert("Model listed successfully!");
        loadModels();
    } catch (err) {
        console.error("Error listing model:", err);
        alert("Error listing model");
    }
}

// Покупка модели
async function purchaseModel(modelId) {
    try {
        const model = await contract.methods.getModelDetails(modelId).call();
        await contract.methods.purchaseModel(modelId).send({ from: account, value: model.price });
        alert("Model purchased successfully!");
        loadModels();
    } catch (err) {
        console.error("Error purchasing model:", err);
        alert("Error purchasing model");
    }
}

// Рейтинг модели
async function rateModel(modelId, rating) {
    try {
        await contract.methods.rateModel(modelId, rating).send({ from: account });
        alert("Model rated successfully!");
        loadModels();
    } catch (err) {
        console.error("Error rating model:", err);
        alert("Error rating model");
    }
}

// Вывод средств
async function withdrawFunds() {
    try {
        await contract.methods.withdrawFunds().send({ from: account });
        alert("Funds withdrawn successfully!");
    } catch (err) {
        console.error("Error withdrawing funds:", err);
        alert("Error withdrawing funds");
    }
}

// Прослушивание событий
function listenToEvents() {
    contract.events.ModelListed({}, (error, event) => {
        if (error) {
            console.error("Error listening to ModelListed events:", error);
        } else {
            console.log("Model listed event:", event);
            loadModels();
        }
    });

    contract.events.ModelPurchased({}, (error, event) => {
        if (error) {
            console.error("Error listening to ModelPurchased events:", error);
        } else {
            console.log("Model purchased event:", event);
            loadModels();
        }
    });

    contract.events.ModelRated({}, (error, event) => {
        if (error) {
            console.error("Error listening to ModelRated events:", error);
        } else {
            console.log("Model rated event:", event);
            loadModels();
        }
    });
}

// Обработчики форм
const addModelForm = document.getElementById("add-model-form");
if (addModelForm) {
    addModelForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const name = document.getElementById("model-name").value;
        const description = document.getElementById("model-description").value;
        const price = document.getElementById("model-price").value;
        listModel(name, description, price);
    });
}

const withdrawForm = document.getElementById("withdraw-form");
if (withdrawForm) {
    withdrawForm.addEventListener("submit", (e) => {
        e.preventDefault();
        withdrawFunds();
    });
}

connectWeb3();
