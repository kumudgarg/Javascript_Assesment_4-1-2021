function display(val) {
  document.getElementById("result").value += val;
}

function solution() {
  let x = document.getElementById("result").value;
  let y = eval(x);
  document.getElementById("result").value = y;
}

function clrScreen() {
  document.getElementById("result").value = "";
}
