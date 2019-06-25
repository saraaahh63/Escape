var mainVid = document.getElementById("myVideo");
var vidLocation = ["video/Opening.mp4", "video/window.mp4"];
var status;

setInterval(showOption, 100);

function showOption(){
	if (mainVid.currentTime  >= 39) { document.getElementById("options").style.display = "block";
		mainVid.pause();

	} else if (mainVid.currentTime  >= 13) {
	document.getElementById("options").style.display = "block";
		mainVid.pause();

}
}


function showWindow(){
	window.location.href='../2-window/index.html'
	document.getElementById("options").style.opacity = 0;

}


function showPhone(){
	window.location.href='../2-phone/index.html'
	document.getElementById("options").style.display = "none";
}


