$(document).ready(function(){

	var streets = ['Main', 'Smith', 'Wall', '42nd', 'Astor', 'St. Marks', 'Broadway', 'Water', 'Park', '5th', 'Hollywood' ];
	var types = ['St', 'Ave', 'Way', 'Hwy', 'Place'];
	var states = ['NY', 'CA', 'TN', 'TX', 'MO'];
	var cities = ['New York', 'Boulder', 'Santa Monica', 'Los Angeles', 'St. Louis'];



	$('button#makeAddress').click(function(){

			var streetRndm = ( Math.floor(Math.random() * streets.length ) );
			var typeRndm = ( Math.floor(Math.random() * types.length ) );
			var stateRndm = ( Math.floor(Math.random() * states.length ) );
			var cityRndm = ( Math.floor(Math.random() * cities.length ) );

				// console.log(streetRndm);

				// console.log(streets[streetRndm]);
				$('span#streets').html(streets[streetRndm]);
				$('span#types').html(types[typeRndm]);
				$('span#states').html(states[stateRndm]);
				$('span#cities').html(cities[cityRndm]);

		// Math.floor((Math.random() * 10) + 1); will generate a random number between 1 - 10.

		// console.log( Math.floor(Math.random() * 10) + 1 );

		// $('address.destination').html( houseNumber + ' ' + streetName + ' ' + streetType + '<br/>' );
		// $('address.destination').append( city + ', ' + state + ' ' + zipcode );

	});

});
