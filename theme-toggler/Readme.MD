# Theme Toggler

🛠️ Practical Mini-Project: The Theme TogglerLet's build a simple web page where JavaScript changes the background color when a user clicks a button.

## Getting Started
1. Create Your Files. Create a new folder on your computer and make these two files inside it:
   1. index.html
   2. script.js
   
## Running the app
1. Install Node.js (for light server)
   1. Go to the official website: nodejs.org
         
             


   2. Download the version labeled LTS (Long Term Support).
   3. Run the installer file you downloaded. Click Next through all the prompts and accept the defaults.
        or Run in Powershell

            winget install OpenJS.LTS 

2. Restart Your Terminal (Importatnt: Close all terminals and powershell open otherwise Node will not detect)
   1. Once the installation finishes, your open terminal window won't notice the change until you reset it.
   2. Close your current terminal or VS Code entirely.
   3. Reopen your terminal or VS Code
3. Initialize Node.js in your project folder

    Open your terminal, navigate to your folder containing index.html and script.js, and 

        npm init -y
   
   If there's an error in the powershell to initialize 

        Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

4. Install the local server tool
      Run the command to download a lightweight development server:

         npm install lite-server --save-dev

5. Configure Your Package File
   1. Open your code editor and look inside your project folder. You will see a new file called package.json. Click to open it.
   2. Find the "scripts" section. It currently looks like this:
    

            "scripts": {
            "test": "echo \"Error: no test specified\" && exit 1"}
6. Change it by adding a "start" command, so it looks exactly like this to:
   
         "scripts": {
         "test": "echo \"Error: no test specified\" && exit 1",
         "start": "lite-server"}

7. Now your light server Node.js is up and running

