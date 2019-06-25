var mainVid = document.getElementById("myVideo");
var status;

setInterval(showOption, 100);

function showOption(){
	if (mainVid.currentTime >= 53.5) {
	document.getElementById("options").style.display = "block";
	mainVid.pause();
}
}


function showWait(){
  	window.location.href='../4-wait/index.html'



}

function showClose(){
  	window.location.href='../4-close/index.html'
		


}


