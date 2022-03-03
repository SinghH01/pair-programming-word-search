const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  //Create a new array with vertical elements
  const verticalArray = [];
  for (let i = 0; i < letters[i].length; i++) {
    const newArray = [];
    for (let j = 0; j < letters.length; j++) {
      newArray.push(letters[j][i]);
    }
    verticalArray.push(newArray);
  }

  // Join vertical elements
  const verticalJoin = verticalArray.map(ls => ls.join(''));
  for (const i of verticalJoin) {
    // Search for the word in array elements
    if (i.includes(word)) {
      return true;
    }
  }

  return false;
};


  
module.exports = wordSearch;