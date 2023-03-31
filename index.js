class Formatter {
  //add static methods here
static capitalize(str){

  return str.charAt(0).toUpperCase() + str.slice(1);

}

static sanitize(str){
  // removes any non alpha-numeric characters except dash and single quotes (apostrophes)
   // return str.replace(/[^A-Za-z0-9-']+/g, "");
    return str.replace(/[^\w\s'-]/gi, '');
 
}


static titleize(str){
  //create an array of exception words
const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
//creates an array of the words in the string/sentence to be capitalized and turns them to lowercase
const words = str.toLowerCase().split(" ")
  //.map cretes a new array of the capitalized words
  //searching through the word array via index
  //.includes will retun true or false on whether a word is in the exceptions array
  //then return each car at index (0) of a word to uppercase 
  //then join it to the rest of the letters using +word.slice(1)
  //slice will return letters from index 1 of the word 
  //+ will add/concatenate it

  const capitalizeEveryWord = words.map((word, index) => {
    if (index === 0 || !exceptions.includes(word)) {
      return word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      return word;
    }
  });
  //return the capitalized words and .join them
  return capitalizeEveryWord.join(" ");
}


} //closes the main class
