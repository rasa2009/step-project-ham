// TAB

const tabsTitle = document.querySelectorAll(".tab-head li");
for (let i=0; i<tabsTitle.length; i++) {
	tabsTitle[i].addEventListener('click', function() {

		const parentUl = this.closest(".tab-head");
		for (let i=0; i < parentUl.children.length; i++) {
			parentUl.children[i].classList.remove("active");
		}

		this.classList.add("active");

		const tabsContent = document.querySelectorAll(".tab-container .tab-item");
		for (let i=0; i<tabsContent.length; i++) {
			tabsContent[i].classList.remove("active");
		}

		const tabId = this.dataset.target;
//                const tabId = this.getAttribute("data-target");
console.log(tabId);

const tab = document.getElementById(tabId);
tab.classList.add("active");
});
}


// WORK JS

const filterCategory = document.querySelectorAll(".work_nav .btn");
for (let i=0; i < filterCategory.length; i++){
	filterCategory[i].addEventListener("click", function() {
		const parent = this.parentElement;
		for (let i=0; i < parent.children.length; i++){
			parent.children[i].classList.remove("active");
		}

		this.classList.add("active");

		const images = document.getElementsByClassName("item");
		for (let i=0; i < images.length; i++){
			images[i].style.display = "none";
		}

		const selector = this.dataset.filter;


		const showImages = document.querySelectorAll(`${selector}.item`);
//                    const showImages = document.querySelectorAll(`.selfie.item`);

for (let i=0; i < showImages.length; i++){
	showImages[i].style.display = "flex";
}
});
}


// WORK JQ

$(function () {
	$(".item").slice(0, 12).show();
	$("#loadMore").on('click', function (e) {
		e.preventDefault();
		$(".item:hidden").slice(0, 12).slideDown();
		if ($(".item:hidden").length == 0) {
			$("#load").fadeOut('slow');
		}

	});
});
// SLICK-SLIDER

$('.slider-single').slick({
	slidesToShow: 1,
	slidesToScroll: 1,
	arrows: true,
	fade: false,
	adaptiveHeight: true,
	infinite: true,
	useTransform: true,
	speed: 400,
	dots: false,
	cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
});

$('.slider-nav')
.on('init', function(event, slick) {
	$('.slider-nav .slick-slide.slick-current').addClass('is-active');
})
.slick({
	slidesToShow: 4,
	slidesToScroll: 4,
	dots: false,
	focusOnSelect: false,
	infinite: true,
	arrows: false,

});

$('.slider-single').on('afterChange', function(event, slick, currentSlide) {
	$('.slider-nav').slick('slickGoTo', currentSlide);
	var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
	$('.slider-nav .slick-slide.is-active').removeClass('is-active');
	$(currrentNavSlideElem).addClass('is-active');
});

$('.slider-nav').on('click', '.slick-slide', function(event) {
	event.preventDefault();
	var goToSingleSlide = $(this).data('slick-index');

	$('.slider-single').slick('slickGoTo', goToSingleSlide);
});

