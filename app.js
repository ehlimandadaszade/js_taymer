let start = document.querySelector(".start")
let san = document.querySelector(".san")
let deq = document.querySelector(".deq")
let saat = document.querySelector(".saat")
let reset = document.querySelector(".reset")
let x = 0
let c = 0
let a = 0
let set;
start.addEventListener("click", () => {

    if (start.classList.contains("dayan")) {
        start.innerHTML = "START"
        clearInterval(set)
        start.classList.remove("dayan")
        return

    }
    start.innerHTML = "STOP"
    start.classList.add("dayan")

    set = setInterval(() => {
        x++
        san.innerHTML = x
        if (x <= 9) {
            san.innerHTML = `0${x}`
        } else {
            san.innerHTML = x
        }
        if (x == 59) {
            x = 0
            san.innerHTML = `0${x}`
            c++
            if (c <= 9) {
                deq.innerHTML = `0${c}`
            } else {
                deq.innerHTML = c
            }
            if (c == 59) {
                deq.innerHTML=`0${x}`
                c = 0;
                a++
                saat.innerHTML = a
                if(a<10){
                    saat.innerHTML = `0${a}`
                }else{
                    saat.innerHTML =a
                }

            }
        }
    }, 100);
})
reset.addEventListener("click", () => {
    clearInterval(set)
    x = 0
    c = 0
    a = 0
    start.innerHTML = "START"
    san.innerHTML = "00"
    deq.innerHTML = "00"
    saat.innerHTML = "00"
    start.classList.remove("dayan")
})