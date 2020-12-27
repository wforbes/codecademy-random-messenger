/*
	Codecademy.com - Full Stack Path - "Mixed Messages" assignment
	https://www.codecademy.com/paths/full-stack-engineer-career-path/tracks/fscp-javascript-syntax-portfolio-project/modules/fscp-mixed-messages/kanban_projects/mixed-messages
	For this project, you will build a message generator program. Every time a user
	runs a program, they should get a new, randomized output. You’re welcome to take
	the project in a couple of different forms, like an astrology generator, 
	inspirational message, or nonsensical jokes. To make your program truly 
	random, the message that it outputs should be made up of at least three 
	different pieces of data. Take what you know of JavaScript syntax so far
	to build the program and customize it to your liking.

	Idea: Randomized text message from a friend in need of a little help...
*/
const msgs = {
	openings: ["Hey bro", "Sup dude", "What up chicka", "Yo man", "What's up"],
	punctuation: [".", ",", "!", "?"],
	causes: [
		"I got drunk and blacked out", "I let a random guy I met drive my car",
		"I took the wrong flight", "So, I started riding this horse"
	],
	when: ["last night", "last week", "4 days ago", "last month"],
	situationOpenings: ["One thing led to another,", "Long story short,", "Things happened,"],
	currentSituations: [
		"now I'm enlisted for 12 years with the French foreign legion",
		"now I'm wanted for turtle murder in Hawaii",
		"now I'm stuck in an infinite time loop paradox",
		"now I owe the Russian mob a great deal of money",
		"now my mother is being held hostage by the Girl Scout militia of Alabama",
		"now my feet are encased in concrete and I'm lost in an M.C. Escher staircase"
	],
	questions: [
		"Can you wire me $17?",
		"Can you mail me 9 black socks?",
		"Would you mind coming to pick me up?",
		"Could you please call the FBI hostage negotiation department for me?",
		"Would you please send me a Facebook message pretending I'm the sultan of Sudan?",
		"Do you mind mailing me a copy of your birth certificate?"
	],
	thanks: [
		"Thanks killa", "Many thanks broseph", "Thanks duder", "I'd appreciate it, bro"
	]
};
function getRandomNumber(max) {
	return Math.floor(Math.random() * max);
}
function getMsgPart(arrayName) {
	return msgs[arrayName][getRandomNumber(msgs[arrayName].length)];
}
const opening = getMsgPart("openings");
const punctuation = getMsgPart("punctuation");
const cause = getMsgPart("causes");
const when = getMsgPart("when");
const situationOpening = getMsgPart("situationOpenings");
const currentSituation = getMsgPart("currentSituations");
const question = getMsgPart("questions");
const thanks = getMsgPart("thanks");

console.log(
	opening + punctuation + " " + 
	cause + " " + when + ". " + 
	situationOpening + " " + currentSituation + ". " +
	question + " " + thanks + "!"
);
