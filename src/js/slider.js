const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

const swiperProducts = new Swiper(".swiperProducts", {
	direction: "horizontal",
	loop: true,
	speed: 1250,
	slidesPerView: 1,

	keyboard: {
		enabled: true,
	},

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

	on: {
		autoplayTimeLeft(s, time, progress) {
			progressCircle.style.setProperty("--progress", 1 - progress);
			progressContent.textContent = `${Math.ceil(time / 1000)}s`;
		},
	},
});
