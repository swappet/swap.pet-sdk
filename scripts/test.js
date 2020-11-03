// SPDX-License-Identifier: Apache-2.0
// Copyright 2020 Swap.Pet@pm.me
// scripts/test.js 
const fs = require('fs');
var inquirer = require('inquirer');
const { spawn } = require('child_process');
const { getTestFiles } = require("./utils");

const testDir = 'test/'; 
const test = async () => {
    const files = await getTestFiles(testDir);

    inquirer.prompt([
        {
            type: 'list',
            name: 'step1',
            message: 'select test tasks',
            choices: files,
        }
    ])
        .then(answers => { 
            let argv=["hardhat","test"];
            let note="hardhat test ";  
            if(answers.step1 !== 'all'){
                console.log(note + testDir + answers.step1);
                argv.push(testDir + answers.step1); 
            }else{ 
                console.log(note);
            }
            spawn("npx",argv, {
                stdio: 'inherit',
                shell: true
            });

        });
}
test();
