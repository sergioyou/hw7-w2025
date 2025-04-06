var video;

//Page load and turned off loop and autoplay
window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector("#player1");
	video.autoplay=false;
	console.log('autoplay is set to '+ video.autoplay) //setting it to not autoplay
	video.loop=false;
	console.log('loop is set to '+ video.loop)

});

//Play button
document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();

// Update the volume display
let currentVolume = video.volume * 100;
document.querySelector("#volume").textContent = currentVolume + "%";
});

// Pause Button
document.querySelector("#pause").addEventListener("click", function () {
	console.log("Pause Video");
	video.pause();
});

// Slow Down Button
document.querySelector("#slower").addEventListener("click", function () {
	video.playbackRate *= 0.9; // This will reduce its speed by 10%
	console.log("New speed is " + video.playbackRate);
});

// Speed Up Button
document.querySelector("#faster").addEventListener("click", function () {
	video.playbackRate /= 0.9; // This will increase speed proportionally
	console.log("New speed is " + video.playbackRate);
});

// Skip Ahead Button
document.querySelector("#skip").addEventListener("click", function () {
	if (video.currentTime + 10 < video.duration) {
		video.currentTime += 10;
	} else {
		video.currentTime = 0;
	}
	console.log("Current video time is " + video.currentTime);
});

// Mute Button
document.querySelector("#mute").addEventListener("click", function () {
	// Checking to see  if video is already muted
	if (video.muted === true) {
		video.muted = false;              // Unmuting the video
		this.textContent = "Mute"; 
	} else {
		video.muted = true;               // Muteing the video
		this.textContent = "Unmute";
	}
	console.log("Muted: " + video.muted); // Log within console true or false
});


// Volume Slider
document.querySelector("#slider").addEventListener("input", function () {
	let volumeValue = this.value / 100;
	video.volume = volumeValue;
	document.querySelector("#volume").textContent = this.value + "%"; // Updating display
});

// Old School Button
document.querySelector("#vintage").addEventListener("click", function () {
	video.classList.add("oldSchool");
	console.log('Old School style');
});

// Original Button (taking off old school)
document.querySelector("#orig").addEventListener("click", function () {
	video.classList.remove("oldSchool");
	console.log('Original style')
});
