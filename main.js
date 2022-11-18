let displayBox = document.querySelector('.display');

let list = document.querySelectorAll(".show-display");
list.forEach(item => {
    item.addEventListener('click', showDisplay)
})

function showDisplay(event) {
    let text = displayBox.innerHTML
    if(text.length > 10){
        displayBox.innerHTML = text.substring(0, 10)
    }
    const x = event.target.innerText
    if(displayBox.innerHTML == 0){
        return displayBox.innerHTML = x
    }
    return displayBox.innerHTML += x
   
}  

function calculate() {
    let result = displayBox.innerText
    displayBox.innerText = eval(result)
}

function clearAll() {
    displayBox.innerHTML = 0
}

function clear() {
    let text = displayBox.innerText
    if(text.length === 1){
        return displayBox.innerText = 0
    }else {
        displayBox.innerText = text.substring(0 , text.length - 1)
    }
    
}



document.querySelector(".calculate").addEventListener('click', calculate)
document.querySelector(".all-clear").addEventListener('click', clearAll)
document.querySelector(".clear-last").addEventListener("click", clear)