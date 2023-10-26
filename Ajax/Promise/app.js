const fakeRequestCallback = (url, success, failure) => {

    const delay = Math.floor(Math.random() * (4500)) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        }
        else {
            success(`Here is The data from ${url}`)
        }
    }, delay)
}

const fakeRequestPromise = (url) => {
    const delay = Math.floor(Math.random() * (4500)) + 500;
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (delay > 4000) {
                reject('Connection Timeout :(')
            }
            else {
                resolve(`Here is The data from ${url}`)
            }
        }, delay)
    })
}

// fakeRequestPromise('hdwallpaerimages.com/api/anime/page1')
//     .then(() => {
//         console.log('PROMISE RESOLVED')
//         console.log('Here You Go!')
//         fakeRequestPromise('hdwallpaerimages.com/api/anime/page2')
//             .then(() => {
//                 console.log('PROMISE RESOLVED 2')
//                 console.log('Heere  YOU GO')
//             })
//             .catch(() => {
//                 console.log('PROMISE REJECTED 2 ')
//                 console.log('OH NO ERROR!')
//             })

//     })
//     .catch(() => {
//         console.log('PROMISE REJECTED')
//         console.log('OH NO ERROR!')
//     })


// fakeRequestCallback('books.com/Page1',
//     (response) => {
//         console.log('it Worked')
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             (response) => {
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     (response) => {
//                         console.log(response)
//                     },
//                     (error) => {
//                         console.log('Error!!! 3rd Page', error)

//                     })
//             },
//             (error) => {
//                 console.log('Error!!! 2nd Page', error)

//             })
//     },
//     (error) => {
//         console.log('Error!!! 1st Page', error)

//     })
fakeRequestPromise('hdwallpaerimages.com/api/anime/page1')
    .then((data) => {
        console.log('IT WORKED!!! (PAGE1)')
        console.log(data)
        return fakeRequestPromise('hdwallpaerimages.com/api/anime/page2')

    })
    .then((data) => {
        console.log('IT WORKED!!! (PAGE2)')
        console.log(data)
        return fakeRequestPromise('hdwallpaerimages.com/api/anime/page3')
    })
    .then((data) => {
        console.log('IT WORKED!!! (PAGE3)')
        console.log(data)
    })
    .catch((err)=>
    {
        console.log('OH NO, REQUEST FAILED')
        console.log(err)
    })