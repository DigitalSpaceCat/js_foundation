//question: Is Unique. Build codes to find a string has all unique characters. 
function allUniqueChars(string) {
  let chars = new Set();
  for (let i = 0; i < str.length; ++i) {
    if (chars.has(str[i])) {
      return false;
    }
    chars.add(str[i]);
  }
  return true;// if no match, return true call : allUniqueChars('String');
};
//Question: Two strings are given. Write a code showing that one is a permutation of the other. 
// TBH, I don't get this one at all. 
var checkPermute = function(stringOne, stringTwo) {
  if (stringOne.length !== stringTwo.length) {
    return false;
  } else {
    var sortedStringOne = stringOne.split('').sort().join('');
    var sortedStringTwo = stringTwo.split('').sort().join('');
    return sortedStringOne == sortedStringTwo;
  }
};