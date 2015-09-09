describe('pigLatin', function() {
  it("for words that start with a vowel add ay to the end", function() {
    expect(pigLatin("all")).to.equal("allay");
  });

  it("moves all of the first consecutive constants to the end", function() {
    expect(pigLatin("translator")).to.equal("anslatortray")
  });

  it("for words with first consonants including 'qu' move 'u' to end of word with consonant and add 'ay'", function() {
    expect(pigLatin("squeal")).to.equal("ealsquay");
  });

});
