var inputTalk = document.getElementById("inputArea").value;

function translate(){
  question = "User: " + inputTalk + "<br>";
  document.getElementById("textArea").innerHTML += question;
  console.log("y u no work");
}

function uniKeyCode(event) {
  var key = event.keyCode;
  if (key == 13) {
    translate();
  }
}
