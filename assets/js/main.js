const box = document.getElementById("picBox")
const preview = document.getElementById("preview")
const red = document.getElementById("rot")
const green = document.getElementById("grun")
const blue = document.getElementById("blau")
const sizeInput = document.getElementById("width")
box.addEventListener("click", boom)
let count = 0
let count2 = -1
let size = 25
function andernRegler() {
    preview.style.background = `rgb(${red.value},${green.value},${blue.value})`
    return `rgb(${red.value},${green.value},${blue.value})`
}
function boom() {
    count++
    count2++
    box.innerHTML += `<div id="animation${count}"></div>`
    let top = event.clientY
    let left = event.clientX
    document.getElementById(`animation${count}`).classList.add('box')
    document.getElementById(`animation${count}`).classList.add('animation')
    document.getElementById(`animation${count}`).style.top = `calc(${top}px - ${size / 2}px)`
    document.getElementById(`animation${count}`).style.left = `calc(${left}px - ${size / 2}px)`
    document.getElementById(`animation${count}`).style.height = `${size}px`
    document.getElementById(`animation${count}`).style.width = `${size}px` 
    document.getElementById(`animation${count}`).style.background = andernRegler()
    document.getElementById(`animation${count2}`).classList.remove('animation')
}
function selectSize() {
    switch (sizeInput.value) {
        case `1`:
            size = 5
            break;
        case `2`:
            size = 10
            break;
        case `3`:
            size = 25
            break;
        case `4`:
            size = 50
            break;
    }
}