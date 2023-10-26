const btn = document.querySelector('.button')
btn.onclick = () => {console.log('you clicked me')
    console.log('I hoped it worked')
} 
btn.onmouseenter = () =>
{
    btn.classList.add('blue-border')
}
const h1 = document.querySelector('h1')
h1.onclick = () => h1.classList.add('color')

const btn2 = document.querySelector('#button')

btn2.addEventListener('click', () => btn2.classList.add('color'), {once: true})
btn2.addEventListener('click', () => console.log('Hello'))