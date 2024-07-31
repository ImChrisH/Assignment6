console.log('hi');

let tInput=document.querySelector('.tInput');
let totalOutput=document.querySelector('.totalOutput')
let totalBtn=document.querySelector('.totalBtn')
let iTip=document.querySelector('.iTip')
let bill=document.querySelector('.bill')
let resultstring=document.querySelector('.resultstring')

totalBtn.addEventListener('click', tipCalc);

function tipCalc(){
let amount= parseFloat(tInput.value);

//positive number check
if (amount < 0){
        resultstring.textContent=`Please enter positive number.`
        // iTip.textContent=`Enter positive number`;
        // totalOutput.textContent= `Enter positive number`;
        // bill.textContent= `Enter positive number`;
        
        return;
    }
//Typo or big spenders check
if (amount>10000){
    resultstring.textContent=`Please check for typo or ask for manager to calculate orders over $10000.`
    return;
}

//ternary, calculation
let tip = amount >= 300 ? amount*.20 :
        amount >= 30 ? amount*.15 :
        amount*.10;

let total= amount+tip;

console.log(`The bill  was ${amount.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value is ${total.toFixed(2)}`)
resultstring.textContent=`The bill  was ${amount.toFixed(2)}, the tip was ${tip.toFixed(2)}, and the total value is ${total.toFixed(2)}.`

        // bill.textContent=`$${amount.toFixed(2)}`;
        // iTip.textContent=`$${tip.toFixed(2)}`;
        // totalOutput.textContent= `$${total.toFixed(2)}`;

}

//modal buttons

let mBtn1 = document.querySelector('.mBtn1')  
let mBtn2 = document.querySelector('.mBtn2')  
let mBtn3 = document.querySelector('.mBtn3')  
let modal1= document.querySelector('.modal1')
let modal2= document.querySelector('.modal2')
let modal3= document.querySelector('.modal3')
let totalmodal= document.querySelector('.totalmodal')


function openModal(modal) {
    return function() {
        totalmodal.style.display = 'block';
        modal.style.display = 'block';
    }
}

mBtn1.addEventListener('click', openModal(modal1));
mBtn2.addEventListener('click', openModal(modal2));
mBtn3.addEventListener('click', openModal(modal3));

// testing closing windows
// window.addEventListener('click', function (otherclose){
//     if (otherclose=target===totalmodal) {
//         modal1.style.display='none';
//         modal2.style.display='none';
//         modal3.style.display='none';
//         totalmodal.style.display='none';
    
//     }


// });

document.querySelectorAll('.close').forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
        this.closest('.modal1, .modal2, .modal3').style.display = 'none';
        totalmodal.style.display = 'none';})
    })