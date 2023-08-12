const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = document.querySelector('#height').value;
    const weight = document.querySelector('#wight').value;
    const result = document.querySelector('.result');

    if (height === '' || height <= 0 || isNaN(height)) {
        result.innerHTML = `Enter valid height`;
    } else if(weight === '' || weight <= 0 || isNaN(weight)){
        result.innerHTML = `Enter valid weight`;
    }
    else {
        const output = (weight / ((height * height) / 10000)).toFixed(2);
        result.innerHTML = output;
    }

    const guide = parseFloat(document.querySelector('.result').innerHTML);
    const bmi = document.querySelector(".bmiRange");
    if (guide < 18.6) {
        bmi.innerHTML = `You are under weight!`;
    }
    else if (guide >= 18.6 && guide < 24.9) {
        bmi.innerHTML = `You are in normal range`;
    }
    else {
        bmi.innerHTML = `You are over weight!`;
    }

    
})