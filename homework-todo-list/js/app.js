$(document).ready(function(){

	$.ajax({

		url: 'http://www.kameronzach.com/todo/api/',
		method: 'get',
		data: {action: 'displayList', list_id: 42, token: '58097cc238ca0'},
		dataType: 'json',
		success: function(data){

			$(data.items).each(function(index, value) {
				console.log(value);
					addItem(value.text, value.id);
			});
		}

	});

	function addItem(text, itemId){

		// 3. Make sure input isn't empty INPUT != ''
		if( text == '' ){

			alert('Yo, we need an item...');
			return;

		}

		var listItemHTML = $('script#listHtml').html();
		var listItemTemplate = Handlebars.compile(listItemHTML);

		var itemData = { listItem: text, deleteText: 'Remove', listItemID: itemId };
		var newHTML = listItemTemplate( itemData );

		$('ul#list').append( newHTML );

		//input.val('');
		//input.focus();

		// 4. Append item to list

	}

	$('#composer').submit(function(e){

		e.preventDefault();

		var input = $('input#new-thing');
		var inputValue = input.val();

		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {action: 'newItem', list_id: 42, token: '58097cc238ca0', text: inputValue},
			dataType: 'json',
			success: function(data){

				console.log(data);
				addItem(inputValue, data.item_id);

			}

		});

	});

	$('#list').on('change', 'input[type=checkbox]', function(){

		if( $(this).parent().hasClass('done') ){
			$(this).parent().removeClass('done');
		}else{
			$(this).parent().addClass('done');
		}

	});

	// $('body').on('click', 'a.deleteItem', function(event){
	$('#list').on('click', 'a.deleteItem', function(event){

		event.preventDefault();

		var itemId = $(this).parents('li').data('item-id');
		var list = $(this);

		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {action: 'deleteItem', list_id: 42, token: '58097cc238ca0', item_id: itemId},
			dataType: 'json',
			success: function(data){

				list.parents('li').slideUp(900, function(){

					list.remove();

				});

			},
			error: function() {
				alert('something went wrong');
			}

		});

		// $(this).parents('li').remove();


	});


	$('input[type=checkbox]').click(function(){

	// 	// check if parent HAS CLASS
	// 	// use item PROP
	// 	// .is


		if( $(this).parent().hasClass('done') ){
			$(this).parent().removeClass('done');
		}else{
			$(this).parent().addClass('done');
		}

	// 	// if( $(this).prop('checked') == true ){
	// 	// 	$(this).parent().removeClass('done');
	// 	// }else{
	// 	// 	$(this).parent().addClass('done');
	// 	// }

	// 	// if( $(this).is(':checked') ){
	// 	// 	$(this).parent().removeClass('done');
	// 	// }else{
	// 	// 	$(this).parent().addClass('done');
	// 	// }

	});

	$('h1').click(function changeTitle() {
		var title = prompt("What is the name of your list?", "");


		$.ajax({

			url: 'http://www.kameronzach.com/todo/api/',
			method: 'post',
			data: {action: 'title', list_id: 42, token: '58097cc238ca0', text: title},
			dataType: 'json',
			success: function(data){

				console.log(data);
				 addItem(title);

				        document.getElementById("title").innerHTML = title;


			}

		});
});

	// $('.fa-pencil').click(addItem);


});
