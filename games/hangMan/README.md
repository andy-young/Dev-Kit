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
names that come to mind when structuring out the behavior--just my way of communicating intent 😉.

## Tracking the state of the word



