$(function () {
	function Animation() {
		var maincover = $("#maincover"),
			maincoverNum = 0;
		document.getElementById("audio").play();
		const marvelInterval = setInterval(function () {
			maincoverNum = (maincoverNum % 20) + 1;
			maincover.css(
				"background-image",
				`url(images/img-${maincoverNum}.jpg)`
			);
		}, 100);

		setTimeout(function () {
			clearInterval(marvelInterval);
			setTimeout(function () {
				window.location.reload(1);
			}, 2000);
		}, 12000);
	}

	function startscreen() {
		$("#loader img").fadeOut(100);
		$("#loading-text").html("▶<b>PLAY INTRO (turn ON sound)</b>").addClass("cursor");
		$("#loading-text").on("click", function () {
			$("#loader").fadeOut(100);
			Animation();
		});
	}

	$("#hidden-images").imagesLoaded({
		background: true
	}, function () {
		setTimeout(function () {
			var audio = document.getElementById("audio");
			audio.oncanplay = function () {
				startscreen();
			};

			if (audio.readyState > 3) {
				startscreen();
			}
		}, 1000);
	});
});