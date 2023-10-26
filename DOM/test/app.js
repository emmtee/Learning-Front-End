// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const product = form.elements.product;
    const quantity = form.elements.qty
    addProduct(product.value, quantity.value)
    product.value = ''
    quantity.value = ''
})
const addProduct = function (product, qty) {
    const newProduct = document.createElement('li')

    newProduct.innerText = `${qty} ${product}`
    list.appendChild(newProduct)
}




