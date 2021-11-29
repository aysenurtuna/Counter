

let counter = document.querySelector("#counter")
let counterValue = 0

let decrease = document.querySelector("#decrease")
let reset = document.querySelector("#reset")
let increase = document.querySelector("#increase")

decrease.addEventListener("click", function () {
    counter.innerHTML = --counterValue
    counterColor(counterValue)
})
reset.addEventListener("click", function () {
    counterValue = 0
    counter.innerHTML = counterValue
    counterColor(counterValue)

})
increase.addEventListener("click", function () {
    counter.innerHTML = ++counterValue
    counterColor(counterValue)

})

function counterColor(value) {
    if (value < 0) {
        counter.style.color = "red"
    }
    else if (value>0) {
        counter.style.color = "green"
    }
    else
    counter.style.color = "black"

}