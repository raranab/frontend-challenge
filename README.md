Prepare the environment

Preconditions
- In order to get this started we need a few prerequisites, we will list them below and provide a small description as to what they are and what value they bring.

Things you'll need:

- Node.js - This is a runtime environment that will allow us to run javascript outside of your browser.
- Terminal (MacOS users) - Comes built-in with the MacOS Operating system.
- Visual Studio Code - We need a code editor to work with, in this case we will work with Visual Studio Code.
- Git - Very popular distributed version control tool, we will be uploading code created by the guild in Github and we need git installed to work with the code.

Configuration
- Open Terminal and create a folder to download the github repo:

mkdir <FOLDER_NAME>

Move to that folder and then Clone guild’s project:

cd <FOLDER_NAME>

git clone https://github.com/raranab/frontend-challenge.git

Install tescafe

npm install -g testcafe

General Description
- The project is created Page Object Model, creating a class for each Page in the application and the tests are created according the same feature to test.


Execute Tests
- There are several ways to configure your environment to run test, here are the options configured with this specific project.

All tests
To run the all Test configured execute:
npm run test-all-chrome

Specific Suite
To run an specific suite (Directory) use one of the following commands depending on the terminal you are using:
npm run test-{{test name}}-chrome
i.e. npm run test-login-chrome

