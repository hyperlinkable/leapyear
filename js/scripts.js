var hasError;
var errorText;

var leapYear = function(year) {
  if (isNaN(year)) {
        hasError = true;
        errorText = "Please enter a number";
      } else if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
      hasError = false;
      // alert("is a leap year");
    return true;
    } else {
    hasError = false;
    return false;
  }
};

// for testing
// if (isNaN(parseInt(year)) && (year )) {
//   alert("That's not a number");
// };



$(document).ready(function() {
  $("form#leap-year").submit(function(event) {
    var year = parseInt($("input#year").val());
    var result = leapYear(year);

    $(".year").text(year);

    if (hasError === true) {
      $(".errorText").text(errorText);
      $("#error").show();
      $("#resultText").hide();
    } else
    if (!result) {    // same as writing if (result === false)
      $(".not").text("not");
      $("#error").hide();
      $("#resultText").show();
    } else {
      $(".not").text("");
      $("#error").hide();
      $("#resultText").show();
    }

    $("#response").show();

    event.preventDefault();
  });
});
