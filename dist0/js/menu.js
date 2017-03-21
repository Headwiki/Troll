let url = window.location.pathname;
let menuLink = document.getElementsByTagName('li');

if (url === '/') {
	menuLink[0].classList.add('disabled');
	menuLink[0].firstElementChild.innerHTML = '<s><span>&nbsp;&nbsp;Home&nbsp;&nbsp;<s></span>';
} else if (url === '/tjenester/') {
	menuLink[1].classList.add('disabled');
	menuLink[1].firstElementChild.innerHTML = '<s><span>&nbsp;&nbsp;Tjenester&nbsp;&nbsp;<s></span>';
} else if (url === '/omoss/') {
	menuLink[2].classList.add('disabled');
	menuLink[2].firstElementChild.innerHTML = '<s><span>&nbsp;&nbsp;Om oss&nbsp;&nbsp;<s></span>';
} else if (url === '/kontakt/') {
	menuLink[3].classList.add('disabled');
	menuLink[3].firstElementChild.innerHTML = '<s><span>&nbsp;&nbsp;Kontakt&nbsp;&nbsp;<s></span>';
}
