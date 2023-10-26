const button = document.querySelector('button')
const container = document.querySelector('#container')

button.addEventListener('click', (e) =>
{
    e.stopPropagation()
    container.style.backgroundColor = makeRandColor();
})
container.addEventListener('click', () =>
{
    container.classList.add('hide')
})
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`
}