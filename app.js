"use strict";

function imagesInit() {
	const images = document.querySelector('.article__image');
	if (images.length) {
		images.forEach(image => {
			const imageItem = image.querySelector('img');
			const padding = imageItem.offsetHeight / imageItem.offsetWidth * 100;
			image.style.paddingBottom = `${padding}%`;
			imageItem.classList.add('init');
		});
	}
}

window.addEventListener('load', windowLoad);

function windowLoad() {
	imagesInit();
}