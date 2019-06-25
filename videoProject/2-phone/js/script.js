var mainVid = document.getElementById("myVideo");
var status;

setInterval(showOption, 100);

function showOption(){
	if (mainVid.currentTime  >= 38) {
	document.getElementById("options").style.display = "block";
		mainVid.pause();

}
}


function showMall(){
	window.location.href='../3-mall/index.html'

}


function showStreet(){
	window.location.href='../3-street/index.html'

}

if (mainVid.currentTime >= 12) {
	document.getElementById("c0").style.opacity="0";
	document.getElementById("c1").style.opacity="0";
	document.getElementById("c2").style.opacity="0";
}


