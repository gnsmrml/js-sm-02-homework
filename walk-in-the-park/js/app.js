$(window).load(function(){
     $('#start-modal').modal('show');
 });
 $('#search-b').click(function() {
     $('#start-modal').modal('hide');
 });

 $('.saved-img').click(function() {
     $('#saved-image').modal('show');
 });


$(function() {
  // DOM is now ready
  _500px.init({
    sdk_key: 'bf05c91edfeb02edc0fbcf624ac08809aa0125c3'
  });

  var locations = $("#state-selected");
  $('#state').change(function() {

       var val = $(this).val();
       get500Photos(val);

  });

var addPhotosToScreen = function(response) {
  $('div.images').html('');
  response.data.photos.forEach(function(photo, index) {

    console.log(photo);
    $('div.images').append('<img class="image" id"' + photo.id +'" src="' + photo.image_url + '">');
    // addBorder();
  });
}

  $('a#search-b').click(function() {
    _500px.login();
  });

  _500px.on('authorization_obtained', function() {
    //show photo container -> div.images
    $('div.images').show();
    $('div.park-images').show();
  });

   function get500Photos(geoQuery) {
    _500px.api('/photos/search', {geo:geoQuery, rpp:50, tag:'dog', image_size:'3', feature:'fresh_today' }, addPhotosToScreen);
  };

});
