var mainVid = document.getElementById("myVideo");
var status;

setInterval(showOption, 100);

function showOption(){
	if (mainVid.currentTime  >= 36.5) {
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


