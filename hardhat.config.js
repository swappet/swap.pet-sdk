/**
 * @type import('hardhat/config').HardhatUserConfig
 */ 
require('@nomiclabs/hardhat-truffle5'); 
require("@nomiclabs/hardhat-web3");
//require("@nomiclabs/buidler-ethers");
require('solidity-coverage'); 
require('eth-gas-reporter');

const fs = require('fs');
const path = require('path'); 
const infuraKey = fs.readFileSync(path.resolve(__dirname, '.infuraKey')).toString().trim(); 
const mnemonic = fs.readFileSync(path.resolve(__dirname, '.secret')).toString().trim()

// The next line is part of the sample project, you don't need it in your
// project. It imports a Hardhat task definition, that can be used for
// testing the frontend.
// require("./tasks/faucet");
task("accounts", "Prints all accounts")
  .setAction(async () => {
    let accounts = await web3.eth.getAccounts();
    console.log(accounts);
  });

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async taskArgs => {
    const account = web3.utils.toChecksumAddress(taskArgs.account);
    const balance = await web3.eth.getBalance(account);

    console.log(web3.utils.fromWei(balance, "ether"), "ETH");
  }); 

const { forkChain,runTest } = require("./scripts/forkMainnet");
task("fork", "Runs tests in parallel on Ganache fork Mainnet", async () => {
  const { serverListen, serverClose } = forkChain();
  //await serverListen();
  await runTest();
  await serverClose();
}); 

// You have to export an object to set up your config
// This object can have the following optional entries:
// defaultNetwork, networks, solc, and paths.
// Go to https://hardhat.org/config/ to learn more 
module.exports = {
  defaultNetwork: 'hardhat',  
  networks: {
    hardhat: {
      chainId: 31337,
      gas:9500000,                // default:auto
      gasPrice:8000000000,        // default:auto
      gasMultiplier:1,            // default:1
      HardhatNetworkHDAccountsConfig:{
        // mnemonic:"test test test test test test test test test test test junk",
        mnemonic:`${mnemonic}`,
        initialIndex:0,
        path:"m/44'/60'/0'/0",
        count:20,
        accountsBalance:10000
      },
      blockGasLimit:9500000,
      hardfork:'muirGlacier', // byzantium/constantinople/petersburg/istanbul/muirGlacier
      throwOnTransactionFailures:true,
      throwOnCallFailures:true,
      // initialDate:'2020-10-30T14:48:00',
      allowUnlimitedContractSize:false,
      forking:{
        url:`https://rinkeby.infura.io/v3/${infuraKey}`,
        chainId:4,
        // blockNumber:11095000,
        timeout:20000,
        enabled:false
      }

    },
    localhost: { url: "http://127.0.0.1:8545" },
    coverage: { url: 'http://127.0.0.1:8555' },
    rinkeby: {
      url: `https://rinkeby.infura.io/v3/${infuraKey}`,
      chainId:4,
      // accounts: [{privateKey: string, balance: string}],
      timeout:20000,
    },
  },
  solc: {
    version: '0.7.0',
    settings: {
      optimizer: {
        enabled: true,
        runs: 20000
      }
    } 
  },
  gasReporter: {
    enabled: true,
  },
  paths: {
    sources: './contracts',
    tests: './test',
    cache: './cache',
    coverage: './coverage',
    coverageJson: './coverage.json',
    artifacts: './artifacts',
  },
};

