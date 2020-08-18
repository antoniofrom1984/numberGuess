let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

// make sure is a rounded number
const generateTarget = () => Math.floor(Math.random() * Math.floor(10));

const compareGuesses = (human, computer, secret) => {
// calculate the least difference between guesses and computer

  const humanGuess = Math.abs(human - secret);
  const computerGuess = Math.abs(computer - secret);

  return humanGuess <= computerGuess;

  // if (humanGuess <= computerGuess) {
  //   return true;
  // }
  // if (humanGuess > computerGuess) {
  //   return false;
  // }
};

// // testing all cases
// //     human wins
// const a = compareGuesses(4,9,5);
//     // computer wins
// const b =compareGuesses(1,6,5);
//     // human wins on tie
// const c =compareGuesses(6,6,5);

// console.log(a)
// console.log(b)
// console.log(c)


const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore += 1;
  }

  if (winner === 'computer') {
    computerScore += 1;
  }
};


const advanceRound = () => {
  currentRoundNumber += 1;
};
