// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma

$(document).ready(
  function () {
    var randomNumber = 0;
    var arrayRandomNumbers = [];
    for (var i = 0; i < 5; i++) {
      randomNumber = numberGenerator();
      arrayRandomNumbers.push(randomNumber);
    }
    arrayRandomNumbers.join(", ");
    alert(arrayRandomNumbers);
  }
);

function numberGenerator () {
  var number = Math.floor(Math.random() * 100) + 1;
  return number;
}

function duplicateNumber
