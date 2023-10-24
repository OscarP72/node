const fs = require("fs");
function countWords(text) {
  let wordCounts = {};
  let words = text.split(/\b/);
  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    if (word.match(/\w+/)) {
      if (wordCounts[word]) {
        wordCounts[word]++;
      } else {
        wordCounts[word] = 1;
      }
    }
  }
  return wordCounts;
}
fs.readFile("text.txt", "utf-8", function (err, text) {
  if (err) {
    console.error("Error al leer archivo: " + err);
  } else {
    let wordCounts = countWords(text);
    console.log("Frecuencia de palabras:", wordCounts);
  }
});
