let total = 0;
let discountAmount = 0;
let mainTotal = 0;

function clickHandler(clicked){
    const itemSelected = clicked.childNodes[3].childNodes[5].innerText;
    const li = document.createElement("li");
    li.innerText = itemSelected;
    const selectedItemContainer = document.getElementById('item-selected');
    selectedItemContainer.appendChild(li);
    const price = clicked.childNodes[3].childNodes[7].innerText.split(" ")[0];

    total = parseFloat(total) + parseFloat(price);
    document.getElementById("total-price").innerText = total.toFixed(2);
    const enableBtn = document.getElementById('coupon-btn');
    
    if(total >= 200){
        enableBtn.removeAttribute('disabled');
    }
    const enablePurchase = document.getElementById('Purchase-btn');
    if(total > 0){
        enablePurchase.removeAttribute('disabled')
    }
    document.getElementById('coupon-btn').addEventListener('click',function(){
        const inputField = document.getElementById('coupon-field');
        const couponCode = inputField.value;
        if(couponCode === 'SELL200'){
            const discount = document.getElementById('discount-amount');
            const discountPrice = discount.innerText;
            let discountGot = total * 0.20;
            discountAmount = parseFloat(discountPrice) + parseFloat(discountGot);
            console.log(discountAmount)
            discount.innerText = discountAmount.toFixed(2)

            const totalField = document.getElementById('main-total');
            const totalPrice = totalField.innerText;
            
            mainTotal = parseFloat(total) - parseFloat(discountAmount);
            
            totalField.innerText = mainTotal.toFixed(2)
            
        }
        else {
            alert('your coupon is invalid');
        }
    
    })
}




