/** Navigation visible/hidden au scroll */
let lastScrollTop = 0;

function handleScroll() {
	const scrollTop = document.documentElement.scrollTop;

	if (scrollTop > lastScrollTop) {
		document.querySelector('.navbar').style.top = -80 + 'px';
		lastScrollTop = scrollTop;
	} else {
		document.querySelector('.navbar').style.top = 0 + 'px';
		lastScrollTop = scrollTop;
	}
}

document.addEventListener('scroll', handleScroll);

/**  Bar de progression au scroll en fonction de la hauteur de la page */
document.addEventListener('scroll', () => {
	let scrollTop = document.documentElement.scrollTop;
	const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
	const scrollProgress = (scrollTop / scrollHeight) * 100;

    document.querySelector('.progress-bar').style.width = scrollProgress + '%';
});

/** Toast */

/** Toast */
function showToast() {
    toast.style.visibility = 'visible';

    timeout = setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
	toast.style.visibility = 'hidden';
}

const toastButton = document.querySelector('.toast-button');
const toastClose = document.querySelector('.toast-close');
const toast = document.querySelector('.toast');
let timeout;

toastButton.addEventListener('click', showToast);
toastClose.addEventListener('click', () => {
	clearTimeout(timeout);
	hideToast();
});

