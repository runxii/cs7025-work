# Lecture Exercises

This repository is to store exercises from **CS 7025
programming for digital media**

## Lecture 4 DOM

### Event Listener

+ hover
+ click
+ visit

```Javascript
// function something on clicking on the element
document.getElementById("id-of-the-element").addEventListener("click", function (ev) {  })
```

## Lecture 5 Switch to Random Pictures

+ It will switch to a random pic by clicking at the button.
+ It is realized by a random number, not an array.

### Random Number in JS

```Javascript
// Returns a random integer from 0 to 100:
Math.floor(Math.random() * 101);
```

### Get img src in JS

```HTML
<img id="img-in-web" src="src/to/the/img" width=300 height=400>
```

```Javascript
// Get the source of image in HTML
var imgSrc = document.getElementById("img-in-web").src 
```