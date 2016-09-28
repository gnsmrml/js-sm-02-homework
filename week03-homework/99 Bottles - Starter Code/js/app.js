$(document).ready(function(){
	// var bottles = 99;

	for (i = 99; i > 0; i--) {
		 $('div.bottles').append("<h2>" + i + " bottles of beer on the wall, " + i +
		 " bottles of beer. Take one down and pass it around, " + (i-1) + " bottles of beer on the wall." + "</h2><br>");
	}

	//99 bottles of beer on the wall, 99 bottles of beer.
	//Take one down and pass it around, 98 bottles of beer on the wall.

});
