// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
// // numbers.filter(n => {
// //     return (n < 10)
// // })
// const blockBuster = [
//     {
//         title: 'Into the spiderverse',
//         rating: 84,
//         length: 116
//     },
//     {
//         title: 'Fast X',
//         rating: 58,
//         length: 141
//     },
//     {
//         title: 'Barbie',
//         rating: 77,
//         length: 114
//     },
//     {
//         title: 'Oppenheimer',
//         rating: 92,
//         length: 180
//     },
//     {
//         title: 'Avengers Infinity War',
//         rating: 84,
//         length: 149
//     },
//     {
//         title: 'Across the spiderverse',
//         rating: 88,
//         length: 140
//     }
// ]
// // const goodMovies = blockBuster.filter(m => m.rating > 80)
// // const goodTitles = blockBuster.filter(m => m.rating > 80).map(m => m.title)
// // const badMovies = blockBuster.filter(m => m.rating < 70)
// // const longMovies = blockBuster.filter(m => m.length > 140)
// // const userNames = ['rebbeca', 'oyinechukwu', 'thisisgreaterthan10', 'ten']
// // const validUserNames = userNames.filter(u => u.length < 4)

// const exams = [80, 92, 73, 65, 82, 72, 54, 23, 78, 62, 59]
// const pass = exams.filter(score => score >= 75)
// pass.every(score => score >= 75)


// blockBuster.some(movie => movie.rating > 70)

// const allEvens = arr => arr.every(num => num % 2 === 0)
// const total = exams.reduce((sum, score) => {
//     return sum + score
// })
// const minScore = exams.reduce((min, score) => {
//     if (min > score) {
//         return score
//     }
//     return min
// })
// const maxScore = exams.reduce((min, score) => {
//     if (min < score) {
//         return score
//     }
//     return min
// })
// const longestTime = blockBuster.reduce((longestMovie, currentMovie) => {
//     if(longestMovie.length < currentMovie.length)
//     {
//         return currentMovie
//     }
//     return longestMovie
// }).title

const personnel =
{
    firstName: "Ludwig",
    lastName: "Beethoven",
    authoriz: "Low Personnel",
    fullName: function(){
       return `${this.firstName} ${this.lastName}`
    },
    shoutName: function()
    {
        setTimeout(()=>
        {
            console.log(this.fullName())
        }, 3000)
    }
}