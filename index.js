// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",
        name:"Title",
        message:"What is the Title of your project?",

    },{
        type:"input",
        name:"Description",
        message:"Please tell me about your project!",
    },{
        type:"input",
        name:"Motivation",
        message:"Why did you build this project?",
        
    },{
        type:"input",
        name:"solve",
        message:"What problem does this application Solve?"
    },{
        type:"input",
        name:"Learn",
        message:"What did you learn while Creating this project? "
    },{
        type:"input",
        name:"Installation",
        message:"How do I install this application?",

    },{
        type:"input",
        name:"Usage",
        message:"How can i use this project on a day to day basis?",

    },{
        type:"input",
        name:"Guidelines",
        message:"May I have the guidelines for users to contribute to this application?",
    },{
        type:"input",
        name:"TestInstructions",
        message:"May I have the insctructions to test that this application functions properly?",
    },{
        type:"list",
        name:"license",
        message:"Please choose a license for this project",
        choices:["None","Apache License 2.0", "GNU General Public License v3.0", "MIT License", 'BSD 2-Clause "Simplified" License',
                 'BSD 3-Clause "New" or "Revised" License',"Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
                 "Eclipse Public License 2.0", "GNU Affero General Public License v3.0", "GNU General Public License v2.0",
                 "GNU Lesser General Public License v2.1", "Mozilla Public License 2.0", "The Unlicense" ],
    },{
        type:"input",
        name:"GitHub",
        message:"May I have your GitHub username?",
    },{
        type:"input",
        name:"Email",
        message:"May I have your email address?",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName,data,(err) => {
    if (err){
        console.log('Error creating file', err);
    }else{
        console.log('you created a readMe!');
    }
})
    

 
   
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) =>{
        

    
 
    
    writeToFile('README.md', generateMarkdown(answers));


    })
}

// Function call to initialize app
init();

/* What was your motivation?
Why did you build this project? (Note: the answer is not "Because it was a homework assignment.")
What problem does it solve?
What did you learn?
What makes your project stand out? */


/*GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README */

/*
Title,
Description of the project,
Installation insctructions,
Usage information,
contribution Guidelines,
and test instructions,
Licsense,
Github username,
email address,
click on link and go to that section of the page
 */

    //  https://img.shields.io/badge/license-%20MIT-red                     MIT license badge
    //  https://img.shields.io/badge/license-%20Apache%202.0-green           Apache 2.0 license badge
    //  https://img.shields.io/badge/license-%20GNU%20public%20v3.0-green      GNU General Public Licesne v3.0
    //  https://img.shields.io/badge/license-%20BSD%202-blue                      BSD 2-Clause "Simplified" License
    //  https://img.shields.io/badge/license-%20BSD%203-purple                        BSD 3-Clause "New" or "Revised" License
    //  https://img.shields.io/badge/license-%20Boost%20Software%20License-pink           Boost Software License 1.0
    //  https://img.shields.io/badge/license-%20Commons%20zero%20v1.0%20License-yellow       Creative Commons Zero v1.0 Universal
    //  https://img.shields.io/badge/license-%20Eclipse%20Public%202.0%20License-red              Eclipse Public License 2.0
    //  https://img.shields.io/badge/license-%20GNU%20Affero%20Public%20v3.0%20License-blue          GNU Affero General Public License v3.0
    //  https://img.shields.io/badge/license-%20GNU%20Public%20v2.0%20License-purple                   GNU General Public License v2.0
    //  https://img.shields.io/badge/license-%20GNU%20%20Lesser%20Public%20v2.1%20License-pink            GNU Lesser General Public License v2.1
    //  https://img.shields.io/badge/license-%20Mozilla%20Public%2                                            Mozilla Public License 2.0
    //  https://img.shields.io/badge/license-%20The%20Unlicense-red                                              The Unlicense

    
    