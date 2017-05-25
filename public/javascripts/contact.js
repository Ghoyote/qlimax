// Get the modal
var modal = document.getElementById('contact-modal');
var pmodal = document.getElementById('pricing-modal');
// Get the button that opens the modal
var btn = document.getElementById("contact-toggle");
var btnp = document.getElementById("pricing-toggle");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("cloze")[0];
var spanp = document.getElementsByClassName("cloze-p")[0];
// When the user clicks on the button, open the modal
btn.onclick = function() {
	modal.style.display = "block";
};
btnp.onclick = function () {
	pmodal.style.display = "block";
};
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
	modal.style.display = "none";
};
spanp.onclick = function() {
	pmodal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
	else if(event.target == pmodal){
		pmodal.style.display = "none";
	}
};

