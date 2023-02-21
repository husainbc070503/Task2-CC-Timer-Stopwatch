var start = document.querySelector('#start_btn')
var pause = document.querySelector('#pause_btn')
var reset = document.querySelector('#reset_btn')
var mins = document.querySelector('#minutes')
var secs = document.querySelector('#seconds')
var hours = document.querySelector('#hours')
var div = document.querySelector('#divider')
var time = document.querySelector('#time_bar')

start.onclick = () => {
    pause.disabled = false
    reset.disabled = false
    start.disabled = true
    startInterval();
}

var remaining = 3600
const update = (sec, min, hr) => {
    let seconds = sec < 10 ? `0${sec}` : sec;
    let minutes = min < 10 ? `0${min}` : min;
    let hrs = hr < 10 ? `0${hr}` : hr

    mins.innerHTML = minutes
    secs.innerHTML = seconds
    hours.innerHTML = hrs
}

const submitForm = () => {
    var hrs = parseInt(document.getElementById('hrs').value) % 60
    var min = parseInt(document.getElementById('mins').value) % 60
    var sec = parseInt(document.getElementById('secs').value) % 60

    update(sec, min, hrs)

    remaining = hrs * 3600 + min * 60 + sec;
    closeModal()
}

const startInterval = () => {
    interval = setInterval(() => {
        remaining--;
        let h = Math.floor(remaining / 3600) % 24; // each hr has 3600 secs and each day has 24 hr
        let m = Math.floor(remaining / 60) % 60; // each min has 60 seconds and each hr and 60 mis
        let s = remaining % 60;

        update(s, m, h)

        if (s == 0 && m == 0) {
            alert('Time elapsed')
            reset_func();
        }
    }, 1000)
}

pause.onclick = () => {
    pause.disabled = true
    start.disabled = false;
    clearInterval(interval)
}


const reset_func = () => {
    pause.disabled = true
    reset.disabled = true
    start.disabled = false
    hours.innerHTML = '01'
    secs.innerHTML = '00';
    mins.innerHTML = '00';
    clearInterval(interval)
}

reset.onclick = reset_func
pause.disabled = true
reset.disabled = true

const openModal = () => document.querySelector('#editModal').style.display = 'block'
const closeModal = () => document.querySelector('#editModal').style.display = 'none'

