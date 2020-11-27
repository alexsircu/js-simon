// Un alert espone 5 numeri casuali diversi.
// Dopo 30 secondi l’utente deve inserire, un prompt alla volta, i numeri che ha visto precedentemente.
// Una volta inseriti i 5 numeri, il software dice quanti e quali numeri sono stati ricordati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma

// generazione numeri casuali e alert che stampa i 5 numeri diversi
$(document).ready(
  function () 
  {
    const TotalNumberToPlayTheGame = 5;

    // inizializzazione dei numeri random
    var arrayRandomNumbers = GetRandomNumbers(TotalNumberToPlayTheGame);
    alert("Questi sono i numeri generati automaticamente: " + arrayRandomNumbers);

    // dopo 30 secondi l'utente deve inserire i numeri che ha visto precedentemente
    var userArray = [];
    setTimeout(function() {
      userArray = LoadUserNumbers(TotalNumberToPlayTheGame);
    }, 3000);

    // una volta inseriti i n numeri, il software dice quanti e quali numeri sono stati ricordati.
    setTimeout(function() {
      var sameNumbers = GetSameNumbers(arrayRandomNumbers, userArray);
      alert("Hai indovinato: " + sameNumbers.length + " numeri\n" + "Numero/i indovinato/i: " + sameNumbers);
    }, 3000);
  }
);

// FUNZIONI
function GetRandomNumbers (numberOfNumbers) {
  let totalNumbers = [];

  for (let i = 0; i < numberOfNumbers; i++) 
  {
    var randomNumber;
    while(true)
    {
      randomNumber = Math.floor(Math.random() * 100) + 1;
      if(!totalNumbers.includes(randomNumber))
        break;
    }
    
    totalNumbers.push(randomNumber);
  }

  return totalNumbers;
}

function LoadUserNumbers(numberOfNumbers) {
  var userArray = [];
  while(userArray.length < numberOfNumbers) {
    var userNumber = parseInt(prompt("Inserisci un numero che hai visto precedentemente: "));
    userArray.push(userNumber);
  }
  return userArray;
}

function GetSameNumbers(firstList, secondList) {
  var sameNubers = [];
  for (let i = 0; i < secondList.length - 1; i++) {
    if(firstList.includes(secondList[i]))
      sameNubers.push(secondList[i]);
  } 
  return sameNubers;
}
