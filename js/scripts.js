var pigLatin = function(word) {
  var position = word.search(/[aeiou]/i);

  if (position === 0) {
    word = word.concat("ay");
  } else {
    var consonant = word.slice(0, position);
    word = word.slice(position, word.length);
    word = word.concat(consonant).concat("ay");
  }

  return word;
};
