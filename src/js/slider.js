const swiper1 = new Swiper(".swiper", {
	direction: "horizontal",
	loop: true,
	speed: 1250,

	pagination: {
		el: ".swiper-pagination",
		clickable: true,
	},

	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},

	autoplay: {
		delay: 1500,
	},
});
