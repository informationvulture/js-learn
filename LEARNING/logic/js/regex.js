
/* Using the regex to test
Returns: A boolean
Format: regex.test(string)
*/
const phrase = "Can you find a WoRd in this sentence?";
const regex = /word/i;
const result = regex.test(phrase);
console.log(result);


/* Using the regex to match
Returns: An array of matches
Format: string.match(regex)
*/
const phrase1 = "Can you find a WoRd, word, or WORD in this sentence?";
const regex1 = /word/gi;
const result1 = phrase1.match(regex1);
console.log(result1);
