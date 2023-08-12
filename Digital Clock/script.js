const time = document.querySelector('.time');



setInterval(function () {
    const curTime = new Date().toLocaleTimeString();
    time.innerHTML = curTime;
},1000)
