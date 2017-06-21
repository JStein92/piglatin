function isVowel(char){

  if (/[aeiou]/.test(char)){
    return true;
  }
  else{
    return false;
  }
}

function splitWords(string){
var splitString = string.split(" ");
var finalString = '';
  for (var i = 0; i < splitString.length; i++) {
    finalString += " " + translate(splitString[i])
  }
  return finalString;
}

function translate(string){
if (parseInt(string)){
  return string;
}
else{
  var chars = string.split("");

  if (isVowel(chars[0])){
    return (chars.join('') + "way");
  }
  else { //if start with consonant, count them
    var consonantsStart = 0;
    for (var i = 0; i < chars.length; i++) {
      if (!isVowel(chars[i]) || (chars[i] === "u" && chars[i-1] ==="q")){
        consonantsStart++;
      }
      else{
        break;
      }
    }
      var consonants = chars.slice(0,consonantsStart);
      var strNoStartConsonants = chars.splice(0,consonantsStart).join('');
      return (chars.join('') + strNoStartConsonants + "ay");
  }
}

}

$(document).ready(function() {

  $("form").submit(function(e){
    e.preventDefault();

    var userString = $('#input').val();
    $('#result').text(splitWords(userString));
  });

});
