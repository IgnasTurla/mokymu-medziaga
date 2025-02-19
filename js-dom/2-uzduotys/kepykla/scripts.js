let calculateButoon = document.getElementById('calculate');

calculateButoon.addEventListener('click', function() {
   console.log('clicked');
//    let employeesCount = document.getElementById('employees-count').valueAsNumber; kitas budas paversti teksta i skaiciu
   let employeesCount = parseInt(document.getElementById('employees-count').value);
   let employeeMakesPerDay = parseInt(document.getElementById('employees-make-per-day').value);
   let dayReservations = parseInt(document.getElementById('day-reservations').value);

let iskeptiTotal = employeesCount * employeeMakesPerDay;
let arSpes = iskeptiTotal >= dayReservations;

//    let logInfo = {
//     iskeptiTotal,
//     arSpes
//    }
//    console.log(logInfo);

let resultsDiv = document.getElementById('results');
// console.log(resultsDiv);
resultsDiv.innerHTML = `<p><strong>Kepykla per diena spes iskepti:</strong>${iskeptiTotal}</p>Kepalu`;
})