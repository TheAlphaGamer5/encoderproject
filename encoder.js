var inputTalk = document.getElementById("inputArea").value;

function translate(){
  return inputTalk;
  console.log("y u no work");
}

function uniKeyCode(event) {
  var key = event.keyCode;
  if (key == 13) {
    translate();
  }
}
