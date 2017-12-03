var nextQuote = document.getElementById("next-quote");
var tweet = document.getElementById("tweet");

var moviequotes =  [
		{
			"quote": "You’re gonna need a bigger boat",
			"movie": "Jaws"
		},
		{
			"quote": "May the Force be with you",
			"movie": "Star Wars"
		},
		{
			"quote": "You talkin’ to me?",
			"movie": "Taxi Driver"
		},
		{
			"quote": "The first rule of Fight Club is you do not talk about Fight Club",
			"movie": "Fight Club"
		},
		{
			"quote": "I am your father",
			"movie": "Star Wars: The Empire Strikes Back"
		},
		{
			"quote": "Why so serious?",
			"movie": "The Dark Knight"
		},
		{
			"quote": "I’ll be back",
			"movie": "The Terminator"
		},
		{
			"quote": "Yippie-ki-yay, mother f**ker!",
			"movie": "Die Hard"
		},
		{
			"quote": "To infinity and beyond!",
			"movie": "Toy Story"
		},
		{
			"quote": "Here’s Johnny!",
			"movie": "The Shining"
		},
		{
			"quote": "I am serious. And don't call me Shirley",
			"movie": "Airplane"
		},
		{
			"quote": "Say hello to my little friend",
			"movie": "Scarface"
		},
		{
			"quote": "I love the smell of napalm in the morning",
			"movie": "Apocalypse Now"
		},
		{
			"quote": "Roads? Where we're going we don't need roads",
			"movie": "Back to the Future"
		},
		{
			"quote": "I'm not bad. I'm just drawn that way",
			"movie": "Who Framed Roger Rabbit"
		},
		{
			"quote": "I’m having an old friend for dinner",
			"movie": "The Silence of the Lambs"
		},
		{
			"quote": "Hasta la vista, baby",
			"movie": "Terminator 2: Judgement Day"
		},
		{
			"quote": "The Dude abides",
			"movie": "The Big Lebowski"
		},
		{
			"quote": "Help me, Obi-Wan Kenobi. You're my only hope",
			"movie": "Star Wars: A New Hope"
		},
		{
			"quote": "I mean, funny like I'm a clown? I amuse you?",
			"movie": "Goodfellas"
		},
		{
			"quote": "My precious",
			"movie": "The Lord of the Rings: The Two Towers"
		},
		{
			"quote": "Good morning, Vietnam!",
			"movie": "Good Morning, Vietnam"
		},
		{
			"quote": "Wax on, wax off",
			"movie": "The Karate Kid"
		},
		{
			"quote": "Yo, Adrian!",
			"movie": "Rocky"
		},
		{
			"quote": "They call it a Royale with cheese",
			"movie": "Pulp Fiction"
		},
		{
			"quote": "These go to eleven",
			"movie": "This is Spinal Tap"
		},
		{
			"quote": "Chewie, we’re home",
			"movie": "Star Wars: The Force Awakens"
		},
		{
			"quote": "Apes Strong Together",
			"movie": "War for the Planet of the Apes"
		}
	];

var quoteText;
var movieText;

window.onload = function(){
	getQuote();
	var quo = document.getElementById("quote-text");
	quo.textContent = quoteText;
	var mov = document.getElementById("movie-name");
	mov.textContent = movieText;
}

tweet.addEventListener("click", function(event){
	var sendtweet = document.querySelector(".tweetquote");
	sendtweet.href = "https://twitter.com/intent/tweet?hashtags=moviequotes&text=" + "\"" + quoteText + "\". -" + movieText;
	
})

nextQuote.addEventListener("click", function(event){
	getQuote();
	var quo = document.getElementById("quote-text");
	quo.textContent = quoteText;
	var mov = document.getElementById("movie-name");
	mov.textContent = movieText;
})

function getQuote(){
	var quoteObj = moviequotes[randomQuoteNumber()];
	var tempArr = Object.values(quoteObj);
	quoteText = tempArr[0];
	movieText = tempArr[1];
}

function randomQuoteNumber(){
	var num = Math.floor(Math.random() * moviequotes.length);
	return num;
}