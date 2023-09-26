const displaySearchResults = async (event) => {
    event.preventDefault();
    /* Displays a user profile once clicked on */
}

const incorrectDebug = async (event) => {
    event.preventDefault();
    /* Displays a error message stating "user is not ready to date" */
}

let questionIndex = 0;

let questions = [
    {
        question: 
        `How do you correct this:
        <link http="stylesheet" href="/css/jass.css"> So that stylesheet jass.css, which is found in the css folder is linked?`,
        selections: [`<link img="stylesheet" href="/css/jass.css">`, `<link https="stylesheet" href="/css/jass.css">`, `<link rel="stylesheet" href="/css/jass.css">`, `<link src="stylesheet" href="/css/jass.css">`],
        correct: `<link rel="stylesheet" href="/css/jass.css">`,
    },

    {
        question: `How do you correct this code so that an event lister is added to the id logout in the DOM?: document.querySelector('#logout').addEventListener('click', logout);`,
        selections: [`document.querySelector('.logout').addEventListener('click', logout);`, `document.querySelector('#logout').addEventListener('click', logout);`, `document.querySelector('^logout').addEventListener('click', logout);`, `document.querySelector('#logout').addListener('click', logout);`, `document.query('#logout').addEventListener('click', logout);`],
        correct: `document.querySelector('#logout').addEventListener('click', logout);`,
    },

    {
        question: `How do you correct this code so that photo image.jpg is correctly rendered?: <img scr="image.jpg" alt="Description of the image">`,
        selections: [`<img src="images.jpg" alt="Description of the image">`, `<img> src="image.jpg" alt="Description of the image">`, `<img src="image.jpg">< alt="Description of the image">`, `<img src="image.jpg" alt="Description of the image">`, "Code is correct as is"],
        correct: `<img src="image.jpg" alt="Description of the image">`,
    },

    {
        question: `How would you correct this code to display a header with text Hello world: <h2 Hello World</h2>`,
        selections: [`<h2>Hell0 World</h2>`, `<h1>Hello World </h2>`, `<h2>Hello World</h2>`, "Code is correct as is"],
        correct: `<h2>Hello World</h2>`,
    },

    {
        question: `How would you correct this code  to link login.js file from the folder js to another page?: <script scr="/js/login.js"></script>`,
        selections: [`<script rel="/js/login.js"></script>`,`<script src="/js/login.js"></script>`, `<scrip src="/js/login.js"></script>`, "Code is correct as is"],
        correct: `<script src="/js/login.js"></script>`,
    },

];

function userChoice(event) {
    let userChoice = event.target.textContent /* user choice is the target of the click */
     let correctChoice = questions[questionIndex].correct;
     if (userChoice === correctChoice) {
         displaySearchResults() /* if the correct choice is made them the userCorrect function is called */
     }else {
         incorrectDebug() /* if the incorrect choice is made them the userIncorrect function is called */
     }
    };

