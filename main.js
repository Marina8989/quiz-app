import Question from "./Question.js";
const q1 = new Question('What is 2 + 2?', [2, 3, 4, 5], 2);
console.log(q1.isCorrect(2));