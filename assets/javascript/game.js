

var wordbank = ["car", "cat", "motor", "bike", "barcelona", "ronaldo" ];
    var wordselected = wordbank[Math.floor(Math.random() * wordbank.length)]; 
    var Blankspaces = " ";
    var incorrect = document.getElementById('incorrect');
    var currentWord = document.getElementById('currentWord');
    var progressWord = [];
    var notright = [];
    var lives = 10;
    var LettersGuessed = [];
    var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h",
        "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
        "t", "u", "v", "w", "x", "y", "z"];
    var counter = 0;
    var space = 0;
    var win = 0;
    // document.getElementById('currentWord');
function gameover() {

    if (counter >= wordselected.length){
      win++;
      Wins.innerHTML = win;
    };
};

for (var i = 0; i < wordselected.length; i++){
    progressWord.push("_");
    currentWord.innerHTML = progressWord.join(" ");
  };
  document.onkeyup = function(event){
    userGuess = event.key;
    if(alphabet.indexOf(userGuess) <= -1){
      alert("Invalid input, please select a letter of the alphabet");
    }
    else
      if (notright.indexOf(userGuess)!=-1){
      alert("you have already guessed that")
    }
    else
      if (wordselected.indexOf(userGuess)<=-1){
      alert ("incorrect letter");
      notright.push(userGuess);
      lives --;
      Guessesleft.innerHTML = lives;
      incorrect.innerHTML = notright.join(" ");
    }
      console.log(notright);
    for(var i = 0; i<wordselected.length; i++){
      if(wordselected[i]===userGuess){
        progressWord[i]= userGuess;
        counter++;
        currentWord.innerHTML = progressWord.join(' ');
      };



    };

    // for (var i = 0; i < userGuess.length; i++) {
    //   if (counter + space === userGuess.length) {
    //     Wins.innerHTML = win.join("You Win!");
    //   };
    // };



  };