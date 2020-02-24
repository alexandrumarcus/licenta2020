$(document).ready(function () {
	var comp = $("#hamburger");
	let menu = $("#menu-wrapper");
	let account = $("#account-wrapper");
	let form_links = $("#change li");
	let sign_in = $(".sign-in");
	let sign_up = $(".sign-up");
	if (comp != undefined) {
		attachedEvents();
	}

	function attachedEvents() {
		comp.click(function () {
			$(this).toggleClass("active");

			$(menu).toggleClass("active-menu");
			if ($(menu).hasClass("active-menu")) {
				animatedList();
			}
			$(account).toggleClass("active-account");
			form_links.click(function () {
				$('li').removeClass("active");
				$(this).addClass("active");
				if (sign_up.css('display') == 'none') {
					sign_up.show(500);
					sign_in.hide(500);
				}
				else {
					sign_up.hide(500);
					sign_in.show(500);
				}
			});
		});
	}

	function animatedList() {
		let delay = 500;
		$("ul > li").each(function () {
			$(this).hide().delay(delay).fadeIn(1000);
			delay += 100;
		})
	}

});