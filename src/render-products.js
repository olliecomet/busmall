function renderInput(inputDisplay, product) {
    const input = inputDisplay.querySelector('input');
    input.value = product.id;
    const img = inputDisplay.querySelector('img');
    img.src = product.image;
    img.alt = product.id;
}

export default renderInput;