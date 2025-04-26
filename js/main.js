var quotes = [
  {
    q: "“Be yourself; everyone else is already taken.”",
    author: "― Oscar Wilde",
  },

  {
    q: "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
    author: "― Marilyn Monroe",
  },

  {
    q: "“So many books, so little time.”",
    author: "― Frank Zappa",
  },

  {
    q: "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
    author: "― Albert Einstein",
  },

  {
    q: "“A room without books is like a body without a soul.”",
    author: "― Marcus Tullius Cicero",
  },

  {
    q: "“Be the change that you wish to see in the world.”",
    author: "― Mahatma Gandhi",
  },

  {
    q: "“If you tell the truth, you don't have to remember anything.”",
    author: "― Mark Twain",
  },

  {
    q: "“A friend is someone who knows all about you and still loves you.”",
    author: "― Elbert Hubbard",
  },

  {
    q: "“To live is the rarest thing in the world. Most people exist, that is all.”",
    author: "― Oscar Wilde",
  },

  {
    q: "“Without music, life would be a mistake.”",
    author: "― Friedrich Nietzsche, Twilight of the Idols",
  },

  {
    q: "“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”",
    author: "― Ralph Waldo Emerson",
  },
];

function generatQuotes() {
  var Random = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[Random].q;
  document.getElementById("author").innerHTML = quotes[Random].author;
}
