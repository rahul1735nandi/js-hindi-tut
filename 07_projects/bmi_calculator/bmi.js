const form = document.querySelector('form');


form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');

    if(height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `Please provide a valid height ${height}`;
    }

    else if(weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = 'Please provide a valid weight';
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);

        results.innerHTML = `<span>${bmi}</span>`;

        if(bmi < 18.6) {
            const p =document.createElement('p');
            p.id = 'under-weight';
            p.innerHTML = `Under Weight = ${bmi}`;
            document.querySelector('#weight-guide').appendChild(p);
        }
        else if(bmi > 24.9) {
            const p =document.createElement('p');
            p.id = 'over-weight';
            p.innerHTML = `Over Weight = ${bmi}`;
            document.querySelector('#weight-guide').appendChild(p);
        }
        else {
            const p =document.createElement('p');
            p.id = 'normal';
            p.innerHTML = `Normal Range = ${bmi}`;
            document.querySelector('#weight-guide').appendChild(p);
        }
    }
})