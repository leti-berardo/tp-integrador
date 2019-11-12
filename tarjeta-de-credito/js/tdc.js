//Tarjeta event listener

$('#carga-formulario').click(getCardValue);

function getCardValue() {
  let inputCard = document.getElementById('card-number').value;
  let regex = /^[0-9]{15,16}|(([0-9]{4}\s){3}[0-9]{3,4})$/;
  if (regex.test(inputCard)) {
    console.log('es valida');
  } else {
    console.log('no es valida');
  }
}
