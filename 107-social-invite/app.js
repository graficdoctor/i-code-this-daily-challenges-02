const form = document.querySelector('.profile-card-form');
const profileCard = document.querySelector('.profile-card');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	const userName = formData.get('username');

	form.style.display = 'none';

	const newAccount = document.createElement('div');
	newAccount.classList.add('welcone-new-account');
	newAccount.innerHTML = `
  <p class="text-align-center">Hey ${userName}! Thank you for signing up. <br> <a href="#">Access your account here.</a></p>
  `;

	profileCard.append(newAccount);
});
