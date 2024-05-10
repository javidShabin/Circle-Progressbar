
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if (counter == 65) {
        clearInterval()
    }else{
        counter += 1;
        number.innerHTML = counter + "%";
    }
}, 30)

let numberT = document.getElementById("number-2");
let counterT = 0;
setInterval(() => {
    if (counterT == 50) {
        clearInterval()
    }else{
        counterT += 1;
        numberT.innerHTML = counterT + "%";
    }
}, 35)

let numberTH = document.getElementById("number-3");
let counterTH = 0;
setInterval(() => {
    if (counterTH == 35) {
        clearInterval()
    }else{
        counterTH += 1;
        numberTH.innerHTML = counterTH + "%";
    }
}, 50)