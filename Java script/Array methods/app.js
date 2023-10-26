const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
const doubles = numbers.map(function (num) {
    return num * 2
})

// numbers.forEach(function(el){if(el % 2 === 0){console.log(el)}})
// for(let el of numbers)
// {
//     console.log (el)
// }
const movie =
    [
        {
            title: 'Aross The Spiderverse',
            rating: 90
        },
        {
            title: 'Blue Beetle',
            rating: 72
        },
        {
            title: 'Fast X',
            rating: 76
        },
        {
            title: 'Oppenheimer',
            rating: 91
        }
    ]
// // movie.forEach(function(movie){console.log(`${movie.title} - ${movie.rating}/10`)})
// const title = movie.map(function(movie){return movie.title.toUpperCase()})

///Arrow functions
// const add = function (x, y) { return x + y }
// const add2 = (x, y) => { return x + y }
// const square = (x) => { return x **2 }
// const rollDie = () => {
//  return Math.floor(Math.random() * 6 + 1)
// }
// const greet = (name) =>
// {
//     return `Hey ${name}`
// }
// const isEven = (num) => num % 2 === 0
const blockBuster = movie.map((movie) =>(
    `${movie.title.toUpperCase()} - ${movie.rating/10}`
)

)

