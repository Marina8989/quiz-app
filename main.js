import Question from "./Question.js";
import Quiz from "./Quiz.js";

const App = (() => {
    //cache the DOM
    const quizEl = document.querySelector('.jabquiz');
    const quizQuestionEl = document.querySelector('.jabquiz__question');
    const trackerEl = document.querySelector('.jabquiz__tracker');
    const tagLineEl = document.querySelector('.jabquiz__tagline');
    const choicesEl = document.querySelector('.jabquiz__choices');
    const progressInnerEl = document.querySelector('.porgress__iner');
    const nextButtonEl = document.querySelector('.next');
    const restartButtonEl = document.querySelector('.restart');


    const q1 = new Question(
        "First President of US?", ['Barack', 'Bush', 'Gearge', 'Oprah'], 2)

    const q2 = new Question(
        "When was JavaScript created?", ['June 1995', 'May 1995', 'Sep 1996', 'Oprah'], 1
    )
    const q3 = new Question(
        "What does CSS stand for?", ['County Sherif Service', 'Cascating Sexy Sheets', 'Cascating Style Sheets', 'Oprah'], 2
    )
    const q4 = new Question(
        "The full form of HTML is ...?", ['Hold the Mic', 'Error', 'Yo html', 'Hyper Text Markup Language'], 3
    )

    const quiz = new Quiz([q1, q2, q3, q4]);
    console.log(quiz);
})();