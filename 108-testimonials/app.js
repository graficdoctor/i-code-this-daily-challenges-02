const testimonials = [
	{
		id: 1,
		name: 'John V. Bellamy',
		job: 'Founder & CEO, The Company',
		img: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
		text: 'Both attractive and highly adaptable. Buy this now. Thank you for making it painless, pleasant and most of all hassle free!'
	},
	{
		id: 2,
		name: 'Emily Brown',
		job: 'Project Manager',
		img: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBvcnRyYWl0JTIwc21pbGluZ3xlbnwwfHwwfHx8MA%3D%3D',
		text: 'Exceptional quality and professionalism. Working with them was a breeze. Our project was delivered on time and exceeded expectations.'
	},
	{
		id: 3,
		name: 'John A. Smith',
		job: 'Marketing Director',
		img: 'https://images.unsplash.com/photo-1586628345267-d9db8d893f9e?q=80&w=2788&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		text: 'Outstanding service! The team went above and beyond to meet our needs. I highly recommend their expertise.'
	},
	{
		id: 4,
		name: 'David C. Johnson',
		job: 'Chief Technology Officer',
		img: 'https://images.unsplash.com/photo-1634136906717-6421833e1b7a?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
		text: 'Impressed by the innovative solutions provided. The attention to detail and commitment to excellence are unmatched. A pleasure to collaborate with.'
	}
];

const img = document.querySelector('.profile-img');
const author = document.querySelector('.profile-name');
const job = document.querySelector('.profile-description');
const info = document.querySelector('.testimony-text');

const prevBtn = document.querySelector('.slider-left-btn');
const nextBtn = document.querySelector('.slider-right-btn');

// set starting item
let currentItem = 0;

// load initial item
window.addEventListener('DOMContentLoaded', function () {
	showPerson();
});

// show person based on item

function showPerson() {
	const item = testimonials[currentItem];
	img.src = item.img;
	author.textContent = item.name;
	job.textContent = item.job;
	info.textContent = item.text;
}

// show next person

nextBtn.addEventListener('click', function () {
	currentItem++;
	if (currentItem > testimonials.length - 1) {
		currentItem = 0;
	}
	showPerson();
});

prevBtn.addEventListener('click', function () {
	currentItem--;
	if (currentItem < 0) {
		currentItem = testimonials.length - 1;
	}
	showPerson();
});
