const MAX = 100;

export const newQuestionWithAnswer = () => {
    const question = Math.floor(Math.random() * MAX);
    let correctAnswer = (question % 2 === 0) ? 'yes' : 'no'

    return [question, correctAnswer];//['4+3', 7]
}

export const check = (correctAnswer, answer) => {
    return correctAnswer === answer;
}
