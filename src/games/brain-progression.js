import readlineSync from 'readline-sync';

function generateGeometricProgression(start, ratio, length) {
  const progression = [];
  for (let i = 0; i < length; i++) {
    progression.push(start * Math.pow(ratio, i));
  }
  return progression;
}

export function initProgressionGame(userName) {
  console.log('What number is missing in the progression?\n');

  const rounds = 3;

  for (let i = 0; i < rounds; i++) {
    const start = Math.floor(Math.random() * 10) + 1;
    const ratio = Math.floor(Math.random() * 5) + 2;
    const length = Math.floor(Math.random() * 6) + 5;

    const progression = generateGeometricProgression(start, ratio, length);

    const hiddenIndex = Math.floor(Math.random() * length);
    const correctAnswer = progression[hiddenIndex];

    progression[hiddenIndex] = '..';

    console.log(`Question: ${progression.join(' ')}`);
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
