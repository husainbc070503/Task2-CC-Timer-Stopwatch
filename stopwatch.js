var startStop = document.querySelector('#start_stop_btn')
// console.log(startStop)
var pauseStop = document.querySelector('#pause_stop_btn')
var resetStop = document.querySelector('#reset_stop_btn')
var lapBtn = document.querySelector('#lap_btn')
var timeDisplay = document.querySelector('#time_display')
var lists = document.querySelector('#lists');

var [mms, s, m, h] = [0, 0, 0, 0]

const display = () => {
    mms += 10;
    if (mms == 1000) {
        mms = 0;
        s += 1;
        if (s == 60) {
            s = 0;
            m += 1;
            if (m == 60) {
                m = 0;
                h += 1;
            }
        }
    }

    let hours = h < 10 ? `0${h}` : h;
    let minutes = m < 10 ? `0${m}` : m;
    let seconds = s < 10 ? `0${s}` : s;
    let ms = mms < 10 ? `00${mms}` : mms < 100 ? `0${mms}` : mms;
    timeDisplay.innerText = `${hours}  :  ${minutes}  :  ${seconds}  :  ${ms}`
}

startStop.onclick = () => {
    pauseStop.disabled = false
    resetStop.disabled = false
    startStop.style.display = 'none';
    lapBtn.style.display = 'inline-block'
    int = setInterval(display, 10);
}

pauseStop.onclick = () => {
    pauseStop.disabled = true
    startStop.style.display = 'inline-block'
    lapBtn.style.display = 'none'
    clearInterval(int);
}

resetStop.onclick = () => {
    startStop.style.display = 'inline-block'
    lapBtn.style.display = 'none'
    pauseStop.disabled = true
    resetStop.disabled = true
    lists.innerHTML = ""

    clearInterval(int)
    mms = 0, s = 0, m = 0, h = 0
    timeDisplay.innerHTML = `00 : 00 : 00 : 000`
}

lapBtn.onclick = () => {
    var li = document.createElement('li');
    var text = document.createTextNode(`${h} : ${m} : ${s}`);
    li.appendChild(text);
    lists.append(li);
}

pauseStop.disabled = true
resetStop.disabled = true