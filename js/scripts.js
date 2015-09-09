var pigLatin = function(sentence) {
  if (sentence.search(/[ ]/) != -1) {
    var final_sentence = [];
    var words = sentence.split(" ");
    var word;
    for (var i = 0; i < words.length; i++) {
      word = translator(words[i]);
      final_sentence.push(word);
    }
    final_sentence = final_sentence.join(" ");
  }
  else {
    final_sentence = translator(sentence);
  }
  return final_sentence;
};

var translator = function(word) {
  var position = word.search(/[aeiou]/i);
  if (position === 0) {
    word = word.concat("ay");
  } else {
    if ((word[position] === 'u') && (word[position - 1] === 'q')) {
      var consonant = word.slice(0, position + 1);
      word = word.slice(position + 1, word.length);
    }
    else {
      var consonant = word.slice(0, position);
      word = word.slice(position, word.length);
    }

    word = word.concat(consonant).concat("ay");
  }

  return word;
};

$(document).ready(function() {
  $("form#pig-latin").submit(function(event){
    var sentence = ($("input#sentence").val());
    var result = pigLatin(sentence)

    $(".translator").text(sentence);
    $(".result").text(result);

    $("#result").show();
    event.preventDefault();
  })
})
