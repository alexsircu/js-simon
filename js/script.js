// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma

$(document).ready(
  function () {
    var arrayRandomNumbers = [];
    while (arrayRandomNumbers.length < 5) {
      var randomNumber = numberGenerator();
      var duplicateTest = duplicateNumber(arrayRandomNumbers, randomNumber);
      if (duplicateTest == false) {
        arrayRandomNumbers.push(randomNumber);
      }
    }
    // arrayRandomNumbers.join(", ");
    alert("Questi sono i numeri generati automaticamente: " + arrayRandomNumbers);
  }
);

function numberGenerator () {
  var number = Math.floor(Math.random() * 100) + 1;
  return number;
}

function duplicateNumber (array, number) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (number == array[i]) {
      result = true;
    }
  }
  return result;
}
