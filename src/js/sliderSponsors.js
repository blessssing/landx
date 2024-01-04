const sliderSponsors = new Swiper(".sliderSponsors", {
	slidesPerView: 3, // 3
	grid: {
		fill: "row",
		rows: 2, // 2
	},
	spaceBetween: 10, // 30
	// loop: true,
	speed: 2000, // 1250
	autoplay: {
		delay: 0,
	},
	// breakpoints: {
	// 	// when window width is >= 320px
	// 	320: {
	// 		slidesPerView: 2,
	// 		spaceBetween: 20,
	// 	},
	// 	// when window width is >= 480px
	// 	480: {
	// 		slidesPerView: 3,
	// 		spaceBetween: 30,
	// 	},
	// 	// when window width is >= 640px
	// 	640: {
	// 		slidesPerView: 4,
	// 		spaceBetween: 40,
	// 	},
	// },
});
