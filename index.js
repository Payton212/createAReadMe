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
        choices:["None","Apache License 2.0", "GNU General Public License v3.0", "MIT", 'BSD 2-Clause "Simplified"',
                 'BSD 3-Clause "New" or "Revised"',"Boost Software License 1.0", "Creative Commons Zero v1.0 Universal",
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

