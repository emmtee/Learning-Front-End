const dieRoll = (sides = 6) => Math.floor(Math.random() * sides + 1)
//sprread
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20]
// Math.max(...number)

// const lettersChar = 'abcdefghijklmnop'
// const letters = [...lettersChar]
//  const char = [...number, ...letters]

// const login = {
//     email: 'rooolie@gmail.com',
//     password: 'rooledeez123@',
//     username: 'roolieolie'
// }
// const newUser = {...login, id: 123973, isAdmin: false}

// rest

//  const sum = (total) => total.reduce((total, num) => total + num)

// const multiply = (...numbers) => numbers.reduce((total, num) => total + num)

// const raceResult = (gold, silver, bronze, ...everyoneElse) =>
// {
//     console.log(`Gold medal goes to: ${gold}`)
//     console.log(`Silver medal goes to: ${silver}`)
//     console.log(`Bronze medal goes to: ${bronze}`)
//     console.log(`Thanks you ${everyoneElse} for participating`)

// }
const scores = [978, 982, 967, 807, 703, 964, 991, 908, 650]

const highScore = scores.reduce((score, high) => {
    if (score < high) {
        score = high
    }
    return score
})

function arrangeMaximally(arr) {
    const newArr = []
    while (arr.length != 0) {
        const highScore = arr.reduce((score, high) => {
            if (score < high) {
                score = high
            }
            return score
        })
       arr.splice(arr.indexOf(highScore), 1) 
       newArr.push(highScore)
    }
    
    
    return newArr
}
const modifiesScores = arrangeMaximally(scores)
const [gold, silver, bronze, ...everyoneElse] = modifiesScores