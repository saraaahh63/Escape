var mainVid = document.getElementById("myVideo");
var status;

setTimeout(showWrapper, 27000);

function showWrapper() {
	document.getElementById("wp").style.display = "none";
	$("#wp").fadeOut('slow');


}

setTimeout(showOption, 37000);

function showOption(){
	document.getElementById("options").style.display = "block";
	mainVid.pause();

}


function showMall(){
	window.location.href='../3-mall/index.html';

}


function showStreet(){
	window.location.href='../3-street/index.html';

}
