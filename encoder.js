
var alphabet = {
  64:"z",
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

var nordicRunes = {
  65:"<img src = 'images/runes/a.gif'>",
	66:"<img src = 'images/runes/b.gif'>",
	67:"<img src = 'images/runes/c.gif'>",
	68:"<img src = 'images/runes/d.gif'>",
	69:"<img src = 'images/runes/e.gif'>",
	70:"<img src = 'images/runes/f.gif'>",
	71:"<img src = 'images/runes/g.gif'>",
	72:"<img src = 'images/runes/h.gif'>",
	73:"<img src = 'images/runes/i.gif'>",
	74:"<img src = 'images/runes/j.gif'>",
  75:"<img src = 'images/runes/k.gif'>",
  76:"<img src = 'images/runes/l.gif'>",
  77:"<img src = 'images/runes/m.gif'>",
  78:"<img src = 'images/runes/n.gif'>",
  79:"<img src = 'images/runes/o.gif'>",
  80:"<img src = 'images/runes/p.gif'>",
  81:"<img src = 'images/runes/q.gif'>",
  82:"<img src = 'images/runes/r.gif'>",
  83:"<img src = 'images/runes/s.gif'>",
  84:"<img src = 'images/runes/t.gif'>",
  85:"<img src = 'images/runes/u.gif'>",
  86:"<img src = 'images/runes/v.gif'>",
  87:"<img src = 'images/runes/w.gif'>",
  88:"<img src = 'images/runes/x.gif'>",
  89:"<img src = 'images/runes/y.gif'>",
  90:"<img src = 'images/runes/z.gif'>",
	32:" "
}



$("#inputArea").keyup(function(e) {

  if ($("input:checked").val() == "echo") {
    var inputText = document.getElementById("inputText").value;
    document.getElementById("textArea").innerHTML = inputText;
  }
  else if ($("input:checked").val() == "caesarCipher") {
    //console.log("caesarCipher");
   var answer = alphabet[e.keyCode - 1];
   $('#textArea').append(answer);
  }
  else if ($("input:checked").val() == "runes") {
    console.log("runes");
    var answerRunes = nordicRunes[e.keyCode];
    $('#textArea').append(answerRunes);
  }

});

$("input[type='radio']").click(function(){
  $("input:checked").prop('checked',false );
  $(this).prop('checked',true);
});
