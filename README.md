# codeMantic

Code-Mantic, a tech-savvy dating website deployed on Heroku.

 ![License](https://img.shields.io/badge/license-MIT-blue.svg?style=for-the-badge)

## Description

Introducing CodeMantic, a groundbreaking project born from the collective creativity of GROUP 3!

Codemantic, isn't your ordinary dating website, it's a community-driven platform designed by developers, for developers. New users are brought up to home page, which allows them to either login or signup.

## Table of Contents

- [Installation](#installation)
- [Links](#links)
- [Module Two Resume](#module-two-resume)
- [Deployed Application Screenshot](#deployed-screenshot-of-application)
- [Technology's Used](#technologys-used)
- [MVC](#mvc)
- [Dependencies](#dependencies)
- [HTTP Status Code](#http-status-codes)
- [Bootstrap](#bootstrap)
- [Heroku](#heroku)
- [MySQL2](#mysql2)
- [Github](#github)
- [Handlebars](#handlebars)
- [Directory Structure](#directory-structure)
- [School Instructions](#school-instructions)
- [MISC](#misc)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Badges](#badges)
- [Tests](#tests)
- [Features](#features)

## Installation

### Clone Repository

Links:

- [Cloning a Repoistory](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [Troubleshooting cloning errors](https://docs.github.com/en/repositories/creating-and-managing-repositories/troubleshooting-cloning-errors)

## Links

:open_file_folder:

:arrow_forward: Github link:

:arrow_forward: Deployed Heroku Page Link:

## Module Two Resume

Writing a note here to remind us to deploy project to project two resume.

Link:

Images: (Optional)

## Deployed Screenshot of Application

This is where screenshot of deployed application will go

## Technology's Used

### INKSCAPE

Links:

- [Inkscape Website](https://inkscape.org/)
- [Features of Inkscape](https://inkscape.org/about/features/)

## MVC

### What is it?

The Model-View-Controller ( MVC ) framework is an architectural pattern that adheres to the seperation of concerns principle.

### Model

The Model stores data and data-related logic.

### View

The view is in charge of UI/UX concerns, or what a user will see and interact with.

### Controller

The controller is the interface between Models and Views. It processes requests from the View, uses the Model to manipulate data, and sends data to the View to render.

Links:

- [Model View Controller Wiki](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Modzilla MVC](https://developer.mozilla.org/en-US/docs/Glossary/MVC)

Images:

## Dependencies

- [Express](https://www.npmjs.com/package/express) popular web application framework for Node.js that simplifies process of building web applications/APIs
- npm install express
- [Express-handlebars](https://www.npmjs.com/package/express-handlebars) view engine for Express.js that allows you to use Handlebars templates in applications
- npm install express-handlebars
- [bcrypt](https://www.npmjs.com/package/bcrypt) library for hashing passwords securely
- npm install bcrypt

### Want to install all at once?

npm install express express-handlebars bcrypt

## HTTP Status Codes

### What are they?

Three-digit numbers returned by a web server in response to a client's request made to the server.

### Most Common Status Code

400 Bad Request: The server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).:no_entry:

200 Sucessful: The request succeeded.:heavy_check_mark:

Links:

- [HTTP status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Bootstrap

Links:

- [Bootstrap Images](https://getbootstrap.com/docs/4.0/content/images/)
- [Bootstrap Forms](https://getbootstrap.com/docs/5.3/forms/overview/)
- [BootStrap Badges](https://getbootstrap.com/docs/5.3/components/badge/)
- [Bootsrap Cards](https://getbootstrap.com/docs/5.3/components/card/#body)
- [Bootstrap Buttons](https://getbootstrap.com/docs/5.3/components/buttons/)
- [Bootstrap Accordion](https://getbootstrap.com/docs/5.3/components/accordion/)
- [Bootstrap Website](https://getbootstrap.com/)
- [Bootstrap Examples](https://getbootstrap.com/docs/5.3/examples/)
- [Bootstrap Themes](https://themes.getbootstrap.com/)
- [Guide](https://themes.getbootstrap.com/guide/)
- [Overview](https://getbootstrap.com/docs/4.5/layout/overview/)
- [Introduction](https://getbootstrap.com/docs/4.5/getting-started/introduction/#starter-template)
- [Bootstrap Blog](https://blog.getbootstrap.com/)
- [Box Sizing](https://css-tricks.com/box-sizing/)

## Heroku

Links:

- [Heroku: Getting Started](https://devcenter.heroku.com/articles/getting-started-with-nodejs?singlepage=true)
- [How to Install](https://coding-boot-camp.github.io/full-stack/heroku/how-to-install-the-heroku-cli)
- [The Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)
- [Heroku](https://www.heroku.com/)
- [Heroku Deployment Guide](https://coding-boot-camp.github.io/full-stack/heroku/heroku-deployment-guide)
- [Heroku vs AWS: What is the Difference?](https://www.guru99.com/heroku-vs-aws.html)
- [Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)

## mysql2

- [mysql2 npm](https://www.npmjs.com/package/mysql2)

## Github

### Common Commands

### Clone a repository from GitHub to your local machine

git clone repository-url

### Create a new branch

git checkout -b feature-branch

### Switch to an existing branch

git checkout existing-branch

### List all branches

git branch

### Add changes to staging area

git add .

### Commit changes with a commit message

git commit -m "commit message"

### Check status of local repository

git status

### Pull latest changes from main branch

git pull origin main

### Push changes to feature branch

git push origin feature-branch

## Handlebars

Links:

- [NPM PACKAGE HANDLEBARS](https://www.npmjs.com/package/express-handlebars)
- [Partials](https://handlebarsjs.com/guide/partials.html)
- [Expressions](https://handlebarsjs.com/guide/expressions.html)
- [Introduction](https://handlebarsjs.com/guide/)
- [Block Helpers](https://handlebarsjs.com/guide/block-helpers.html#basic-blocks)
- [Built In Helpers](https://handlebarsjs.com/guide/builtin-helpers.html)
- [Hooks](https://handlebarsjs.com/guide/hooks.html)

## Directory Structure

Config: Configuration Files, Which Includes Our Database Connection Settings, With File (connection.js.)
Server.js: Primary Entry Point For Express Application
Public: Holds Our Static Files Like CSS, JavaScript, And Images
Seeds: To Populate Our Database.
Models: Sequelize Models (which contains User.js and Form.js)
Utils: Contains Helper Functions.
Views: Handlebar Templates For Server-Rendered HTML Pages
db: Holds Schema.sql
Controllers: Route Handling. (Files, Such as, homeRoutes.js)

## School Instructions

Links:

- [Git Branching](https://git-scm.com/book/en/v2/Git-Branching-Branching-Workflows)
- [Agile Software](https://en.wikipedia.org/wiki/Agile_software_development)
- [Project Presentation Template](https://docs.google.com/presentation/d/10QaO9KH8HtUXj__81ve0SZcpO5DbMbqqQr4iPpbwKks/edit#slide=id.p)
- [Guide To Deploy with Heroku and MySQL](https://coding-boot-camp.github.io/full-stack/heroku/deploy-with-heroku-and-mysql)
- [Full Stack Blog](https://coding-boot-camp.github.io/full-stack/)
- [Learn Enough Git to Be Dangerous](https://www.learnenough.com/git-tutorial/getting_started)

Images:

![Full Stack](<images/fullstack project.jpg>)
![Presentation Requirements](<images/presentation requirements.jpg>)
![Project Requirements](images/project-requirements.jpg)

## MISC

Links:

- [Dating Profile Bios](https://mydatingadviser.com/best-dating-profile-bios/)

### To See A List Of Scripts

npm run

### Check For Updates

npm outdated

### Update All Packages

npm update

### Update One Package

npm update package-name

### Run Tests

npm test

Links:

[Youtube Video Peyton All npm Commands](https://www.youtube.com/watch?v=lNLeRmnkug8)

Images:

![npm help](<images/npm help.jpg>)
![updated or not updated verisons of dep](<images/server.js - codeMantic - Visual Studio Code 9_21_2023 1_46_40 AM.jpg>)

## License

:heavy_exclamation_mark:

 ![License](https://img.shields.io/badge/license-MIT-pink.svg?style=for-the-badge)

 This project is licensed under the MIT License

## How to Contribute

:tada:

N/A

## Badges

:trophy:

N/A

## Tests

N/A

## Features

:sparkler:

N/A