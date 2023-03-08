// header slider
let count = 1;
function showHeaderItem(id){
    document.querySelectorAll('.header-main-item').forEach((item) => {
        if(count == item.dataset.id){
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
}
showHeaderItem(count);
document.querySelector('.header-left-btn').addEventListener('click', () => {
    count--;
    if(count < 1) count = 3;
    showHeaderItem(count);
});
document.querySelector('.header-right-btn').addEventListener('click', () => {
    count++;
    if(count > 3) count = 1;
    showHeaderItem(count);
});

// product slider
const allProducts = document.querySelectorAll('.trending-item');
const allFilterBtns = document.querySelectorAll('.filter-btn');

allFilterBtns.forEach((button, index) => {
    button.addEventListener('click', () => {
        resetBtnColor();
        button.classList.add('activeFilterBtn');
        showProducts(index + 1);
    });
});

function showProducts(id){
    allProducts.forEach((product) => {
        if(id == product.dataset.product){
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}

function resetBtnColor(){
    allFilterBtns.forEach((button) => {
        button.classList.remove('activeFilterBtn');
    });
}

showProducts(1); // shows new products
allFilterBtns[0].classList.add('activeFilterBtn');