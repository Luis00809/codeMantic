
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

function redirectToHomepage() {
    window.location.href = 'http://localhost:3027/'
}


let questionElement = document.getElementById('question');
let randomIndex = Math.floor(Math.random() * questions.length);
let randomQuestion = questions[randomIndex];
questionElement.innerHTML = randomQuestion.question;


randomQuestion.selections.forEach((selection) => {
    let button = document.createElement('button');
    button.textContent = selection;
    questionElement.append(button);
  
    button.addEventListener('click', function() {
      if (selection === randomQuestion.correct) {
        // Redirect to a new page
        window.location.href = 'http://localhost:3027/solved';
      } else {
        setTimeout(redirectToHomepage, 3000);
        questionElement.innerHTML = "Error Code 400: Incorrect answer. Please brush up on your coding knowledge before trying again"
      }
    });
  });
  
  console.log(randomQuestion)



