const seatingChart = [
    ['Emituntun', 'Ife', 'Rebecca'],
    ['Emmanuel', 'Kehinde', 'Samuel'],
    ['Taiwo', 'Adesola', 'Qoyum']
]
// for(let i = 0; i < seatingChart.length; i++)
// {

//     let student = seatingChart[i]

//     for(let j = 0; j < student.length; j++ )
//     {
//         console.log(student[j])
//     }
// }
for (let row of seatingChart) {
    for (let student of row) {
        console.log(student)
    }
}
const testScores = {
    Emituntun: 89,
    Ife: 81,
    Rebecca: 90,
    Emmanuel: 69,
    Kehinde: 92,
    Samuel: 87,
    Taiwo: 54,
    Adesola: 93,
    Qoyum: 95
}
for (let person in testScores) {
    console.log(`${person} scored ${testScores[person]}`)
}
console.log(Object.keys(testScores))
console.log(Object.values(testScores))
console.log(Object.entries(testScores))
let average = 0;
let total = 0;
let minimum = Object.values(testScores)[0];
let maximum = Object.values(testScores)[0]
let lowestScorer = Object.keys(testScores)[0]
let highestScorer = Object.keys(testScores)[0]
for (let score of Object.values(testScores)) {
    total += score
    average = total / Object.values(testScores).length
    for (let i = 0; i < Object.values(testScores).length; i++) {
        if (minimum > Object.values(testScores)[i]) {
            minimum = Object.values(testScores)[i]
        }
        if (maximum < Object.values(testScores)[i]) {
            maximum = Object.values(testScores)[i]
        }
    }
}
for (let i = 0; i < Object.values(testScores).length; i++) {
    if(minimum === Object.values(testScores)[i])
    {
        lowestScorer = Object.keys(testScores)[i]
    }
    if(maximum === Object.values(testScores)[i])
    {
        highestScorer = Object.keys(testScores)[i]
    }
}

console.log(`The total Score of JSS3A is ${total}`);
console.log(`The average score is ${Math.floor(average)}`);
console.log(`In first place is ${highestScorer} who scored ${maximum} points`)
console.log(`In last place is ${lowestScorer} who scored ${minimum} points`)
