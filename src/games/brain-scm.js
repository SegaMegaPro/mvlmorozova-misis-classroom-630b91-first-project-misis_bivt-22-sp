import readlineSync from 'readline-sync';

function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}

function lcm(a, b) {
  return Math.abs(a * b) / gcd(a, b);
}

function findLCM(a, b, c) {
  return lcm(lcm(a, b), c);
}

export function initLCMGame(userName) {
  console.log('Find the smallest common multiple of given numbers.\n');

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const num1 = Math.floor(Math.random() * 100) + 1;
    const num2 = Math.floor(Math.random() * 100) + 1;
    const num3 = Math.floor(Math.random() * 100) + 1;

    const correctAnswer = findLCM(num1, num2, num3);

    console.log(`Question: ${num1} ${num2} ${num3}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (parseInt(userAnswer, 10) === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}
