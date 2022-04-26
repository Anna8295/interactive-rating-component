const btn = document.getElementById('submit');
const thankYou = document.querySelector('#put-rate');
const rate = document.getElementsByName('rate');

const rateCard = document.getElementById('card-rate-active');
const thankCard = document.getElementById('card-thankyou-active');

const currentCard = localStorage.getItem('card')
if (currentCard) {
} if (currentCard === 'card-rate-active') {
    document.documentElement.setAttribute('current-card', currentCard);
}

//btn.addEventListener('click', function () {
    //rate.forEach(radio => {
        //if (radio.checked) {
            //const finalRate = radio.value;}
        //if (currentCard === rateCard) {
            //document.documentElement.setAttribute('current-card', 'card-thankyou-active');
            //localStorage.setItem('card', 'card-thankyou-active');
           // thankYou.textContent = finalRate;
       // }
   // });
//})

btn.addEventListener('click', function () {
    rate.forEach(radio => {
        if (radio.checked) {
            const finalRate = radio.value;

            document.documentElement.setAttribute('current-card', 'card-thankyou-active');
            localStorage.setItem('card', 'card-thankyou-active');
            thankYou.textContent = finalRate;
        }
    });
})



//if (currentCard){
    //} if(currentCard === 'card-rate-active'){
    //document.documentElement.setAttribute('current-card', currentCard);
    //document.documentElement.setAttribute('current-card', 'card-thankyou-active');
    //localStorage.setItem('card', 'card-thankyou-active');
    //thankYou.textContent = finalRate; }


