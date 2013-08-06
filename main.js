$(document).ready(function(){

  $('#submit').click(function(){
    //prevent the page from refreshing so the result remains visible
    event.preventDefault();

    //get the inputs
    var numberOfIterations = $('#numberOfIterations').val();
        gridWidth          = $('#gridWidth').val();
        gridHeight         = $('#gridHeight').val();
        gridValues         = $('#gridValues').val();

    //kick off the algorithm for the game
    var results = runGame(numberOfIterations, gridHeight, gridWidth);

    //display the results
    displayGame(results);

    //figure out stdin/stdout compatibility so it can be tested!

  });

  var runGame = function(n, h, w){
    var result = [];

    //algorithm here

    return result;
  };

  var displayGame = function(r){
    $('.results').append("<div>" + r + "</div>");
  };


});