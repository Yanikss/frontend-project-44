const MAX = 100;
const primality = (n) => {
    for (let i = 2; i < n; i++) {
       if (n % i === 0) return false;
    }
    return n > 1;
}
export const newQuestionWithAnswer = () => {
    const question = Math.floor(Math.random() * MAX);
    let correctAnswer = primality(question) ? 'yes' : 'no'

    return [question, correctAnswer];
}

export const check = (correctAnswer, answer) => {
    return correctAnswer === answer;
}
