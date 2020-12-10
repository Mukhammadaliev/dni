var elForm = document.querySelector('.form')
var elFormInput = document.querySelector('.form-input')
var elResult = document.querySelector('.result')


elForm.addEventListener('submit', function (evt) {
  evt.preventDefault();


  var number = Number(elFormInput.value);


  if ((2 * number) / 2 - Math.floor((2 * number) / 2) != 0 && (2 * number) / 2 - Math.floor((2 * number) / 2) < 1) {
    elResult.textContent = 'бутун сон киритинг';
  } else if (number === 1) {
    elResult.textContent = 'душанба';
  } else if (number === 2) {
    elResult.textContent = 'сешанба';
  } else if (number === 3) {
    elResult.textContent = 'чоршанба';
  } else if (number === 4) {
    elResult.textContent = 'пайшанбаа';
  } else if (number === 5) {
    elResult.textContent = 'жума';
  } else if (number === 6) {
    elResult.textContent = 'шанба';
  } else if (number === 7) {
    elResult.textContent = 'якшанба';
  } else {
    elResult.textContent = '7 < сон киритин';
  }
})