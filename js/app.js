$(document).ready(function() {
	var numberAlert = function(number) {
		if (isNaN(number)||number % 1 !== 0) {
			alert("Please enter a non-decimal number (e.g. \"42\")");
		}
	};

	var fizzBuzz = function(userNumber) {
		var i = 1;
		while(i <= userNumber) {
			if (i%3===0&&i%5===0) {
				$("body").append("<br>fizzbuzz");
			}

			else if (i%3===0) {
			$("body").append("<br>fizz");
			}

			else if (i%5===0) {
				$("body").append("<br>buzz");
			}

			else {
				$("body").append("<br>" + i);
			}
			i++;
		}
	};
	$('input:text').keyup(function(event){
        if(event.keyCode == 13) {

            /*get user input*/
            var userNumber = +$(this).val();

            numberAlert(userNumber);

            /*run FizzBuzz*/
            fizzBuzz(userNumber);

            /*delete contents of text box after user hits enter*/
            $(this).val('');
        }
   	});
   	$('input:submit').click(function() {

        /*get user input*/
        var userNumber = +$(this).siblings('input:text').val();

        numberAlert(userNumber);

        /*run FizzBuzz*/
        fizzBuzz(userNumber);

        /*delete contents of text box after user clicks 'add'*/
        $(this).siblings('input:text').val('');
    });
});