// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 Swap.Pet@pm.me
// test/buyUniswapBAT.test.js 
const { ethers } = require("ethers") 
const { fromWei } = require("./scripts/utils")
require("dotenv").config() 

const { sdk } = require("../src")  
const uniswap = require("../src/uniswap")
const erc20 = require("../src/erc20") 
const { tokens } = require("../src/tokens")
console.log("tokens:", tokens)     


const provider = new ethers.providers.JsonRpcProvider("http://localhost:8545") 
const deployer = new ethers.Wallet(process.env.PRIV_KEY_DEPLOY, provider)
const tester = new ethers.Wallet(process.env.PRIV_KEY_TEST5, provider) 

const wethContract = new ethers.Contract(
  legos.erc20.weth.address,
  legos.erc20.weth.abi,
  deployer
)
describe("test:buy Uniswap BAT with ETH", () => { 
  test("deposit ETH to WETH ", async () => {
    await wethContract.deposit({
      value: ethers.utils.parseEther("1.0"),
      gasLimit: 1000000,
      from:deployer
    })

    const wethBal = await wethContract.balanceOf(deployer.address)
    console.log(`deployer WETH Balance: ${ethers.utils.formatEther(wethBal)}`)
  } 

  test("initial BAT balance of 0", async () => {
    const batContract = new ethers.Contract(
      erc20.bat.address,
      erc20.bat.abi,
      deployer,
    ) 
    const batBalanceWei = await batContract.balanceOf(tester.address)
    const batBalance = fromWei(batBalanceWei, erc20.bat.decimals) 
    console.log(`batBalance: ${fromWei(batBalanceWei, erc20.bat.decimals)}`)
    expect(parseFloat(batBalance)).toBe(0)
  })

  test("initial ETH balance of 100000 ETH", async () => {
    const ethBalanceWei = await tester.getBalance()
    const ethBalance = ethers.utils.formatEther(ethBalanceWei) 
    console.log(`ethBalance: ${ethers.utils.formatEther(ethBalanceWei)}`)
    expect(parseFloat(ethBalance)).toBe(100000)
  })

  test("buy BAT from Uniswap", async () => { 
    const batContract = new ethers.Contract(
      erc20.bat.address,
      erc20.bat.abi,
      deployer,
    )
    const uniswapFactoryContract = new ethers.Contract(
      uniswap.factory.address,
      uniswap.factory.abi,
      deployer,
    ) 
    const batExchangeAddress = await uniswapFactoryContract.getExchange(
      erc20.bat.address,
    )
    const batExchangeContract = new ethers.Contract(
      batExchangeAddress,
      uniswap.exchange.abi,
      deployer,
    )
 
    await batExchangeContract.ethToTokenSwapInput(
      1, // min amount of token retrieved
      2525800000, // random timestamp in the future 
      {
        gasLimit: 4000000,
        value: ethers.utils.parseEther("10"),
      },
    ) 
 
    const batBalanceWei = await batContract.balanceOf(wallet.address)
    const newBatBalance = parseFloat(fromWei(newBatBalanceWei, erc20.bat.decimals))
    console.log(`newBatBalance: ${fromWei(newBatBalanceWei, erc20.bat.decimals)}`)
    expect(newBatBalanceWei).toBeGreaterThan(0) 
  })
}) 