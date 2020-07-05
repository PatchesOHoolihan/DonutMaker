
let donutCount = 0;
let donutClickButton = document.querySelector("#donut-click-button");
let numberOfDonuts = document.querySelector(".number-of-donuts");
let buyAutoClickButton = document.querySelector("#auto-clicker-buy-button");
let buyDonutMultiplierButton = document.querySelector("#multiplier-buy-button")
let autoClickerCount = 0;
let autoClickerPrice = 100;
let multiplierCount = 0;
let multiplierPrice = 10;
let numberOfAutoClickers = document.querySelector(".number-of-autoclickers");
let numberOfMultipliersTag = document.querySelector(".number-of-multipliers");
let multiplierPriceTag = document.querySelector(".multiplier-price-tag");
let autoClickerPriceTag = document.querySelector(".autoclicker-price-tag");
let resetButton = document.querySelector("#reset-button");
const modal = document.getElementById("modal-id");
const span = document.getElementsByClassName("close")[0];
const modalClick = document.getElementById("developer-information");
modalClick.onclick = function(){
    modal.style.display = "block";
  }
  span.onclick = function(){
    modal.style.display = "none";
  }
  window.onclick = function(event){
    if(event.target == modal){
      modal.style.display = "none";
    }
}

document.getElementById("auto-clicker-buy-button").disabled = true;
document.getElementById("multiplier-buy-button").disabled = true;

donutClickButton.addEventListener("click", addDonut);
buyAutoClickButton.addEventListener("click", buyAutoClicker);
buyDonutMultiplierButton.addEventListener("click", buyDonutMultiplier);
resetButton.addEventListener("click", resetButtonClick);

function addDonut() {
  
  donutCount += Math.round(Math.pow(1.2, multiplierCount));
  numberOfDonuts.innerText = Math.round(donutCount);
  disableButtons();
}

function fireAutoClicker(){
setInterval(function(){
  disableButtons();
  donutCount += Math.round(autoClickerCount * Math.pow(1.2,multiplierCount)); 
  numberOfDonuts.innerText = Math.round(donutCount)
}, 1000); }

function buyAutoClicker(){
  if (donutCount >= autoClickerPrice){
    autoClickerCount +=1;
    donutCount -= autoClickerPrice;
    autoClickerPrice = Math.round(autoClickerPrice * 1.1);
    numberOfDonuts.innerText = Math.round(donutCount);
    autoClickerPriceTag.innerText = autoClickerPrice;
    numberOfAutoClickers.innerText = autoClickerCount;
    if (autoClickerCount <= 1){
      fireAutoClicker ();

    }
    disableButtons();
  }
}
function buyDonutMultiplier(){
  
  if(donutCount>= multiplierPrice){
    multiplierCount +=1;
    donutCount -= multiplierPrice;
    multiplierPrice = Math.round(multiplierPrice *1.1);
    numberOfDonuts.innerText = Math.round(donutCount);
    multiplierPriceTag.innerText = multiplierPrice;
    numberOfMultipliersTag.innerText = multiplierCount;
    disableButtons();
  }
}
function disableButtons(){
  if(donutCount < multiplierPrice){
    document.getElementById("multiplier-buy-button").disabled = true;
  } else {
    document.getElementById("multiplier-buy-button").disabled = false;
  }
  if(donutCount < autoClickerPrice){
    document.getElementById("auto-clicker-buy-button").disabled = true;
  } else{
    document.getElementById("auto-clicker-buy-button").disabled = false;
  }
}
function resetButtonClick(){
  location.reload();
}