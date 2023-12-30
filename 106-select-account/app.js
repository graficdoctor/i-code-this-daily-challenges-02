const profileCardEdit = document.querySelectorAll('.profile-card-edit');
const profileEllipsis = document.querySelectorAll('.profile-ellipsis');

profileEllipsis.forEach((ellipsis) => {
	ellipsis.addEventListener('click', () => {
		const profileID = ellipsis.dataset.id;

		profileCardEdit.forEach((profileCard) => {
			if (profileCard.dataset.id === profileID) {
				profileCard.style.display =
					profileCard.style.display === 'none' ? 'flex' : 'none';
			}
		});
	});
});
