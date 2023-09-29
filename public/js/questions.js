
let questions = [

    {
        question: `Which of the following is correct so that an event lister is added to the id logout?`,
        selections: [`document.querySelector('.logout').addEventListener('click', logout);`, `document.querySelector('#logout').addEventListener('click', logout);`, `document.querySelector('^logout').addEventListener('click', logout);`, `document.querySelector('#logout').addListener('click', logout);`, `document.query('#logout').addEventListener('click', logout);`],
        correct: `document.querySelector('#logout').addEventListener('click', logout);`,
    },

    {
        question: `Which of the following is correct code so that photo image.jpg is correctly rendered?: `,
        selections: [`<img src="images.jpg" alt="Description of the image">`, `<img> src="image.jpg" alt="Description of the image">`, `<img src="image.jpg">< alt="Description of the image">`, `<img src="image.jpg" alt="Description of the image">`],
        correct: `<img src="image.jpg" alt="Description of the image">`,
    },

    {
        question: `Which of the following is correct code to display a header with text Hello world: <h2 Hello World</h2>`,
        selections: [`<h2>Hell0 World</h2>`, `<h1>Hello World </h2>`, `<h2>Hello World</h2>`, "None of the above"],
        correct: `<h2>Hello World</h2>`,
    },

    // {
    //     question: `Which line of code is correct to link login.js file from the folder js to another page?`,
    //     selections: [`<script rel="/js/login.js"></script>`,`<script src="/js/login.js"></script>`, `<scrip src="/js/login.js"></script>`, "None of the above"],
    //     correct: `<script src="/js/login.js"></script>`,
    // },

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



