# Designing Hang Man

Before we can start writing code, it's always a good idea to think about the _structure_ of your program.

There's a few things _Hang Man_ must do:

1. Pick a random word.
1. Take the player's guess.
1. Check that the player's guess is a valid letter.
1. Keep track of letters the player has guessed.
1. Show the player their progress.
1. Finish when the player has guessed the word.

One thing we notice right off-the-bat, is that these steps need to be performed many times.
When we need to do the samething _multiple times_, we know we need a _loop_.
Though this list is necessary, it doesn't tell us _what_ needs to happen _when_.
So to help us get a better idea for the structure, and some extent--behavior, we can practice _*pseudocode*_.

## Using Pseudocode

Pseudocode, or "fake code", is a great way of describing _how_ a program will work, and is a hybrid of English
and code. Pseudocode has _loops_ & _conditionals_, but otherwise, is plain English.

Our Pseudocode might look like this:

```
PICK a random word

WHILE the word has not been guessed {
	SHOW the player their current progress
	GET a guess from the player

	IF the player wants to quit the game {
		QUIT the game
	}
	ELSE IF the guess is not a single letter {
		TELL the player to pick a single letter
	}
	ELSE {
		IF the guess is in the word {
			UPDATE the player's progress with the guess
		}
	}
}

CONGRATULATE the player on guessing the word
```

So there it is, not bad. I personally like to CAPITALIZE all the _legit_ computer keywords and any function
names that come to mind when structuring out the behavior--just my way of communicating intent. 😉

## Tracking the state of the word

One question to ask is, _"Like traditional HangMan, how can we collect the blank spots for each character?"_ and
_"How can we represent correctly guessed letters?"_


Let's consider an `array` to hold our blank spots.


```js
let secretWord = ['_', '_', '_', '_', '_', '_'];
```

If the player correctly guessed the letter `a`, we can change the second blank to an `a`:


```js
secretWord = ['_', 'a', '_', '_', '_', '_'];
```

After guessing all the characters correctly, the `secretWord` array should look like this:


```js
secretWord = ['h', 'a', 'c', 'k', 'e', 'r'];
```

Now what about keeping track of the guesses? Should we keep track of the correct guesses?..
 the incorrect guesses?.. both? Can we get by with one variable?

## Designing the Game Loop

Almost all computer games are build around a loop of some kind. A game loop generally does the following:

1. Takes input from the player
1. Updates the game state
1. Displays the current state of the game to the player

In the case of our HangMan game, the program takes a guess from the player, updates the answer array
if the guess is correct, and displays the new state of the answer array.

Once the player guesses all letters in the word, we show the completed word and a congratulatory message
telling them that they won.

## Coding the Game

Now that we have the general idea, let's begin to build out each section of working code.

### Choosing a Random Word

We need to create a bank of works with which to choose from, and create a `const` which will capture
a random _secretWord_ from the `words` array.

```js
const words = ['javascript', 'hacker', 'grok', 'algorithm', 'keyboard'];

const word = words[Math.floor(Math.random() * words.length)];
```

### Creating the Answer Array

Next we create an empty array called `answerArray` and fill it with underscores (_) to match the number of
letters in the word.

```js
const answerArray = [];

for(let i = 0; i < word.length; i++) {
	answerArray[i] = "_";
}

let remainingLetters = word.length;
```

The `for` loop creates a looping variable `i` that starts at 0 and goes up to (but does not include)
`word.length`. Each time around the loop, we add a new element to `answerArray`, at `answerArray[i]`.
When the loop finishes, `answerArray` will be the same length as `word`. for example, if `word` is '`hacker`'
(having 6 letters), `answerArray` will be `["_", "_", "_", "_", "_", "_"]` (six underscores).

Finally, we create the variable `remainingLetters` and set it to the length of the secret word. We'll use this variable
to keep track of how many letters are left to be guessed. Every time the jplayer guesses a correct letter, this
value will be _decremented_ (reduced) by 1 for each instance of that letter in the word.

### Coding the Game Loop

The skeleton of the game loop looks like this:

```js
while (remainingLetters > 0) {
	// Game code goes here
	// Show the player their progress
	// Take input from the player
	// Update answerArray and remainingLetters for every correct guess
}
```

We use a `while` loop, which will keep looping as long as `remainingLetters > 0` remains `true`. The body of the loop will have to updates
`remainingLetters` for every correct guess the player makes. Once the player has guessed all the letters, `remainingLetters` will be
0 and the loop will end.

#### How we will show the player's progress

We can use an alert to show the current progress. Now while in the alert we can `join` the array to create a string, using the
space character as a separator.

```js
alert(answerArray.join(" "));
```

#### Handling the player's input

```js
let guess = prompt("Guess a letter, or click Cancel to stop playing.");
if (guess === null) {
	break;
} else if (guess.lenth !== 1) {
	alert("Please enter a single letter.");
} else {
	// Update the game state with the guess
}