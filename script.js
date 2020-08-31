// console.log("hi");
// alert("hi");

//var , let , const

// var a = "satish";
// var b = "akash";
// var c = a + b;

// const con = 5;

// alert(c);

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// var a = ["a", "b", "c"];
// console.log(a);

function myFunction() {
  var inputValue = document.getElementById("abcd").value;
  if (inputValue == "satish") {
    document.getElementById("result").innerHTML = "Satish is the name";
  } else {
    document.getElementById("result").innerHTML = "Akash is the name";
  }
}
