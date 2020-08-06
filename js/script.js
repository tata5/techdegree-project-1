/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance:
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/***
 * `quotes` array
***/
let quotes = [
  {
    author: "W.E.B. Du Bois",
    quotation: "Daily the Negro is coming more and more to look upon law and justice, not as protecting safeguards, but as sources of humiliation and oppression. The laws are made by men who have little interest in him; they are executed by men who have absolutely no motive for treating the black people with courtesy or consideration; and, finally, the accused law-breaker is tried, not by his peers, but too often by men who would rather punish ten innocent Negroes than let one guilty one escape.",
    year: 1903,
    book: "The Souls of Black Folks"
  },
  {
    author: "Toni Morrison",
    quotation: "Freeing yourself was one thing, claiming ownership of that freed self was another.",
    year: 1987,
    book: "Beloved"
  },
  {
    author: "Maya Angelou",
    quotation: "Words mean more than what is set down on paper. It takes the human voice to infuse them with shades of deeper meaning.",
    year: 1969,
    book: "I Know Why the Caged Bird Sing"
  },
  {
    author: "Alice Walker",
    quotation: "Keep in mind always the present you are constructing. It should be the future you want.",
    year: 1990,
    book: "The Temple of My Familiar"
  },
  {
    author: "Booker T. Washington",
    quotation: "Those who are happiest are those who do the most for others.",
    year: 1901,
    book: "Up from Slavery"
  },
  {
    author: "Ta-Nehisi Coates",
    quotation: "I would not have you descend into your own dream. I would have you be a conscious citizen of this terrible and beautiful world.",
    year: 2015,
    book: "Between the World and Me"
  },
];

/***
 * `The objective of creating getRandomQuote`function is to generate a random number from the quote object.
***/
function getRandomQuote () {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  console.log(quotes);
  return quotes[randomNumber];

};
getRandomQuote();

/***
 * `printQuote` function
***/
function printQuote () {
  var randomQuote = getRandomQuote(quotes);
  var showQuote = '<p class = "quotation">' + randomQuote.quotation + '</p>';
      showQuote += '<p class = "book">' + randomQuote.book;

  if (randomQuote.author){
    showQuote = '<span class = "author">' + randomQuote.author + '</span>';
  };
  if (randomQuote.year){
    showQuote = '<span class = "year">' + randomQuote.year + '</span>';
  };

    showQuote = '</p>';

    document.getElementById('quote-box').innerHTML = showQuote;
};
console.log(printQuote());

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
/***
document.getElementById('load-quote').addEventListener("click", printQuote, false);
***/
