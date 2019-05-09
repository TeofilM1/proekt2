// CLOCKS
const secondHand1 = document.querySelector('#second-hand1');
const minsHand1 = document.querySelector('#min-hand1');
const hourHand1 = document.querySelector('#hour-hand1');
const secondHand2 = document.querySelector('#second-hand2');
const minsHand2 = document.querySelector('#min-hand2');
const hourHand2 = document.querySelector('#hour-hand2');
const secondHand3 = document.querySelector('#second-hand3');
const minsHand3 = document.querySelector('#min-hand3');
const hourHand3 = document.querySelector('#hour-hand3');
const secondHand4 = document.querySelector('#second-hand4');
const minsHand4 = document.querySelector('#min-hand4');
const hourHand4 = document.querySelector('#hour-hand4');
const secondHand5 = document.querySelector('#second-hand5');
const minsHand5 = document.querySelector('#min-hand5');
const hourHand5 = document.querySelector('#hour-hand5');
const secondHand6 = document.querySelector('#second-hand6');
const minsHand6 = document.querySelector('#min-hand6');
const hourHand6 = document.querySelector('#hour-hand6');


function setDate(secondHand,minsHand,hourHand,n) {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90;
  secondHand.style.display = 'none';
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  const mins = now.getMinutes();
  const minsDegrees = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  const hour = now.getHours()+n;
  const hourDegrees = ((hour / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}
setInterval(setDate, 1000);
setDate(secondHand1,minsHand1,hourHand1,5);
setDate(secondHand2,minsHand2,hourHand2,11);
setDate(secondHand3,minsHand3,hourHand3,6);
setDate(secondHand4,minsHand4,hourHand4,10);
setDate(secondHand5,minsHand5,hourHand5,1);
setDate(secondHand6,minsHand6,hourHand6,0);
