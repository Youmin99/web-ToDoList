const clock = document.querySelector("h2#clock1");

function getClock(){
    const date = new Date();
   clock.innerText = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}
    \n ${date.getHours()}h ${date.getMinutes()}m ${date.getSeconds()}s`;
}

getClock();
setInterval(getClock,1000);

