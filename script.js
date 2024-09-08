const quotes = {
    coding: [
        {
            text: "Talk is cheap. Show me the code.",
            author: "Linus Torvalds"
        },
        {
            text: "Programs must be written for people to read, and only incidentally for machines to execute.",
            author: "Harold Abelson"
        },
        {
            text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
            author: "Martin Fowler"
        },
        {
            text: "First, solve the problem. Then, write the code.",
            author: "John Johnson"
        },
        {
            text: "Simplicity is the soul of efficiency.",
            author: "Austin Freeman"
        },
        {
            text: "Code is like humor. When you have to explain it, it’s bad.",
            author: "Cory House"
        },
        {
            text: "Before software can be reusable, it first has to be usable.",
            author: "Ralph Johnson"
        },
        {
            text: "Make it work, make it right, make it fast.",
            author: "Kent Beck"
        },
        {
            text: "Optimism is an occupational hazard of programming: feedback is the treatment.",
            author: "Kent Beck"
        },
        {
            text: "The most important property of a program is whether it accomplishes the intention of its user.",
            author: "C.A.R. Hoare"
        },
        {
            text: "Confusion is part of programming.",
            author: "Felienne Hermans",
        },
        {
            text: "Fix the cause, not the symptom",
            author: "Steve Maguire",
        },
        {
            text: "First, solve the problem. Then write the code",
            author: "John Johnson",
        },
        {
            text: " If you optimize everything, you will always be unhappy",
            author: "Donald Knuth",
        },
    ],
    science:[
        {
            text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.",
            author: "Albert Einstein"
        },
        {
            text: "Science is a way of thinking much more than it is a body of knowledge.",
            author: "Carl Sagan"
        },
        {
            text: "Somewhere, something incredible is waiting to be known.",
            author: "Carl Sagan"
        },
        {
            text: "If I have seen further it is by standing on the shoulders of giants.",
            author: "Isaac Newton"
        },
        {
            text: "Equipped with his five senses, man explores the universe around him and calls the adventure Science.",
            author: "Edwin Hubble"
        },
        {
            text: "Science is the poetry of reality.",
            author: "Richard Dawkins"
        },
        {
            text: "The good thing about science is that it's true whether or not you believe in it.",
            author: "Neil deGrasse Tyson"
        },
        {
            text: "In questions of science, the authority of a thousand is not worth the humble reasoning of a single individual.",
            author: "Galileo Galilei"
        },
        {
            text: "The universe is under no obligation to make sense to you.",
            author: "Neil deGrasse Tyson"
        },
        {
            text: "Science knows no country, because knowledge belongs to humanity, and is the torch which illuminates the world.",
            author: "Louis Pasteur"
        }
    
    ]
};
let currentCategory = "coding";
let currentIndex = 0;
function   displayQuote(){
    const quotetext = document.getElementById("quotetext");
    const quoteauthor = document.getElementById("quoteauthor");
    quotetext.textContent = quotes[currentCategory][currentIndex].text;
    quoteauthor.textContent = `- ${quotes[currentCategory][currentIndex].author}`;
}
function showPreviousQuote() {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : quotes[currentCategory].length - 1;
    displayQuote();
}

function showNextQuote() {
    currentIndex = (currentIndex < quotes[currentCategory].length - 1) ? currentIndex + 1 : 0;
    displayQuote();
}

function showRandomQuote() {
    currentIndex = Math.floor(Math.random() * quotes[currentCategory].length);
    displayQuote();
}

displayQuote();