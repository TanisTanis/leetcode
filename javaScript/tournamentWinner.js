function tournamentWinner(competitions, results) {
  let scores = {};

  for (let i = 0; i < competitions.length; i++) {
    let winner;

    if (results[i] === 0) {
      winner = competitions[i][1];
    }
    if (results[i] === 1) {
      winner = competitions[i][0];
    }

    if (scores[winner]) {
      scores[winner] += 3;
    } else {
      scores[winner] = 3;
    }
  }

  let highScore = 0;
  let tournamentWinner;

  for (let team in scores) {
    if (scores[team] > highScore) {
      highScore = scores[team];
      tournamentWinner = team;
    }
  }

  return tournamentWinner;
}
