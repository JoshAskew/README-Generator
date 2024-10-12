// TODO: Include packages needed for this application
import fs from 'fs';
import inquirer from 'inquirer';
import generateMarkdown from './generateMarkdown.js';
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?' // Prompt for the project title
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project:' // Prompt for the project description
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?' // Prompt for the installation instruction
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How is the project used?' // Prompt for usage information
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines?' // Prompt for contribution guidelines
    },
    {   type: 'input',
        name: 'test',
        message: "How can someone test that all the code is working?" //Prompt for testing instructions
    },    
    {
        type: 'list',
        name: 'license',
        message: 'What is the license type?', //Prompt for license type
        choices: [
            'MIT', //License choices
            'Apache 2.0',
            'GPL 3.0',
            'BSD 3-Clause'
        ]
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?' // Prompt for GitHub username
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your E-mail address?' // Prompt for user email address
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing to file:', err); // Logs an error if writing fails
        } else {
            console.log('README file has been generated successfully!'); // Confirms that the file was created successfully
        }
    });
}

// TODO: Create a function to initialize app
async function init() {
    try {
        const answers = await inquirer.prompt(questions);
        const content = generateMarkdown(answers); //Generates markdown content from the users answers
        writeToFile('dist/README.md', content); // Writes the genereated content to a README file inside the dist folder
    } catch (error) {
        console.error('Error initializing app:', error); //Logs an error if initialization fails
    }
}


// Function call to initialize app
init();
