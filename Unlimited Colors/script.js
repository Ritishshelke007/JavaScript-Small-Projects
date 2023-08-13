// generate a hex code
const start = document.querySelector("#start");
const stop = document.querySelector("#stop");
const hexCode = document.querySelector("#hexColor");

const generateColor = () => {
  const codes = "0123456789ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += codes[Math.floor(Math.random() * 16)];
  }
  return color;
};

let interval;

start.addEventListener("click", () => {
  if (!interval) {
    interval = setInterval(() => {
      let genColor = generateColor();
      document.body.style.backgroundColor = genColor;
      hexCode.innerHTML = `${genColor}`;
    }, 1000);
  }
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    clearInterval(interval);
    interval = null;
    document.body.style.backgroundColor = 'gray';
})
