//I want to be able to input a string
//I then want to press a submit button
$('.submit').on('click', function QuestionMarks ()
  {
  //Once the submit button is pressed I want to clear the input field and loop
  //over the string to see if there are exactly three question marks between each
  //pair of numbers that add up to exactly 10
  //return true if there is, return false if there is not
    var trueCount = 0;
    var falseCount = 0;
    var numbersAndQuestionMarks = [];
    var tensCount = 0;
    var justNumbers = [];
    var str = $('input').val();
    var noSpaces = str.replace(/\s/g, '');
    for (var i = 0; i < noSpaces.length; i++) {
      if (isNaN(noSpaces[i]) == false || noSpaces[i] == "?") {
        numbersAndQuestionMarks.push(noSpaces[i]);
      };
    };

    for (var i = 0; i < numbersAndQuestionMarks.length; i++) {
      if (isNaN(numbersAndQuestionMarks[i]) === false) {
        justNumbers.push(numbersAndQuestionMarks[i]);
      }

      if (isNaN(numbersAndQuestionMarks[i]) === true && isNaN(numbersAndQuestionMarks[i + 1]) === true && isNaN(numbersAndQuestionMarks[i + 2]) === true && isNaN(numbersAndQuestionMarks[i + 3]) === false && parseInt(numbersAndQuestionMarks[i - 1]) + parseInt(numbersAndQuestionMarks[i + 3]) === 10) {
        ++trueCount;
      }if (isNaN(numbersAndQuestionMarks[i]) === true && isNaN(numbersAndQuestionMarks[i + 1]) === true && parseInt(numbersAndQuestionMarks[i - 1]) + parseInt(numbersAndQuestionMarks[i + 2]) === 10) {
        ++falseCount;
      }if (isNaN(numbersAndQuestionMarks[i]) === true && parseInt(numbersAndQuestionMarks[i - 1]) + parseInt(numbersAndQuestionMarks[i + 1]) === 10) {
        ++falseCount;
      }if (isNaN(numbersAndQuestionMarks[i]) === true && isNaN(numbersAndQuestionMarks[i + 1]) === true && isNaN(numbersAndQuestionMarks[i + 2]) === true && isNaN(numbersAndQuestionMarks[i + 3]) === true) {
        ++falseCount;
      }
    };

    for (var j = 0; j < justNumbers.length - 1; j++) {
      if ((parseFloat(justNumbers[j]) + parseFloat(justNumbers[j + 1])) === 10) {
        ++tensCount;
      }
    }

    console.log(numbersAndQuestionMarks);
    console.log("trueCount " + trueCount);
    console.log("tensCount " + tensCount);
    console.log("falseCount " + falseCount)
    if (trueCount > 0 && trueCount === tensCount) {
      alert('True!');
    }else {
      alert('False!');
    };
  });
