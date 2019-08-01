function renderInput(inputDisplay, product) {
    const input = inputDisplay.querySelector('input');
    input.value = product.id;
    const img = inputDisplay.querySelector('img');
    img.src = product.image;
}

export default renderInput;