$(document).ready(function () {
	let vh = window.innerHeight;
	let vw = window.innerWidth;
	console.log(vh);

	$(".parallax").each(function (i, el) {
		let number_vh = Math.floor(Math.random() * (vh - 240)) + 120;
		let number_vw = Math.floor(Math.random() * (vw - 240)) + 120;
		let layer = parseInt($(el).data('layer'));
		$(el).css({
			"bottom": number_vh + "px",
			"left": number_vw + "px",
			"z-index": layer
		});
	});
	$(function () {
		$(window).on('mousemove', function (e) {
			var offsetX = 0.5 - e.pageX / vw;
			var offsetY = 0.5 - e.pageY / vh;

			$(".parallax").each(function (i, el) {
				var offset = parseInt($(el).data('offset'));
				var translate = "translate3d(" + Math.round(offsetX * offset) + "px," + Math.round(offsetY * offset) + "px, 0px)";
				$(el).css({
					'-webkit-transform': translate,
					'transform': translate,
					'moz-transform': translate
				});
			});
		});
	});
});
