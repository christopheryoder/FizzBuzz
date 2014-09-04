$(document).ready(function() {
	var i = 1;
	while(i <= 100) {
		if (i%3==0) {
			if (i%5==0) {
				$("body").append("fizzbuzz<br>")
			}
			else {
			$("body").append("fizz<br>");
			}
		}
		else if (i%5==0) {
			$("body").append("buzz<br>");
		}
		else {
			$("body").append(i + "<br>");
		};
		i++
	};
});