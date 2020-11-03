// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 Swap.Pet@pm.me
// scripts/forkMainnet.js
const fs = require('fs');
const path = require('path');  
require("dotenv").config(); 
const { ethers } = require("ethers");
const ganache = require("ganache-core");  
const { spawn } = require('child_process');

const infuraKey = fs.readFileSync(path.resolve(__dirname, '../.infuraKey')).toString().trim(); 
console.log(`infuraKey: ${infuraKey}\n`);
const mainetURL = `https://mainnet.infura.io/v3/${infuraKey}` 
console.log(`mainetURL: ${mainetURL}\n`);

const forkChain = async () => {
  if (!infuraKey || !process.env.PRIV_KEY_DEPLOY) {
    throw Error("infuraKey err OR PRIV_KEY_DEPLOY not found in .env");
  }  
  const server = ganache.server({ 
    fork: mainetURL,
    network_id: 1,
    accounts: [
      {
        secretKey: process.env.PRIV_KEY_DEPLOY,
        balance: ethers.utils.hexlify(ethers.utils.parseEther("1000")),
      },
      {
        secretKey: process.env.PRIV_KEY_TEST1,
        balance: ethers.utils.hexlify(ethers.utils.parseEther("10")),
      },
      {
        secretKey: process.env.PRIV_KEY_TEST2,
        balance: ethers.utils.hexlify(ethers.utils.parseEther("100")),
      },
      {
        secretKey: process.env.PRIV_KEY_TEST3,
        balance: ethers.utils.hexlify(ethers.utils.parseEther("1000")),
      },
      {
        secretKey: process.env.PRIV_KEY_TEST4,
        balance: ethers.utils.hexlify(ethers.utils.parseEther("10000")),
      },
      {
        secretKey: process.env.PRIV_KEY_TEST5,
        balance: ethers.utils.hexlify(ethers.utils.parseEther("100000")),
      },
    ],
  });

  const serverListen = async () => {
    await new Promise((resolve, reject) => {
      server.listen(PORT, () => {
        console.log(`Forked off of node: ${mainetURL}\n`);
        console.log(`Test private key:\n`);
        console.log(`\t${process.env.PRIV_KEY_DEPLOY}`);
        console.log(`\t${process.env.PRIV_KEY_TEST1}`);
        console.log(`\t${process.env.PRIV_KEY_TEST2}`);
        console.log(`\t${process.env.PRIV_KEY_TEST3}`);
        console.log(`\t${process.env.PRIV_KEY_TEST4}`);
        console.log(`\t${process.env.PRIV_KEY_TEST5}`);
        console.log(`\nTest mainnet chain started on port ${process.env.PORT}, listening...`);
        resolve();
      });
    });
  };

  const serverClose = async () => {
    await new Promise((resolve, reject) => {
      server.close((err) => {
        if (err) {
          reject(err);
        } else {
          console.log("test-mainnet chain stopped");
          resolve();
        }
      });
    });
  };
  await serverListen();

  return { serverListen, serverClose };

  // const provider = new ethers.providers.Web3Provider(ganache);
  // const wallet = new ethers.Wallet(process.env.PRIV_KEY_DEPLOY, provider);

  // return { wallet, provider };
}; 

const runTest = async () => {
  await new Promise((resolve) => {
    const p = spawn('npx', ['node','scripts/test.js'], { stdio: "inherit" });
    p.on("exit", () => resolve());
  });
};
module.exports = {
  forkChain,
  runTest,
};
