export const newQuestionWithAnswer = () => {
  const count = Math.floor(Math.random() * 5) + 5;
  const step = Math.floor(Math.random() * 5) + 2;
  const randomIndex = Math.floor(Math.random() * count);
  const result1 = [];
  let correctAnswer;
  for (let s = 1; result1.length < count; s += step) {
    if (result1.length === randomIndex) {
      result1.push('..');
      correctAnswer = s;
    } else {
      result1.push(s);
    }
  }

  const question = result1.join(' ');
  return [question, correctAnswer];// ['4+3', 7]
};

export const check = (correctAnswer, answer) => correctAnswer === +answer;
