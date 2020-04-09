var $inp = document.getElementById("input"),
  $click = document.getElementById("cli"),
  $err = document.getElementById("error");

$click.onclick = function (e) {
  e.preventDefault();
  if ($inp.value == "") {
    $err.innerHTML = "Enter your E-mail";
  }
};
