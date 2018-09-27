// Strings for gif files that were too big to store locally
var leonardoGifSrc = "https://media1.tenor.com/images/8c8f18bec7ba6a1b7ddc2ef76664e9ae/tenor.gif?itemid=10584134";
var loganGifSrc = "https://thumbs.gfycat.com/EssentialRegalCockroach-small.gif";

// Array of all questions
var questions = ["Who played Jordan Belfort in Wolf of Wall Street?", 
                "Who had a lead role in the show Friends?",
                "Who led the bad*ss pack of wolves in Ocean's Eight?",
                "Who has a son named Jaden and a daughter named Willow?",
                "Who plays the lead detective in the movie Catch Me If You Can?",
                "Who co-stars in La La Land alongside the mysterious Ryan Gosling?",
                "Who plays Brennan Huff in the movie, Step Brothers?",
                "Whose name rhymes with Shmim Sharrey?",
                "Who stars in the popular Netflix series, Dear White People?",
                "Who co-stars alongside Bradley Cooper in Silver Linings Playbook?"];


// Creating trivia question objects
var tq1 = {
    question: questions[0],
    ans1: "John Wayne",
    ans2: "Mike Meyers",
    ans3: "Madam Sandler",
    ans4: "Leonardo Dicaprio",
    correctAns: "Leonardo Dicaprio"
};
var tq2 = {
    question: questions[1],
    ans1: "John Wayne",
    ans2: "Sandra Bullock",
    ans3: "Mandy Moore",
    ans4: "Jennifer Aniston",
    correctAns: "Jennifer Aniston"
};
var tq3 = {
    question: questions[2],
    ans1: "Kevin Costner",
    ans2: "Michael Jordan",
    ans3: "George Clooney",
    ans4: "Sandra Bullock",
    correctAns: "Sandra Bullock"
};
var tq4 = {
    question: questions[3],
    ans1: "Stephen Curry",
    ans2: "Matt Damon",
    ans3: "Serena Williams",
    ans4: "Will Smith",
    correctAns: "Will Smith"
};
var tq5 = {
    question: questions[4],
    ans1: "Tom Hanks",
    ans2: "Elon Musk",
    ans3: "Jennifer Lawrence",
    ans4: "Michelle Obama",
    correctAns: "Tom Hanks"
};
var tq6 = {
    question: questions[5],
    ans1: "Jar Jar Binks",
    ans2: "Emma Stone",
    ans3: "Eva Longoria",
    ans4: "Natalie Portman",
    correctAns: "Emma Stone"
};
var tq7 = {
    question: questions[6],
    ans1: "Will Ferrell",
    ans2: "Seth Rogen",
    ans3: "James Franco",
    ans4: "Jonah Hill",
    correctAns: "Will Ferrell"
};
var tq8 = {
    question: questions[7],
    ans1: "Kim Rilarry",
    ans2: "Leonardo Dicaprio",
    ans3: "Mahommad Similar",
    ans4: "Jim Carrey",
    correctAns: "Jim Carrey"
};
var tq9 = {
    question: questions[8],
    ans1: "Elizabeth Thomas",
    ans2: "Tessa Thompson",
    ans3: "Logan Browning",
    ans4: "Carrie Underwood",
    correctAns: "Logan Browning"
};
var tq10 = {
    question: questions[9],
    ans1: "Terrence McKenna",
    ans2: "Penelope Cruz",
    ans3: "Keira Knightley",
    ans4: "Jennifer Lawrence",
    correctAns: "Jennifer Lawrence"
};

// Declare and fill array of trivia questions
var tqs = [tq1, tq2, tq3, tq4, tq5, tq6, tq7, tq8, tq9, tq10];

// Function from https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
// to shuffle array [of trivia questions]
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    console.log(currentIndex);
  
    // While there remain elements to shuffle...
    while (0 !== currentIndex) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
  
      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    } 
    return array;
}
  
// Function to present trivia question to user
function presentQuestion (i) {
    $("#question").text(tqs[i].question);
    $("#op1").text(tqs[i].ans1);
    $("#op2").text(tqs[i].ans2);
    $("#op3").text(tqs[i].ans3);
    $("#op4").text(tqs[i].ans4);
}

// Function to start game
function startGame () {

};

// When page loads...
$(document).ready( () => {
    // Shuffle the array of trivia questions
    tqs = shuffle(tqs);
    console.log(tqs);
    // Execute trivia
    //executeGame();
});