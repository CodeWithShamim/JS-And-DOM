// creat a function
function updateCaseNumber(product, isIncreasing) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isIncreasing == true) {

        productNumber = parseInt(productNumber) + 1;
    } else {
        if (productNumber > 0) {
            productNumber = parseInt(productNumber) - 1;
        }
    }
    productInput.value = productNumber

    // price update 
    if (product == 'case') {
        const productPrice = document.getElementById(product + '-price');
        productPrice.innerText = productNumber * 59;
    } else {
        const productPrice = document.getElementById(product + '-price');
        productPrice.innerText = productNumber * 1219;
    }
}

// handle phone increase decrease events
document.getElementById('phone-plus').addEventListener('click', function() {
    updateCaseNumber('phone', true);
})

document.getElementById('phone-minus').addEventListener('click', function() {
    updateCaseNumber('phone');
})


// handle case increase decrease events
document.getElementById('case-plus').addEventListener('click', function() {
    updateCaseNumber('case', true);
})

document.getElementById('case-minus').addEventListener('click', function() {
    updateCaseNumber('case');
})