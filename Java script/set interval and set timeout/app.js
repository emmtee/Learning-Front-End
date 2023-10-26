// console.log('Hello')
// setTimeout(() =>{
//     console.log("Are you still there")
// }, 3000)
// console.log('goodbye')


const id = setInterval(() =>
{
    const die1 = Math.floor(Math.random()* 6 + 1)
    const die2 = Math.floor(Math.random()* 6 + 1)
    console.log('**********')
    console.log(`First die = ${die1}
Second die = ${die2}`)
    console.log('**********')
}, 2k000)
console.log('Throwing two dice')
setTimeout(() => {
    clearInterval(id)
}, 10000)