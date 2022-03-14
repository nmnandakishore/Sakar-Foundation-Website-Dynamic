// import Typed from "typed.js";

var tickerElem = document.querySelector("#news-ticker");

var options = {
	backDelay: 3500,
	loop: true,
	strings: [
		"<a href=''>High school students raised fund for homeless</a>",
		"<a href=''>Indian children provided with hearing aids</a>",
	],
	typeSpeed: 40,
};

// var typed = new Typed("#news-ticker", options);

window.onscroll = function () {
	// console.log("stickyTop:", stickyTop)
	// console.log("pageYOffset:", window.pageYOffset)
	toggleSticky();
};

var headerElem = document.getElementById("header");
var topMenuElem = document.getElementById("top-menu");
var sticky = headerElem.offsetTop + headerElem.offsetHeight;
// stickyTop = 90;
// var stickyTop = headerElem.offsetTop;
var stickyTop = topMenuElem.offsetTop + topMenuElem.offsetHeight;;
var pageContentElem;



function toggleSticky() {
	if (
		window.pageYOffset >= sticky &&
		!headerElem.classList.contains("sticky")
	) {
		headerElem.classList.add("sticky");
		headerElem.classList.add("animate__fadeInDown");
	} else if (
		window.pageYOffset < stickyTop &&
		headerElem.classList.contains("sticky")
	) {
		headerElem.classList.remove("animate__fadeInDown");
		headerElem.classList.remove("sticky");
	}
}

/*-------------------Scroll Animations------------------ */

// var animateOnScrollElems = document.querySelectorAll(".animate_on_scroll");
// var animateOnScrollElems = document.querySelectorAll("[data-animate]");

// window.addEventListener("load", function () {
// 	for (var j = 0; j < animateOnScrollElems.length; j++) {
// 		var elem = animateOnScrollElems[j];
// 		elem.classList.add("hidden");
// 	}
// });

// function reveal() {
// 	for (var i = 0; i < animateOnScrollElems.length; i++) {
// 		var elem = animateOnScrollElems[i];
// 		var windowHeight = window.innerHeight;
// 		var elementTop = elem.getBoundingClientRect().top;
// 		var elementVisible = 0.8 * Window.innerHeight;

// 		if (
// 			elementTop < windowHeight - elementVisible &&
// 			elem.classList.contains("hidden")
// 		) {
// 			elem.classList.add("animate__animated");
// 			elem.classList.add(elem.dataset.animate);
// 			elem.classList.remove("hidden");
// 		}
// 		/*else {
// 			elem.classList.remove("active");
// 		}*/
// 	}
// }

// window.addEventListener("scroll", reveal);
