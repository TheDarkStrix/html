function operations(operator) {
  if (operator != undefined) {
    switch (operator) {
      case "+":
        var a = document.getElementById("input1").value;
        var b = document.getElementById("input2").value;
        var result = (document.getElementById("result").innerHTML =
          "Result : " + (parseInt(a) + parseInt(b)));
        break;
      case "-":
        var a = document.getElementById("input1").value;
        var b = document.getElementById("input2").value;
        var result = (document.getElementById("result").innerHTML =
          "Result : " + (parseInt(a) - parseInt(b)));
        break;
      case "*":
        var a = document.getElementById("input1").value;
        var b = document.getElementById("input2").value;
        var result = (document.getElementById("result").innerHTML =
          "Result : " + parseInt(a) * parseInt(b));
        break;
      case "/":
        var a = document.getElementById("input1").value;
        var b = document.getElementById("input2").value;
        var result = (document.getElementById("result").innerHTML =
          "Result : " + parseInt(a) / parseInt(b));
        break;
      default:
        var result = document
          .getElementById("result")
          .innerHTML("Invalid Input");
        break;
    }
  }

  // var inputValue = document.getElementById("abcd").value;
}
