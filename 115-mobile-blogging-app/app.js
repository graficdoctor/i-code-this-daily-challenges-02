const bookmarks = document.querySelectorAll('.bookmark');
const selectionButtons = document.querySelectorAll('.selection-button');
const continueBtnEl = document.querySelector('.continue-btn');

bookmarks.forEach((bookmark) => {
	bookmark.addEventListener('click', function () {
		const nameAttribute = bookmark.getAttribute('name');
		const newNameAttribute =
			nameAttribute === 'bookmark' ? 'bookmark-outline' : 'bookmark';
		bookmark.setAttribute('name', newNameAttribute);
	});
});

selectionButtons.forEach((button) => {
	button.addEventListener('click', function () {
		button.classList.toggle('selected');
	});
});

continueBtnEl.addEventListener('click', function () {
	const blogCardsSection = document.querySelector('.blog-cards');
	const selectionSection = document.querySelector('.selection-page');
	blogCardsSection.style.display = 'flex';
	selectionSection.style.display = 'none';
});
