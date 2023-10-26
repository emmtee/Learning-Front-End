// function callTwice (func)
// {
//     func();
//     func();
// }
// function rollDie()
// {
//     let die = Math.floor(Math.random()*6 + 1)
//     console.log(die)
// }
// callTwice(rollDie)
// function makeMysteryFunc() {
//     const rand = Math.random()
//     if (rand > 0.5) {
//         return function () {
//             console.log("CONGRATS THIS IS THE GOOD FUNCTION!!!")
//             console.log("YOU WIN A BILLION DOLLARS!!!!")
//         }
//     }
//     else
//     {
//         return function ()
//         {
//             alert(['YOU ARE GOING TO SELF DESTRUCT IN FIVE!!!!!'])
//             alert('FOUR!!!!')
//             alert('THREE!!!')
//             alert('TWO!!')
//             alert('ONE!')
//             alert('BOOOOOOMM!!!!!!')
//         }
//     }
// }
// let mystery = makeMysteryFunc();
// mystery();
function makeBetweenFunc(x, y) {
    return function isBetween(z) {
        if (x < y) {
            return z >= x && z <= y;
        }
        else if (y < x) {
            return z >= y && z <= x;
        }
        else {
            return 'nope'
        }
    }
    
}
const isChild = makeBetweenFunc(0, 18)
const isAdult = makeBetweenFunc(19, 64)
const isSenior = makeBetweenFunc(65, 120)