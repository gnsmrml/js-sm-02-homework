$(document).ready(function(){

	$('input#makeLetter').click(function(){

		// var Adjective = $('input#adjective').val();
		 var texts = new Array();
		// var adjectives = new Array();
		// var company = '';

		 var friendsName = $('input#friendsName').val();
		 var lengthTime = $('input#lengthTime').val();
		 var nounpOne = $('input#nounpOne').val();
		 var nounpTwo = $('input#nounpTwo').val();
		 var nounpThree = $('input#nounpThree').val();
		 var nounpFour = $('input#nounpFour').val();
		 var nounpFive = $('input#nounpFive').val();
		 var occupation = $('input#occupation').val();
		 var occupation2 = $('input#occupationTwo').val();
		 var occupation3 = $('input#occupationThree').val();
		 var occupation4 = $('input#occupationFour').val();
		 var nounOne = $('input#nounOne').val();
		 var nounTwo = $('input#nounTwo').val();
		 var nounThree = $('input#nounThree').val();
		 var adjectives1 = $('input#adjectiveOne').val();
		 var adjectives2 = $('input#adjectiveTwo').val();
		 var adjectives3 = $('input#adjectiveThree').val();
		 var adjectives4 = $('input#adjectiveFour').val();
		 var adjectives5 = $('input#adjectiveFive').val();
		 var adjectives6 = $('input#adjectiveSix').val();
		 var adjectives7 = $('input#adjectiveSeven').val();
		 var adjectives8 = $('input#adjectiveEight').val();
		 var adjectives9 = $('input#adjectiveNine').val();
		 var verbEd = $('input#verbEd').val();
		 var verbEdTwo = $('input#verbEdTwo').val();
		 var verbIng = $('input#verbIng').val();
		 var adverb = $('input#adverb').val();
		 var adverb2 = $('input#adverb2').val();
		 var movieName = $('input#movieName').val();
		 var animalPlural = $('input#animalPlural').val();
		 var company = $('input#company').val();
		 var yourName = $('input#yourName').val();

		var nouns = new Array();

		texts[0] = 	'Dear ' + company + ':';

		texts[1] = friendsName + ' worked for me as my assistant for ' + lengthTime +'. I recommend her without ' + nounpOne + ' for the ' + occupation + ' program.';

		texts[2] = 'While working in ' + nounOne + ' production, I often relied on ' + friendsName + ' to put together ' + adjectives1 + ' presentations, for which she described and ' + verbEd + ' the artistic approach to the project, researching ' + nounpTwo + ' and photographic ' + adjectives2 + ' materials. Her creativity, resourcefulness and ability to see a project through really made these presentations ' + adjectives3 + ' and' + adjectives4;

		texts[3] = 'When we went into production on the feature film '+ movieName + ', ' + friendsName + ' was able to observe every ' + nounThree + ' of the process, ' + verbIng + ' in on meetings and working with ' + animalPlural + ' in all areas of the production from the moment the production was set in motion through the release of the film '+ lengthTime + ' later.';

		texts[4] = 'During this time, she was an ' + adjectives5 + ' ' + occupation2 + ', often serving as my liason to scattered ' + nounpThree + ' of the crew. She also coordinated projects involving ' + adjectives6 + ' people, and her ability to work ' + adverb + ' while guiding the project quickly and ' + adverb2 + ' was ' + adjectives7 + '. For example, when we suddenly needed to reconceive several action ' + nounpFour + ' that had already been storyboarded, ' + friendsName + ' quickly found a new storyboard ' + occupation3 + ' on location and worked with him, the stunt coordinator and the ' + occupation4 + ' thorugh several drafts to make sure the new' + nounpFive + ' worked, and then ' + verbEd + ' with crew ' + nounpThree + ' from all departments, making sure everyone was up-to-date on the changes that were relevant to them. She even ' + verbEdTwo + ' in to draw a few last-minute ' + adjectives8 + ' changes herself.';

		texts[5] = friendsName + '\'s sensitivity, ' + nounOne + ', energy and sense of ' + nounTwo + ' made working with her a/an ' + nounThree + '. I highly recommend her as a/an ' + adjectives9 + ' addition to the program.';

		texts[6] = 'Sincerely,';

		texts[7] = '' + yourName + '';

		$(texts).each(function(index, text){

			$('div.output').append('<p>' + text + '</p>');

		});

	});


});
