# CREATING THE SNAKE GAME :snake:

## Creating the Arrow/Directional Key Handler

```js

// Add the 'moveSomething' function to the Window(Global)
window.addEventListener("keydown", moveSomething, false);

function moveSomething(e) {
	switch(e.keyCode) {
        case 37:
			console.log("⬅");
			break;
        case 38:
			console.log("⬆️");
			break;
        case 39:
			console.log("➡️");
			break;
        case 40:
			console.log("⬇");
			break;
	}	
}
```

