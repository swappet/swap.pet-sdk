// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 Swap.Pet@pm.me
// test/buyUniswapBAT.test.js  
const { ethers } = require('ethers'); 
const fs = require('fs');
const fromWei = (x, decimals) => ethers.utils.formatUnits(x, decimals);

const mineBlock = async (provider, timestamp) =>
  await provider.send("evm_mine", [timestamp]);

const increaseTime = async (provider, secsToIncrease) => {
  const blockNumber = await provider.getBlockNumber();
  const { timestamp: currentTimestamp } = await provider.getBlock(blockNumber);
  const newTime = Number(currentTimestamp) + Number(secsToIncrease);
  await mineBlock(provider, newTime);
};

const getTestFiles = async (path) => { 
    const tests = await fs.readdirSync(path, 'utf-8');
    let files = [{name:'tesl all',value:'all'}];
    tests.forEach(async (subDir1, index) => {
        let stat = fs.statSync(path + subDir1);
        if(subDir1 !== 'lib'){
            if (stat.isDirectory()) {
                let subTests = await fs.readdirSync(path + subDir1 + '/', 'utf-8');
                subTests.forEach((subDir2, index) => {
                    files.push(subDir1 + '/' + subDir2);
                })
            } else {
                files.push(subDir1);
            }
        }
    })
    return files;
}
module.exports = {
  fromWei,
  mineBlock,
  increaseTime,
  getTestFiles,
};
