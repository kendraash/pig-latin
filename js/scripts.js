var pigLatin = function(word) {
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
