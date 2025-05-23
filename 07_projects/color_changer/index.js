const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target.id);
    /*
    if(event.target.id == 'blue') {
      body.style.backgroundColor = event.target.id;
    }
    else if(event.target.id == 'yellow') {
      body.style.backgroundColor = event.target.id;
    }
    else if(event.target.id == 'grey') {
      body.style.backgroundColor = event.target.id;
    }
    else if(event.target.id == 'white') {
      body.style.backgroundColor = event.target.id;
    }
    */

    switch(event.target.id) {
      case 'yellow':
        body.style.backgroundColor = event.target.id;
        break;
      case 'blue':
        body.style.backgroundColor = event.target.id;
        break;
      case 'green':
        body.style.backgroundColor = event.target.id;
        break;
      case 'red':
        body.style.backgroundColor = event.target.id;
        break;
    }
  })
})