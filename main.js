import Question from "./Question.js";
import Quiz from "./Quiz.js";

const App = (function() {
    let counter = 0;

    const doubleCounter = () => {
        counter *= 2;
    }

    const incrementCounter = () => {
        counter++;
    }
    const getCounter = () => {
        return counter;
    }
    const setCounter = (newNum) => {
        counter = newNum;
    }
    return {
        get: getCounter,
        set: setCounter
    }
})();

console.log(App.get());
App.set(2);
console.log(App.get());