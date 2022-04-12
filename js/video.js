var video = document.querySelector("#player1")

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video=document.querySelector("#player1");
	video.autoplay=false;
	video.loop=false;


});

document.querySelector("#play").addEventListener("click", function() {
console.log("Play Video");
document.querySelector("#volume").innerHTML=video.volume*100+"%"
video.play();
// document.querySelector("#volume").innerHTML=video.volume * 100+"%";
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
	});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("slow down this video");
	video.playbackrate = video.playbackRate *= 0.95;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("speed up this video");
	video.playbackrate = video.playbackRate *= 1.05;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("I want to skip!");
	if (video.currentTime<(video.duration-15)){
	console.log("original time" + video.currentTime);
	video.currentTime +=15;
	console.log("new time" + video.currentTime);
	}
 	else {
	video.currentTime = 0;
	video.play()
	console.log("new time" + video.currentTime);
	}
}
);

document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value/100
	console.log(video.volume)
	document.querySelector("#volume").innerHTML=video.volume*100+"%"
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted === false) {
		video.muted = true;
		this.textContent = 'Unmute';
	}
	else{
		video.muted = false;
		this.textContent = 'Mute';
	}
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add("oldSchool")
});

document.querySelector("#orig").addEventListener("click", function (){
	video.classList.add("original");
	video.classList.remove("oldSchool")
})

