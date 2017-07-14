//jQuery Multi-View Function

var createMultiView = function () {
	
	$('.multi-view-container').each(function() {

		var topContainer = $(this);

		topContainer.find('.tabs li').on('click', function() {
			
			var currentItem = $(this);
			var tabItem = topContainer.find('.tab-controls li');
			var index = tabItem.index(currentItem);	

			tabItem.removeClass('selected');
			tabItem.eq(index).addClass('selected');
			topContainer.find('.content').hide();
			topContainer.find('.content').eq(index).show();

		});

	topContainer.find('.tabs li:first-child').click();

	});
};

$(document).ready(createMultiView);

function changeNav(x) {

	var selectBody = document.querySelector('body');
	var sibling = document.getElementById('fullView');

	x.classList.toggle("change");
	selectBody.classList.toggle("show");
	sibling.classList.toggle("show");
}

$(document).ready(function(){
	$('.nav-item a').on('click', function(event) {
		if(this.hash !== "") {
			event.preventDefault();
			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 800, function(){
				window.location.hash = hash;
			});
		}
	});
});

if ($(window).width() < 650) {
	$('i.fa').html("");
}

	