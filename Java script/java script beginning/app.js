// console.log("hello from Our first js file", 1 + 3)
// let minAge = 18;
// conditionall statements
//let age = prompt("How old are you")
// if(parseInt(age) > minAge)
// {
//     console.log("You can view this Site");
// }
// else if(age == minAge)
//  {
//     alert("You can view this site")
//  }
// else{
//     alert("YOu cannot view this site");
// }
//
// dayOfWeek = prompt("What is day is today").toLowerCase()
// if (dayOfWeek == "monday") {
//     console.log("UGHH MONDAYS")
// }
// else if (dayOfWeek == "tuesday") {
//     console.log("UGHH SECOND MONDAYS")
// }
// else if (dayOfWeek == "wednesday") {
//     console.log("WOOH HOO IM STILL WORKING")
// }
// else if (dayOfWeek == "thursday") {
//     console.log("THANK GOD IS THURSDAY")
// }
// else if (dayOfWeek == "friday") {
//     console.log("THANK GOD ITS FRIDAY")
// }
// else{
//     console.log("Stop trying to be smart loser!!!")
// }

// userInput = prompt("ENter something");
// if(userInput)
// {
//     console.log("TRUTHY!")
// }
// else
// {
//     console.log("FALSY!")
// }\
// const passCode = prompt("Enter a password")
// if(passCode >= 8 && passCode.indexOf(" ") === -1 )
// {
//     console.log("valid password")
// }
// else
// {
//     console.log("Invalid Format for password")
// }
// const firstName = prompt("Enter first name")
// if(!firstName)
// {
//     firstName = prompt("Try again DOOFUS!!")
// }
// const day = 2;
// switch (day) {
//     case 1:
//         console.log("MONDAY!")
//         break;
//     case 2:
//         console.log("TUESDAY!")
//         break;
//     case 3:
//         console.log("WEDNESDAY!")
//         break;
//     case 4:
//         console.log("THURSDAY!")
//         break;
//     case 5:
//         console.log("FRIDAY!")
//         break;
//     default:
//         console.log("I DONT KNOW THAT")


// }
// days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY','FRIDAY', 'SATURDAY']

//loops
// for(let i = 0; i <= 10; i++)
// {
//     console.log(i)
// }
// for(let i = 0; i <= 20; i++)
// {
//     if((i)%2 != 0)
//     {
//         console.log(i)
//     }
// }
// for(let i = 0; i <= 20; i+=2)
// {
//     console.log(i)
// }
// for(let i = 100; i >= 0; i-=10)
// {
//     console.log(i)
// }
// for(let i = 0; i <= 10; i++)
// {
//     console.log(`i is ${i}`)
//     for(let j = 0; j<= 10; j++)
//     {
//         console.log(`      j is ${j}`)
//     }

// }
// const collection = 
// [
//     ['Solo-Levelling','Elceed', 'Ominiscient-Reader', 'Gaek'],
//     ['One Punch Man', 'Jujustu Kaisen', 'Jugokuraku'],
//     ['Spiderman', 'Justice League', 'The Hulk', 'Deadpool']
// ]
// for(let i = 0; i < collection.length; i++)
// {
//     const row = collection[i];
//     for(let j = 0;  j < row.length; j++)
//     {
//         // console.log(collection[i][j])
//         console.log(row[j])
//     }
// }
//while loop
// let count = 0;
// while(count < 10)
// {
//     count++;
//     console.log(count)
// // }
// let secretCode = 'TROJAN'
// let guess = prompt("Guess secret code!!")
// while(guess.toUpperCase() !== secretCode)
// {
//     guess = prompt("Guess secret code")
// }
// alert("You cracked the code")
let input = prompt("Say Something")
while(true)
{
    input = prompt(input);
    if (input.toLowerCase() === "stop copying me")
    {
        break;
    }
}
console.log("Okay you win bitch!! chill!")