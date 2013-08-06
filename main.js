$(document).ready(function(){

	$('#submit').click(function(){

	  //get the inputs
	  var numberOfIterations = $('#numberOfIterations').val();
	      gridWidth          = $('#gridWidth').val();
	      gridHeight         = $('#gridHeight').val();

      //kick off the algorithm for the game


      //display the results
      $('.results').append(numberOfIterations + gridHeight + gridWidth);

      //figure out stdin/stdout compatibility so it can be tested!

	});


});