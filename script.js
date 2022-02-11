// Team 1 Average vs Team 2 Average

const calcAverage = (a, b, c) => (a + b + c) / 3;
console.log(calcAverage(1, 2, 3))

const scoreTeam1 = calcAverage(44, 23, 71);
const scoreTeam2 = calcAverage(65, 54, 49);
console.log(scoreTeam1, scoreTeam2);

const checkWinner = function (avgTeam1, avgTeam2) {
    if (avgTeam1 >= 2 * avgTeam2) {
        console.log(`Team 1 wins ${avgTeam1}`);

    } else if (avgTeam2 >= 2 * avgTeam2) {
        console.log(`Team 2 win ${avgTeam2}`)
    }
}

checkWinner(scoreTeam1, scoreTeam2);

checkWinner(555, 111)
