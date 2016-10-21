/* Normal key code for alphabet
Normalkeycode = {
	65:"a",
	66:"b",
	67:"c",
	68:"d",
	69:"e",
	70:"f",
	71:"g",
	72:"h",
	73:"i",
	74:"J",
  75:"k",
  76:"L",
  77:"m",
  78:"n",
  79:"o",
  80:"p",
  81:"q",
  82:"r",
  83:"s",
  84:"t",
  85:"u",
  86:"v",
  87:"w",
  88:"x",
  89:"y",
  90:"z",
	32:" "
}
	*/
var caesarCipherEncoder = {
  65: "z",
	66: "a",
	67: "b",
	68: "c",
	69: "d",
	70: "e",
	71: "f",
	72: "g",
	73: "h",
	74: "i",
  75: "j",
  76: "k",
  77: "l",
  78: "m",
  79: "n",
  80: "o",
  81: "p",
  82: "q",
  83: "r",
  84: "s",
  85: "t",
  86: "u",
  87: "v",
  88: "w",
  89: "x",
  90: "y",
	32: " "
}



$("#inputArea").keyup(function(e){
  var inputText = document.getElementById("inputText").value;
  document.getElementById("textArea").innerHTML = inputText;
  if ($("input:checked").val() == "echo") {
    console.log("echo");
  }
  else if ($("input:checked").val() == "caesarCipher") {
    console.log("caesarCipher");
    document.getElementById("textArea").innerHTML += caesarCipherEncoder[e.keycode];
  }
  else if ($("input:checked").val() == "runes") {
    console.log("runes");
  }

});

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false );
  $(this).prop('checked',true);
});
