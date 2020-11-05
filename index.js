/*Code for keyboard inputs*/
document.addEventListener("keydown", function (event) {
	makeSound(event.key);
	animateKey(event.key);
});

/*Code for clicks*/
var drumButtons = document.querySelectorAll(".drum");
console.log(drumButtons.length);
for (var i = 0; i < drumButtons.length; i++) {
	drumButtons[i].addEventListener("click", function (event) {
		makeSound(this.innerHTML);
		animateKey(this.innerHTML);
	});
}

/*Code to generate sound on click/keydown event*/
function makeSound(key) {
	switch (key) {
		case "w":
			var sound = new Audio("sounds/tom-1.mp3");
			sound.play();
			break;

		case "a":
			var sound = new Audio("sounds/tom-2.mp3");
			sound.play();
			break;

		case "s":
			var sound = new Audio("sounds/tom-3.mp3");
			sound.play();
			break;

		case "d":
			var sound = new Audio("sounds/tom-4.mp3");
			sound.play();
			break;

		case "j":
			var sound = new Audio("sounds/snare.mp3");
			sound.play();
			break;

		case "k":
			var sound = new Audio("sounds/kick-bass.mp3");
			sound.play();
			break;

		case "l":
			var sound = new Audio("sounds/crash.mp3");
			sound.play();
			break;

		default:
			console.log("Key not configured");
	}
}

//Animation on key selection
function animateKey(key) {
	document.querySelector("." + key).classList.add("pressed");
	setTimeout(function () {
		document.querySelector("." + key).classList.remove("pressed");
	}, 100);
}
