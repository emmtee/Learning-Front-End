const fakeRequest = (url) => {
    return new Promise((resolve, reject) => {
        const rand = Math.random()
        setTimeout(() => {
            if (rand < 0.7) { resolve('Fake Data Here'); }
            reject('Request Error');
        }, 1000)
    })
}
fakeRequest('dot/1')
    .then((data) => {
        console.log("Done With request")
        console.log(`data is ${data}`)
    })
    .catch((err) => {
        console.log('OH NO !!!', err)
    })
