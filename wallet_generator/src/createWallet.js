//importing dependencies
const bip32 = require("bip32");
const bip39 = require("bip39");
const bitcoin = require("bitcoinjs-lib");

//defining the network
const network = bitcoin.networks.testnet; //if you want to run on a real network type bitcoin.networks.bitcoin

//card derivation
//m / purpose' / coin_type' / account' / change / address_index
//1 testnet
//2 mainnet
const path = `m/49'/1'/0'/0`;

//criando a carteira
let mnemonic = bip39.generateMnemonic(); //generating a mnemonic

//criando a seed da carteira
const seed = bip39.mnemonicToSeedSync(mnemonic); //generating a seed from the mnemonic

//criando a raiz da carteira
let root = bip32.fromSeed(seed, network); //generating a node from the seed

//criando a chave privada
let account = root.derivePath(path); //deriving the path
let node = account.derive(0); //deriving the node

//criando a chave publica
let btcAddress = bitcoin.payments.p2wpkh({
  pubkey: node.publicKey,
  network: network,
}).address; //generating the address

console.log("Generated wallet\nAdress:", btcAddress);
console.log("Private key:", node.toWIF());
console.log("Seed:", mnemonic);

/*
    para rodar o código, basta rodar o comando node src/createWallet.js
    sera gerado um endereço, uma chave privada e uma seed
    ex:
    Generated wallet
    Adress: 0000000000000000000000000000000000000000
    Private key: 00000000000000000000000000000000000000000000000000
    Seed: explain crunch cube cluster deliver father magnet abuse pony satoshi invite trigger
*/
