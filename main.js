$(document).ready(function(){

  $('#submit').click(function(){
    //prevent the page from refreshing so the result remains visible
    event.preventDefault();

    //get the inputs
    var numberOfIterations = $('#numberOfIterations').val();
        gridWidth          = $('#gridWidth').val();
        gridHeight         = $('#gridHeight').val();
        gridValues         = $('#gridValues').val(); //TODO: refactor to accept lines when making compatible with stdin/stdout

    //kick off the algorithm for the game
    var results = runGame(numberOfIterations, gridHeight, gridWidth, values);

    //display the results
    displayGame(results);

    //figure out stdin/stdout compatibility so it can be tested!

  });

  var runGame = function(n, h, w, v){
    var result = [];

    //do this n times
    for(var i = 0; i <= n; i++){

      //if this index's value is 0
        //get all its neighbor's values
          //if there are exactly 3 1's, turn this index into a 1



      //if this index's value is 1
        //get all its neighbor's values
          //if there are 2 or 3 neighbors, stay a 1
          //else change to 0

    }

    return result;
  };

  var displayGame = function(r){
    $('.results').append("<div>" + r + "</div>");
  };


});