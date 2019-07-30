const quotes = [
    {
        name: "Stephen King",
        quote: "Get busy living or get busy dying."
    },
    {
        name: "John F.Kennedy",
        quote: "Those who dare to fail miserably can achieve greatly."
    },
    {
        name: "Abraham Lincoln",
        quote: "I'm a success today because I had a friend who believed in me and I didn't have the heart to let him down."
    },
    {
        name: "Leo Tolstoy",
        quote: "If you want to be happy, be."
    },

    {
        name: "Anonymous",
        quote: "Whatever brings you the most fulfilment is an important key to life."
    },

    {
        name: "Anonymous",
        quote: "It takes one lie to spoil your entire tesimony."
    },

    {
        name: "Anonymous",
        quote: "Don't mistake movement for achievement. it is easy to be faded out by being busy, the question is busy doing what?"
    },

    {
        name: "Robert Schuller",
        quote: "Failure cannot happen in your life without your permission."
    },

    {
        name: "Thomas",
        quote: "Show me a thoroughly satisfy man and I will show you a failure."
    },

    {
        name: "Anonymous",
        quote: "Success is a matter of holding on after others have let go."
    },

    {
        name: "Christopher Morley",
        quote: "Big shots are only little shot that keep shooting."
    },

    {
        name: "Anonymous",
        quote: "When you become a millionaire you can give all your millions away because what is important is not the millions, but the person you have become in the process of becoming the millionaire."
    },

    {
        name: "Maxwel O. Ayomanor",
        quote: "Weak men are slaves of what happens, strong men are masters of what happens."
    },

    {
        name: "Brain Koslov",
        quote: "The very first step in building wealth is to spend less than you make."
    },

    {
        name: "Anonymous",
        quote: "Great people are ordinary people with extraordinary amount of determination."
    },

    {
        name: "Robert Schuller",
        quote: "Success does not eliminate problem, it creates new ones."
    },

    {
        name: "Robert Schuller",
        quote: "To pursue a problem-free life is to run after an elusive fantasy"
    },

    {
        name: "Robert Schuller",
        quote: "Never let a problem become an excuse."
    },

    {
        name: "Proverb",
        quote: "When the rain falls on the leopard it does not wash off its spot"
    },

    {
        name: "Proverb",
        quote: "A chicken eats corn, swallow pebbies yet she complains of having no teeth. If she had teeth, would she eat gold? Let her ask the cow that has yet eat grass."
    },

    {
        name: "Proverb",
        quote: "Rome was not built in a day and all the builders were not Roman."
    },
    
    {
        name: "Proverb",
        quote: "When a man is dancing it is the ovation of spectatators that tell him when he is doing well."
    },
    
    
];

var button = document.querySelector(".btn");
var quote = document.querySelector(".quote");
var quoteAuthor = document.querySelector("h3");

button.addEventListener("click", displayQuote);

function displayQuote(){
    var numbers = Math.floor(Math.random() * quotes.length);
    quote.innerHTML = quotes[numbers].quote;
    quoteAuthor.innerHTML = quotes[numbers].name;
}
