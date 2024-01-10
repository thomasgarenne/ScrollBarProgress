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
const toastButton = document.querySelector('.toast-button');
const toastClose = document.querySelector('.toast-close');
const toast = document.querySelector('.toast');

let timeout;

function showToast() {
    toast.style.visibility = 'visible';
	toastButton.disabled = true;

	updateProgressBar();

    timeout = setTimeout(() => {
        hideToast();
    }, 3000);
}

function hideToast() {
	toast.style.visibility = 'hidden';
	toastButton.disabled = false;
	clearTimeout(timeout);
	resetProgressBar();
}

toastButton.addEventListener('click', showToast);
toastClose.addEventListener('click', hideToast);

/** Toast Bar Progress */
const toastBar = document.querySelector('.toast-bar');

let toastDuration = 3000;
const interval = 10; 
const totalIterations = toastDuration / interval;
let currentIteration = 0;
let progressInterval;

function updateProgressBar() {
	if (toast.style.visibility === 'visible') {
		progressInterval = setInterval(() => {
			if (currentIteration < totalIterations) {
				const progress = (currentIteration / totalIterations) * 100;
				toastBar.style.width = `${100 - progress}%`;
				currentIteration++;
			} else {
				resetProgressBar();
			}
		}, interval);
	}
}

function resetProgressBar() {
	clearInterval(progressInterval);
	toastBar.style.width = '100%';
	currentIteration = 0;
}
