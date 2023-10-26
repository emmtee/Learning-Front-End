function biggestNum(test = []) {
    let maxiNum = test[0];
    for (let i = 0; i < test.length; i++) {
        if (maxiNum < test[i]) {
            maxiNum = test[i]
        }
    }
    return maxiNum;
}

function generateArray() {
    let length = Math.floor(Math.random() * 10 + 1);
    const array = []
    for(let i = 0; i < length; i++)
    {
        array[i] = Math.floor(Math.random() * 20 + 1)
    }
    return array;
}


const numbers = generateArray()
console.log(numbers)
console.log(biggestNum(numbers))
