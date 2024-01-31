# Social Network API

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Screenshots](#screenshots)

## Description

This repository contains the source code for a social networking API. This was made using Mongoose ODM and MongoDB to allow for the creation of users, their 'thoughts,' and 'reactions' to said thoughts. Its responses to HTTP requests are verbose, and subdocuments come pre-populated for a potential front-end. It also features virtual fields created on the fly to display the number of the user's thoughts, the number of a thought's reactions, and a much cleaner formatted date object that anyone can appreciate.

## Installation

You will need to have MongoDB and the MongoDB Compass installed to navigate the database, and NodeJS for the runtime environment. The server can be started from bash, but I strongly recommend something like VSCode's integrated terminal for this, as the instructions will use it. To begin, follow these steps:

## Usage

Link to project: https://github.com/JBassard97/Social_Network_API
Once you've followed the steps in 'Installation' and entered `npm run start`, a listening message will show in the terminal and you're set to begin testing it in a tool like Insomnia, Postman, or directly in the browser. For my demonstrations I'll be using Insomnia to manage collections of requests. When you are finished running the server, be sure to enter 'Ctrl + C'. Here is a brief layout of the routes and what the API expects and returns (all in JSON):

    1. Clone the project
    2. Navigate to your MongoDB compass and create a connection with the string found in the 'config/connection.js' file (it is also the standard connection string)
    3. Right-click the file titled 'server.js' and select 'Open in Integrated Terminal'
    4. We'll need to install all of the project's dependencies, so enter `npm i`
    5.1 There's no need to create the database manually, since MongoDB creates it the second data is added, but you have here either the option to start clean and empty or seed the database. If you want to begin creating manually, proceed to the next step.
    5.2 Otherwise to seed the database, enter the custom script `npm run seedUsers`, and once that's finished enter `npm run seedThoughts`. (Please note) Since these seeds are for testing, the 'users' are friendless and thoughtless by default, and the 'thoughts' are not fully referenced to their 'users'. There are no issues linking the two when creating thoughts from scratch, however.
    6. Finally we are ready to begin, so enter 'npm run start'

## Screenshots
