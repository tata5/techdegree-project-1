/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
 The object, quotes, displays the array properties of famous black authors. These citations come directly from sources
 of the author's work throughout the years.
***/
const quotes = [
  {
    citation: "W.E.B. Du Bois",
    quote: "Daily the Negro is coming more and more to look upon law and justice, not as protecting safeguards, but as sources of humiliation and oppression. The laws are made by men who have little interest in him; they are executed by men who have absolutely no motive for treating the black people with courtesy or consideration; and, finally, the accused law-breaker is tried, not by his peers, but too often by men who would rather punish ten innocent Negroes than let one guilty one escape.",
    year: 1903,
    source: "The Souls of Black Folks"
  },
  {
    citation: "Toni Morrison",
    quote: "Freeing yourself was one thing, claiming ownership of that freed self was another.",
    year: 1987,
    source: "Beloved"
  },
  {
    citation: "Maya Angelou",
    quote: "Words mean more than what is set down on paper. It takes the human voice to infuse them with shades of deeper meaning.",
    year: 1969,
    source: "I Know Why the Caged Bird Sing"
  },
  {
    citation: "Alice Walker",
    quote: "Keep in mind always the present you are constructing. It should be the future you want.",
    year: 1990,
    source: "The Temple of My Familiar"
  },
  {
    citation: "Booker T. Washington",
    quote: "Those who are happiest are those who do the most for others.",
    year: 1901,
    source: "Up from Slavery"
  },
  {
    citation: "Ta-Nehisi Coates",
    quote: "I would not have you descend into your own dream. I would have you be a conscious citizen of this terrible and beautiful world.",
    year: 2015,
    source: "Between the World and Me"
  }
];

/***
 The objective of creating getRandomQuotefunction is to generate a random number from the quote object.
***/
function getRandomQuote () {
  const randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];

};
getRandomQuote();

/***
 The printQuote function is added to the code in order to drawn out the random quotes objects
 from the quote array. So when the printQuote is clicked, a string of HTML and quote properties
 are displayed.
***/

function printQuote () {
  let randomQuote = getRandomQuote(quotes);
  let showQuote = '<p class = "quote">' + randomQuote.quote + '</p>';
      showQuote += '<p class = "source">' + randomQuote.source;

  if (randomQuote.citation){
    showQuote += '<span class = "citation">' + randomQuote.citation + '</span>';
  };
  if (randomQuote.year){
    showQuote += '<span class = "year">' + randomQuote.year + '</span>';
  };

    showQuote += '</p>';

    document.getElementById('quote-box').innerHTML = showQuote;
};
console.log(printQuote());

/***
 This is the event listener. When the for the print quote button is clicked, it will load
 the quotes.
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);
