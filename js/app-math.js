var submissionForm = document.getElementById('submission-form');
var unitsArray = [];
var userOutput = document.getElementById('user-output');
var resultsDisplay = document.getElementById('results');
var userSelect = document.getElementById('user-select');
var clearRequests = document.getElementById('clear');

var results = [];

function Convert (name, conversion, inputUnits, outputUnits){
  this.name1 = name;
  this.conversion = conversion;
  this.inputUnits = inputUnits;
  this.outputUnits = outputUnits;
  unitsArray.push(this);
}

var inchToCm = new Convert('inch-cm', 2.54, ' inch ', ' centimeters ');
var ozToMl = new Convert('fl.oz-ml', 29.574, ' fluid ounces ', ' milliliters ');
var miToKm = new Convert('mi-km', 1.60934, ' miles ', ' kilometers ');
var lbToKg = new Convert('lb-kg', 0.453592, ' pounds ', ' kilograms ');
var shitToshit = new Convert('shit-tonn', 1240, ' standard shit-tonn ', ' metric shit-tonn ');

function renderResults(){
  resultsDisplay.textContent = '';
  for(var i = 0; i < results.length; i++){
    var p = document.createElement('p');
    p.textContent = results[i];
    resultsDisplay.appendChild(p);
  }
}

function handleSubmit(event){
  var userInput = parseInt(event.target.input1.value);
  event.preventDefault();
  for(var i = 0; i < unitsArray.length; i++){
    if(userSelect.value == unitsArray[i].name1){
      var answer = parseFloat(userInput * unitsArray[i].conversion).toFixed(3);
      userOutput.textContent = (userInput + unitsArray[i].inputUnits + 'equals ' + answer + unitsArray[i].outputUnits);
      results.push(userOutput.textContent);
    }
  }
  renderResults();
  event.target.input1.value = null;
}

submissionForm.addEventListener('submit', handleSubmit);
clearRequests.addEventListener('click', function(){
  resultsDisplay.textContent = ' ';
  results = [];
});
