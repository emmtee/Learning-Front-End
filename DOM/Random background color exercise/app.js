const h1 = document.querySelector('.h1')
const button = document.querySelector('.button')
const container = document.querySelector('.container')
container.style.textAlign = 'center'
function three() {
    function genRandNum() {
        const x = Math.floor(Math.random() * 255 + 1)
        return x
    }
    let x = 0;
    let y = 0;
    let z = 0;
    const colors = []
    for (i = 0; i < 3; i++) {
        colors[i] = genRandNum()
    }
    return colors
}

button.addEventListener('click', () => {
    const colors = three();
    const [x, y, z] = colors;
    h1.innerText = `RGB(${x}, ${y}, ${z})`;
    const newColor = `rgb(${x}, ${y}, ${z})`;
    document.body.style.backgroundColor = newColor;
    if (x + y + z < 100)
    {
        h1.style.color = 'white'
    }
})