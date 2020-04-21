import Question from "./Question.js";
import Quiz from "./Quiz.js";

const q1 = new Question();
const q2 = new Question();
const q3 = new Question();

const qArray = [q1, q2, q3];
const myQuiz = new Quiz(qArray);
console.log(myQuiz);