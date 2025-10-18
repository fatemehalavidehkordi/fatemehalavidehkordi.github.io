(function ($) {
	"use strict";
	// get window width
	let device_width = window.innerWidth;

	// background image js
	function background() {
		var img = $(".bg_img");
		img.css("background-image", function () {
			var bg = "url(" + $(this).data("background") + ")";

			if ($(this).data("background")) {
				return bg;
			} else {
				return false;
			}
		});

		$("[data-bg-color]").each(function () {
			$(this).css("background-color", $(this).attr("data-bg-color"));
		});
	}

	// active mobile-menu
	$("#ta-navbar").meanmenu({
		meanMenuContainer: ".ta-mobile-menu",
		meanScreenWidth: "1199",
		meanExpand: ["<i>+</i>"],
	});

	// Activate lightcase
	$("a[data-rel^=lightcase]").lightcase();

	// preloader active
	// preloader active
	function sitePreloader(e) {
		$("body").removeClass("ta-page-loading");
		setTimeout(function () {
			e("body").removeClass("ta-page-loading");
		}, 500);
		e(window).load(function () {
			e("body").removeClass("ta-page-loading");
		});
		e(window).on("beforeunload", function (t) {
			e("body").addClass("ta-page-loading");
		});
		e(window).on("pageshow", function (t) {
			if (t.originalEvent.persisted) {
				e("body").removeClass("ta-page-loading");
			}
			e("body").addClass("ta-reaload-done");
		});
	}
	sitePreloader(jQuery);

	// WHEN DOCUMENT LOADING
	$(window).on("load", function () {
		background();
	});

	// copyright year with condition
	function copyRightYear() {
		let currentYear = new Date().getFullYear();
		if (document.getElementById("copyright-date")) {
			document.getElementById("copyright-date").innerHTML = currentYear;
		}
	}
	copyRightYear();

	// Active Odometer Counter
	jQuery(".odometer").appear(function (e) {
		var odo = jQuery(".odometer");
		odo.each(function () {
			var countNumber = jQuery(this).attr("data-count");
			jQuery(this).html(countNumber);
		});
	});

	// marquee active
	var nftMarqueeLeft = $("[data-ta-nft-marquee-left]");
	if (nftMarqueeLeft.length) {
		nftMarqueeLeft.marquee({
			speed: 30,
			gap: 0,
			delayBeforeStart: 0,
			direction: "left",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}
	var nftMarqueeRight = $("[data-ta-nft-marquee-right]");
	if (nftMarqueeRight.length) {
		nftMarqueeRight.marquee({
			speed: 30,
			gap: 0,
			delayBeforeStart: 0,
			direction: "right",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	// marquee suppli
	var suppliMarqueeLeft = $("[data-ta-suppliMarqueeLeft]");
	if (suppliMarqueeLeft.length) {
		suppliMarqueeLeft.marquee({
			speed: 30,
			gap: 0,
			delayBeforeStart: 0,
			direction: "left",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	var suppliMarqueeRight = $("[data-ta-suppliMarqueeRight]");
	if (suppliMarqueeRight.length) {
		suppliMarqueeRight.marquee({
			speed: 30,
			gap: 0,
			delayBeforeStart: 0,
			direction: "right",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	var daMovingLines = $("[data-ta-daMovingLines]");
	if (daMovingLines.length) {
		daMovingLines.marquee({
			speed: 80,
			gap: 0,
			delayBeforeStart: 0,
			direction: "left",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	var brandMarqueeLeft = $("[data-ta-brandMarqueeLeft]");
	if (brandMarqueeLeft.length) {
		brandMarqueeLeft.marquee({
			speed: 80,
			gap: 0,
			delayBeforeStart: 0,
			direction: "left",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	var brandMarqueeRight = $("[data-ta-brandMarqueeRight]");
	if (brandMarqueeRight.length) {
		brandMarqueeRight.marquee({
			speed: 80,
			gap: 0,
			delayBeforeStart: 0,
			direction: "right",
			duplicated: true,
			pauseOnHover: true,
			startVisible: true,
		});
	}

	// skill bar active
	if (typeof $.fn.knob != "undefined") {
		$(".knob").each(function () {
			var $this = $(this),
				knobVal = $this.attr("data-rel");
			$this.knob({
				draw: function () {
					$(this.i).val(this.cv + "%");
				},
			});

			$this.appear(
				function () {
					$({
						value: 0,
					}).animate(
						{
							value: knobVal,
						},
						{
							duration: 2000,
							easing: "swing",
							step: function () {
								$this
									.val(Math.ceil(this.value))
									.trigger("change");
							},
						}
					);
				},
				{
					accX: 0,
					accY: -150,
				}
			);
		});
	}

	// brand slider active
	var taNftBrand = $("[data-ta-nft-brand]");
	taNftBrand.owlCarousel({
		loop: true,
		margin: 15,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout: 0,
		autoplaySpeed: 3000,
		autoplayHoverPause: false,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			475: {
				items: 2,
				autoplay: false,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1440: {
				items: 5,
			},
		},
	});

	var taSuppliBrand = $("[data-ta-suppli-brand]");
	taSuppliBrand.owlCarousel({
		loop: true,
		margin: 50,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout: 0,
		autoplaySpeed: 3000,
		autoplayHoverPause: false,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			475: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1200: {
				items: 5,
			},
			1440: {
				items: 6,
			},
		},
	});

	var taapp2Brand = $("[data-ta-app2-brand]");
	taapp2Brand.owlCarousel({
		loop: true,
		margin: 70,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout: 0,
		autoplaySpeed: 3000,
		autoplayHoverPause: false,
		nav: false,
		dots: false,
		responsive: {
			0: {
				items: 1,
				margin: 15,
			},
			380: {
				items: 2,
				margin: 20,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
				margin: 30,
			},
			1200: {
				items: 5,
			},
		},
	});

	var daBrand = $("[data-ta-daBrand]");
	daBrand.owlCarousel({
		loop: true,
		margin: 30,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: [
			"<i class='far fa-long-arrow-left'></i>",
			"<i class='far fa-long-arrow-right'></i>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 0,
			},
			475: {
				items: 2,
			},
			768: {
				items: 3,
			},
			992: {
				items: 4,
			},
			1440: {
				items: 5,
			},
		},
	});

	// roadmap slider active
	var taRoadmap = $("[data-ta-roadmap-slider]");
	taRoadmap.owlCarousel({
		loop: true,
		margin: 50,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: [
			"<i class='far fa-arrow-left'></i>",
			"<i class='far fa-arrow-right'></i>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 20,
			},
			768: {
				items: 2,
			},
			1440: {
				items: 3,
			},
		},
	});

	// owl nav append
	if ($(".ta-roadmap-slider-wrapper").length) {
		var roadMapNav = $(".ta-roadmap-box-wrapper .owl-nav");
		var roadMapNavWrapper = $("[data-roadMap-nav-wrapper]");
		roadMapNav.insertAfter(roadMapNavWrapper);
	}

	// testimonial slider active
	var taTestimonial = $("[data-ta-nft-testimonial]");
	taTestimonial.owlCarousel({
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		nav: false,
		dots: true,
		items: 1,
	});

	var taAppTestimonial = $("[data-ta-app-testimonial]");
	taAppTestimonial.owlCarousel({
		loop: true,
		margin: 90,
		loop: true,
		slideSpeed: 3000,
		dots: true,
		items: 1,
		nav: true,
		dots: false,
		navText: [
			"<i class='far fa-arrow-left'></i>",
			"<i class='far fa-arrow-right'></i>",
		],
	});

	const taAuthorTestimonial = $("[data-ta-authorTestimonial]");
	const taSuppliTestimonial = $("[data-ta-suppliTestimonial]");
	const syncedSecondary = true;

	taSuppliTestimonial
		.owlCarousel({
			loop: true,
			margin: 0,
			slideSpeed: 3000,
			dots: false,
			items: 1,
			nav: false,
		})
		.on("changed.owl.carousel", syncPosition);

	taAuthorTestimonial.on("initialized.owl.carousel", function () {
		taAuthorTestimonial.find(".owl-item").eq(1).addClass("current");
	});

	taAuthorTestimonial
		.owlCarousel({
			margin: 20,
			slideSpeed: 3000,
			dots: false,
			slideBy: 1,
			nav: true,
			dots: false,
			navText: [
				"<i class='far fa-arrow-left'></i>",
				"<i class='far fa-arrow-right'></i>",
			],
			responsiveClass: true,
			responsive: {
				0: {
					items: 1,
					margin: 0,
				},
				992: {
					items: 2,
				},
				1300: {
					items: 3,
					margin: 0,
				},
				1440: {
					margin: 20,
				},
			},
		})
		.on("changed.owl.carousel", syncPosition2);

	function syncPosition(el) {
		const count = el.item.count - 1;
		let current = Math.round(el.item.index - el.item.count / 2 - 0.5);

		if (current < 0) {
			current = count;
		}
		if (current > count) {
			current = 0;
		}

		taAuthorTestimonial
			.find(".owl-item")
			.removeClass("current")
			.eq(current)
			.addClass("current");
		const onscreen =
			taAuthorTestimonial.find(".owl-item.active").length - 1;
		const start = taAuthorTestimonial
			.find(".owl-item.active")
			.first()
			.index();
		const end = taAuthorTestimonial.find(".owl-item.active").last().index();

		if (current > end) {
			taAuthorTestimonial.data("owl.carousel").to(current, 100, true);
		}
		if (current < start) {
			taAuthorTestimonial
				.data("owl.carousel")
				.to(current - onscreen, 100, true);
		}
	}

	function syncPosition2(el) {
		if (syncedSecondary) {
			var number = el.item.index;
			if (taSuppliTestimonial.data("owl.carousel")) {
				taSuppliTestimonial.data("owl.carousel").to(number, 100, true);
			}
		}
	}

	taAuthorTestimonial.on("click", ".owl-item", function (e) {
		e.preventDefault();
		const number = $(this).index();
		const owlData = taSuppliTestimonial.data("owl.carousel");
		if (owlData) {
			owlData.to(number, 300, true);
		}
	});

	// hero product slider active
	var heroProductSlider = $("[dat-heroProduct-slider]");
	heroProductSlider.owlCarousel({
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		dots: true,
		items: 1,
		nav: true,
		dots: false,
		navText: [
			"<i class='far fa-arrow-left'></i>",
			"<i class='far fa-arrow-right'></i>",
		],
	});

	// product slider active
	var taproductSlider = $("[data-ta-productSlider]");
	taproductSlider.owlCarousel({
		margin: 30,
		loop: true,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: [
			"<i class='far fa-long-arrow-left'></i>",
			"<i class='far fa-long-arrow-right'></i>",
		],
		responsiveClass: true,
		responsive: {
			0: {
				margin: 0,
				items: 1,
			},
			576: {
				items: 1,
			},
			1200: {
				items: 2,
			},
		},
	});
	// owl nav append
	if ($(".ta-wrapper").length) {
		var heroProductNav = $(".heroProduct-slider .owl-nav");
		var heroProductNavWrapper = $("[data-heroProduct-nav]");
		heroProductNav.insertAfter(heroProductNavWrapper);
	}

	// related book slider active
	var relatedBookSlider = $("[data-ta-relatedBookSlider]");
	relatedBookSlider.owlCarousel({
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: true,
		margin: 110,
		navText: [
			"<i class='far fa-long-arrow-left'></i>",
			"<i class='far fa-long-arrow-right'></i>",
		],
		items: 1,
	});

	if (relatedBookSlider.length) {
		var relatedBookDot = $("[data-ta-relatedBookSlider] .owl-dots");
		var relatedBookDotWrapper = $("[data-ta-owlDot-wrapper]");
		relatedBookDot.appendTo(relatedBookDotWrapper);
	}

	// ai testimonial slider active
	var testimonialMovingwSlider1 = $("[data-ta-testimonialMovingwSlider1]");
	testimonialMovingwSlider1.owlCarousel({
		loop: true,
		margin: 20,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout: 0,
		autoplaySpeed: 4000,
		autoplayHoverPause: false,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1,
				margin: 20,
			},
			475: {
				items: 1,
				margin: 20,
				autoplay: false,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	var testimonialMovingwSlider2 = $("[data-ta-testimonialMovingwSlider2]");
	testimonialMovingwSlider2.owlCarousel({
		loop: true,
		margin: 20,
		loop: true,
		nav: false,
		dots: false,
		autoplay: true,
		slideTransition: "linear",
		autoplayTimeout: 0,
		autoplaySpeed: 4000,
		autoplayHoverPause: false,
		responsiveClass: true,
		rtl: true,
		responsive: {
			0: {
				items: 1,
				margin: 20,
			},
			475: {
				items: 1,
				margin: 20,
				autoplay: false,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	// app ss slider active
	var appSsSlider = $("[data-ta-ta-appSsSlider]");
	appSsSlider.owlCarousel({
		loop: true,
		margin: 70,
		loop: true,
		slideSpeed: 3000,
		nav: false,
		dots: false,
		responsiveClass: true,
		center: true,
		responsive: {
			0: {
				items: 2,
				margin: 30,
			},
			475: {
				items: 2,
			},
			992: {
				items: 3,
			},
		},
	});

	//
	var postGallery = $("[data-ta-postGallery]");
	postGallery.owlCarousel({
		loop: true,
		margin: 0,
		loop: true,
		slideSpeed: 3000,
		nav: true,
		dots: false,
		navText: [
			"<i class='far fa-arrow-left'></i>",
			"<i class='far fa-arrow-right'></i>",
		],
		items: 1,
	});

	// search popup active
	if ($("[data-ta-search-trigger]").length) {
		$("[data-ta-search-trigger]").on("click", function () {
			$(".search-popup-wrapper").addClass("is-open");
			$("[data-ta-overlay]").addClass("is-open");
		});
		$("[data-search-close], [data-ta-overlay]").on("click", function () {
			$(".search-popup-wrapper").removeClass("is-open");
			$("[data-ta-overlay]").removeClass("is-open");
		});
	}

	// side info active
	$("[data-ta-sideinfo-trigger]").on("click", function (e) {
		e.preventDefault();
		$(".ta-side-info-wrapper").addClass("is-open");
		$("[data-ta-overlay]").addClass("is-open");
	});

	// remove active class from mobile-menu
	$("[data-ta-close], [data-ta-overlay]").on("click", function (e) {
		e.preventDefault();
		$("[data-ta-overlay]").removeClass("is-open");
		$(".ta-side-info-wrapper").removeClass("is-open");
	});

	// faq active clsss
	if ($(".ta-faq-item").length) {
		// add active class individually to each faq item on click of faq title
		$(".ta-faq-item").each(function () {
			$(this).on("click", function () {
				$(this).toggleClass("active").siblings().removeClass("active");
			});
		});
	}

	// data-ta-fListsIco add class on hover li
	if ($("[data-ta-fListsIco]").length) {
		$("[data-ta-fListsIco] li").each(function () {
			$(this).on("mouseenter", function () {
				$(this).addClass("active").siblings().removeClass("active");
			});
		});
	}

	// gsap animation
	let smoother = ScrollSmoother.create({
		wrapper: "#ta-main-wrapper",
		effects: true,
		content: "#ta-main-content",
	});

	// scroll to brand section
	if ($("[data-ta-scroll-bottom]").length) {
		let scrollBottom = document.querySelector("[data-ta-scroll-bottom]");
		scrollBottom.addEventListener("click", () => {
			smoother.scrollTo("[data-ta-scrollDestination]");
		});
	}
	// check each nav link and scroll to section with id same as href
	if ($("#ta-navbar").length) {
		let scrollLinks = document.querySelectorAll("[data-ta-onPageScroll]");

		scrollLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				e.preventDefault();
				let href = link.getAttribute("href");
				smoother.scrollTo(href);
			});
		});
	}

	if ($("[data-ta-backtotop]").length) {
		let scrollTop = document.querySelector("[data-ta-backtotop]");
		scrollTop.addEventListener("click", function () {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});
	}
	// testimonial image animation
	if ($("[data-ta-hero-anim] .nft-cards .ta-item").length) {
		gsap.set("[data-ta-hero-anim] .nft-cards .ta-item", {
			opacity: 0,
			scale: 0.5,
		});

		gsap.to("[data-ta-hero-anim] .nft-cards .ta-item", {
			scrollTrigger: {
				trigger: ".ta-nft-hero-section",
				start: "top center+=200",
				markers: false,
			},
			opacity: 1,
			scale: 1,
			x: 20,
			ease: "power2.out",
			duration: 2.5,
			stagger: {
				each: 0.3,
			},
		});
	}

	if ($("[data-ta-img-anim] img").length) {
		gsap.set("[data-ta-img-anim] img", { opacity: 0, scale: 0.5 });
		gsap.to("[data-ta-img-anim] img", {
			scrollTrigger: {
				trigger: ".ta-testimonial-section",
				start: "top center+=200",
				markers: false,
			},
			opacity: 1,
			scale: 1,
			x: 20,
			ease: "power2.out",
			duration: 2.5,
			stagger: {
				each: 0.3,
			},
		});
	}

	// split text animation
	let splitTitleLines = gsap.utils.toArray("[data-ta-split-text]");
	splitTitleLines.forEach((splitTextLine) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				end: "bottom 60%",
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});

		const itemSplitted = new SplitText(splitTextLine, {
			type: "words, lines",
		});
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" });
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: 0.3,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});

	let splitTextLines = gsap.utils.toArray("[data-ta-text-anim] p");
	splitTextLines.forEach((splitTextLine) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				duration: 2,
				end: "bottom 60%",
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});

		const itemSplitted = new SplitText(splitTextLine, { type: "lines" });
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" });
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: 0.5,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});

	// button hover animation
	const all_btn = gsap.utils.toArray("[data-ta-btnWrapper]");
	const all_btn_cirlce = gsap.utils.toArray("[data-ta-btnHover]");
	all_btn.forEach((btn, i) => {
		$(btn).mousemove(function (e) {
			callParallax(e);
		});
		function callParallax(e) {
			parallaxIt(e, all_btn_cirlce[i], 80);
		}

		function parallaxIt(e, target, movement) {
			var $this = $(btn);
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;

			gsap.to(target, 0.5, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
				ease: Power2.easeOut,
			});
		}
		$(btn).mouseleave(function (e) {
			gsap.to(all_btn_cirlce[i], 0.5, {
				x: 0,
				y: 0,
				ease: Power2.easeOut,
			});
		});
	});
	$("[data-ta-btnHover]").on("mouseenter", function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find("[data-ta-el]").css({
			top: y,
			left: x,
		});
	});

	$("[data-ta-btnHover]").on("mouseout", function (e) {
		var x = e.pageX - $(this).offset().left;
		var y = e.pageY - $(this).offset().top;

		$(this).find("[data-ta-el]").css({
			top: y,
			left: x,
		});
	});

	// cursor animation
	function mousemoveHandler(e) {
		try {
			let tl = gsap.timeline({
				defaults: {
					x: e.clientX,
					y: e.clientY,
				},
			});
			// Main Cursor Moving
			tl.to("[data-ta-cursor]", {
				ease: "power2.out",
			});
		} catch (error) {
			console.log(error);
		}
	}
	document.addEventListener("mousemove", mousemoveHandler);

	imageMoving(".ta-error-section", ".ta-error-section .ta-thumb img")
	imageMoving(".ta-ebook-footer", ".ta-ebook-footer .ta-shape img")
	imageMoving(".ta-faq-section-ebook", ".ta-faq-section-ebook .ta-shape img")
	imageMoving(".ta-abt-author-section", ".ta-abt-author-section .ta-shape img")
	imageMoving(".ta-ebook2-faq-section", ".ta-ebook2-faq-section .ta-shape img")
	imageMoving(".ta-about-section-ebook2", ".ta-about-section-ebook2 .ta-thumb img")
	imageMoving(".ta-abt-author-ebook2", ".ta-abt-author-ebook2 .ta-shape img")
	imageMoving(".ta-ebook-hero-section ", ".ta-ebook-hero-section .ta-shape img")
	imageMoving(".ta-da-feature-section ", ".ta-da-feature-section .ta-shape img")
	imageMoving(".ta-da-hero-section ", ".ta-da-hero-section .ta-cloud img")
	imageMoving(".ta-ico-hero-section ", ".ta-ico-hero-section .ta-shape img")
	imageMoving(".ta-brand-section-ico", ".ta-brand-section-ico .ta-shape img")
	imageMoving(".ta-brand-section-ico", ".ta-brand-section-ico .ta-brand-item")
	imageMoving(".ta-app-feature-section", ".ta-app-feature-section .ta-shape img")
	imageMoving(".ta-app-hero-section", ".ta-app-hero-section .left-shape img")
	imageMoving(".ta-socialInfo-section", ".ta-socialInfo-section .left-shape img")
	imageMoving(".ta-pricing-section", ".ta-pricing-section .left-shape img")
	imageMoving(".ta-testimonial-section", ".ta-testimonial-section .ta-shape img")
	imageMoving(".ta-nft-hero-section", ".nft-cards .ta-item")

  // Image Moving with Cursor Function
  function imageMoving(wrapper, image_list) {
    let container = document.querySelector(wrapper)
    try {
      if (container) {
        container.addEventListener("mousemove", (e) => {

          var x = e.clientX
          var y = e.clientY
          let viewportWidth = window.innerWidth;
          let viewportHeight = window.innerHeight;
          let center = viewportWidth / 2
          let centerHeight = innerHeight / 2

          if (x > center) {
            gsap.to(image_list, {
              x: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              x: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
          if (y > centerHeight) {
            gsap.to(image_list, {
              y: 15,
              duration: 5,
              ease: "power4.out"
            })
          }
          else {
            gsap.to(image_list, {
              y: -15,
              duration: 5,
              ease: "power4.out"
            })
          }
        });
      }
    }
    catch (err) {
      console.log(err)
    }
  }

	// parallax
	if ($(".scene").length > 0) {
		$(".scene").parallax({
			scalarX: -10.0,
			scalarY: -10.0,
		});
	}

	// mini cart active on clieck data-ta-miniCart-trigger
	if ($("[data-ta-miniCart-trigger]").length > 0) {
		$("[data-ta-miniCart-trigger]").on("click", function (e) {
			e.preventDefault();
			$("[data-ta-miniCart]").toggleClass("is-open");
		});
	}

	// activate nice select
	if ($("select").length > 0) {
		$("select").niceSelect();
	}

	// toggle calss on click .ta-input-field
	if ($(".ta-input-field").length > 0) {
		$(".ta-input-field").on("click", function (e) {
			e.preventDefault();
			$(this).toggleClass("is-active");
			$(".ta-input-field").not(this).removeClass("is-active");
		});
	}

	// cart page quantity
	function setupCartQuantity() {
		const quantityButtons = `
		  <div class="ta-qty-btn minus"><i class="far fa-minus"></i></div>
		  <div class="ta-qty-btn plus"><i class="far fa-plus"></i></div>
		`;

		$(".ta-input-plus-minus").append(quantityButtons);

		$(".ta-input-plus-minus").on(
			"click",
			".ta-qty-btn.plus, .ta-qty-btn.minus",
			function () {
				const quantityInput = $(this)
					.closest(".ta-input-plus-minus")
					.find(".qty");
				const currentValue = parseFloat(quantityInput.val());
				const max = parseFloat(quantityInput.attr("max")) || Infinity;
				const min = parseFloat(quantityInput.attr("min")) || 0;
				const step = parseFloat(quantityInput.attr("step")) || 1;

				console.log(currentValue, max, min, step);

				let newValue;
				if ($(this).is(".plus")) {
					newValue = max <= currentValue ? max : currentValue + step;
				} else {
					newValue = min >= currentValue ? 0 : currentValue - step;
				}

				quantityInput.val(newValue).trigger("change");
			}
		);
	}

	setupCartQuantity();

	// showcoupon toggle function
	if ($("#showcoupon").length > 0) {
		$("#showcoupon").on("click", function () {
			$("#checkout_coupon").slideToggle(500);
		});
	}

	if ($("#cbox").length > 0) {
		$("#cbox").on("click", function () {
			$("#cbox_info").slideToggle(500);
		});
	}

	// Create an account toggle function
	if ($("#ship-box").length > 0) {
		$("#ship-box").on("click", function () {
			$("#ship-box-info").slideToggle(500);
		});
	}

	// ajax contact form
	var form = $('#ta-contact-form');
	var formMessages = $('.ajax-response');

	$(form).submit(function(e) {
		e.preventDefault();
		var formData = $(form).serialize();
		$.ajax({
			type: 'POST',
			url: $(form).attr('action'),
			data: formData
		})
		.done(function(response) {
			$(formMessages).removeClass('error');
			$(formMessages).addClass('success');
			$(formMessages).text(response);
			$('#ta-contact-form input,#ta-contact-form textarea').val('');
		})
		.fail(function(data) {
			$(formMessages).removeClass('success');
			$(formMessages).addClass('error');

			if (data.responseText !== '') {
				$(formMessages).text(data.responseText);
			} else {
				$(formMessages).text('Oops! An error occured and your message could not be sent.');
			}
		});
	});


	// Active wow js
	new WOW().init();

	gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax);
	gsap.config({
		nullTargetWarn: false,
	});

	let splitTitleLines_2 = gsap.utils.toArray(".headline-title");
	splitTitleLines_2.forEach((splitTextLine) => {
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: splitTextLine,
				start: "top 90%",
				end: "bottom 60%",
				scrub: false,
				markers: false,
				toggleActions: "play none none none",
			},
		});
		const itemSplitted = new SplitText(splitTextLine, {
			type: "words, lines",
		});
		gsap.set(splitTextLine, { perspective: 400 });
		itemSplitted.split({ type: "lines" });
		tl.from(itemSplitted.lines, {
			duration: 1,
			delay: 0.3,
			opacity: 0,
			rotationX: -80,
			force3D: true,
			transformOrigin: "top center -50",
			stagger: 0.1,
		});
	});

	var st = $(".ta-split-text");
		if (st.length == 0) return;
		gsap.registerPlugin(SplitText);
		st.each(function (index, el) {
			el.split = new SplitText(el, {
				type: "lines,words,chars",
				linesClass: "split-line",
			});
			gsap.set(el, { perspective: 400 });

			if ($(el).hasClass("split-in-fade")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					ease: "Back.easeOut",
				});
			}
			if ($(el).hasClass("split-in-right")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "50",
					ease: "Back.easeOut",
				});
			}
			if ($(el).hasClass("split-in-left")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					x: "-50",
					ease: "circ.out",
				});
			}
			if ($(el).hasClass("split-in-up")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					y: "80",
					ease: "circ.out",
				});
			}
			if ($(el).hasClass("split-in-down")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					y: "-80",
					ease: "circ.out",
				});
			}
			if ($(el).hasClass("split-in-rotate")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					rotateX: "50deg",
					ease: "circ.out",
				});
			}
			if ($(el).hasClass("split-in-scale")) {
				gsap.set(el.split.chars, {
					opacity: 0,
					scale: "0.5",
					ease: "circ.out",
				});
			}
			el.anim = gsap.to(el.split.chars, {
				scrollTrigger: {
					trigger: el,
					// toggleActions: "restart pause resume reverse",
					start: "top 90%",
				},
				x: "0",
				y: "0",
				rotateX: "0",
				scale: 1,
				opacity: 1,
				duration: 0.8,
				stagger: 0.02,
			});
		});
})(jQuery);
