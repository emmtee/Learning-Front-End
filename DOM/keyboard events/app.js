document.querySelector('button').addEventListener('click', (evt) => {
    console.log(evt)
})
const input = document.querySelector('input')
// input.addEventListener('keydown', (evt)=>
// {
//     console.log(evt.key)
//     console.log(evt.code    )
// })
// // input.addEventListener('keyup', ()=>
// // {
// //     console.log('keyup')
// // })
window.addEventListener('keydown', (e) => {
    switch (e.code) {
        case 'ArrowUp':
            console.log('up')
            console.log(e.code)
            break;
        case 'ArrowDown':
            console.log('down')
            break;
        case 'ArrowLeft':
            console.log('left')
            break;
        case 'ArrowRight':
            console.log('right')
            break;
        default:
            console.log('ignored')
            break;
    }
})