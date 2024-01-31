# Social Network API

## Table of Contents

- [Title](#title)
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Demonstrations](#demonstrations)

## Description

This repository contains the source code for a social networking API. This was made using Mongoose ODM and MongoDB to allow for the creation of users, their 'thoughts,' and 'reactions' to said thoughts. Its responses to HTTP requests are verbose, and subdocuments come pre-populated for a potential front-end. It also features virtual fields created on the fly to display the number of the user's thoughts, the number of a thought's reactions, and a much cleaner formatted date object that anyone can appreciate.

## Installation

You will need to have MongoDB and the MongoDB Compass installed to navigate the database, and NodeJS for the runtime environment. The server can be started from bash, but I strongly recommend something like VSCode's integrated terminal for this, as the instructions will use it.

    1. Clone the project
    2. Navigate to your MongoDB compass and create a connection with the string found in the 'config/connection.js' file (it is also the standard connection string)
    3. Right-click the file titled 'server.js' and select 'Open in Integrated Terminal'
    4. We'll need to install all of the project's dependencies, so enter `npm i`
    5.1 There's no need to create the database manually, since MongoDB creates it the second data is added, but you have here either the option to start clean and empty or seed the database. If you want to begin creating manually, proceed to the final step.
    5.2 Otherwise to seed the database, enter the custom script `npm run seedUsers`, and once that's finished enter `npm run seedThoughts`. (Please note) Since these seeds are for testing, the 'users' are friendless and thoughtless by default, and the 'thoughts' are not fully referenced to their 'users'. There are no issues linking the two when creating thoughts from scratch, however.
    6. Finally we are ready to begin, so enter 'npm run start'

## Usage

Link to project: https://github.com/JBassard97/Social_Network_API

Once you've followed the steps in 'Installation' and entered `npm run start`, a listening message will show in the terminal and you're set to begin testing it in a tool like Insomnia, Postman, or directly in the browser. For my demonstrations I'll be using Insomnia to manage collections of requests. When you are finished running the server, be sure to enter 'Ctrl + C'. Here is a brief layout of the routes and what the API expects and returns (all in JSON):

## User Routes

### /api/users

`GET` request returns all users

`POST` request creates a new user with the request body:

    {
        "username": "Your Username",
        "email": "example@example.com"
    }

### /api/users/:userId

`GET` request returns one user by their _id

`PUT` request updates a user by their _id with a new username or email with the request body:

    {
        "username": "Updated Username",
        "email": "Updated Email"
    }

`DELETE` request will delete a user with their _id

### /api/users/:userId/friends/:friendId

`POST` request will add a friend to user's 'friends' field. :userId is the user we're adding to, :friendId is the _id of the user we're adding.

`DELETE` request will remove a friend from user's 'friends' field. :userId is the user we're removing from, :friendId is the _id of the user we're removing.

## Thought Routes

### /api/thoughts

`GET` request returns all thoughts

`POST` request creates a new thought with the request body:

    {
        "thoughtText": "The Text of the Thought",
        "username": "Username that MUST already exist"
    }

### /api/thoughts/:thoughtId

`GET` request returns one thought by its _id

`PUT` request updates a thought by its _id with a new thoughtText with the request body:

    {
        "thoughtText": "Updated Text of the Thought"
    }

`DELETE` request will delete a thought by its _id

### /api/thoughts/:thoughtId/reactions

`POST` request creates a new reaction to a thought with the request body:

    {
        "reactionBody": "The Body of the Reaction",
        "username": "Username that MUST already exist"
    }

### /api/thoughts/:thoughtId/reactions/:reactionId

`DELETE` request will remove a reaction from its thought's reactions field. :thoughtId is the _id of the thought we're removing from, :reactionId is the _id of the reaction we're removing.

## Demonstrations

### Server Setup
[Social_Network_Api Server Setup Demonstration.webm](https://github.com/JBassard97/Social_Network_API/assets/142551579/9a205b48-ba9b-45f8-8a8b-804151e70707)

### User Routes
[Social_Network_Api User Routes Demonstration.webm](https://github.com/JBassard97/Social_Network_API/assets/142551579/96c52d23-69ba-4a9d-942c-a236a943e727)

### Friend Routes
[Social_Network_Api Friend Routes Demonstration.webm](https://github.com/JBassard97/Social_Network_API/assets/142551579/dc677d83-8575-4057-8e27-5e99a4c0827e)

### Thought Routes
[Social_Network_Api Thought Routes Demonstration.webm](https://github.com/JBassard97/Social_Network_API/assets/142551579/12d09df6-af30-44f7-9060-b4e17fb9baa8)

### Reaction Routes
[Social_Network_Api Reaction Routes Demonstration.webm](https://github.com/JBassard97/Social_Network_API/assets/142551579/05e5f7d3-9ba7-489d-8744-b38c885f31b7)

## BONUS (Thoughts Deleted along with thier User)
[Social_Network_Api Deleting Thoughts with their Users.webm](https://github.com/JBassard97/Social_Network_API/assets/142551579/8164a078-0ad7-448c-a67b-cd538bff937f)











