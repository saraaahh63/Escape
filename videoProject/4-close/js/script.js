var mainVid = document.getElementById("myVideo");
var status;

setInterval(showOption, 100);

function showOption(){
	if (mainVid.currentTime  >= 32) {
	document.getElementById("options").style.display = "block";

}
}


function showWait(){
	mainVid.src= 'video/wait.mp4';
	document.getElementById("options").style.display = "none";
	document.getElementById("options").style.opacity = 0;



}


function showClose(){
	mainVid.src= 'video/close.mp4';
	document.getElementById("options").style.display = "none";
		document.getElementById("options").style.opacity = 0;


}


