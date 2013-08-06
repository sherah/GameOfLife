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
    var results = runGame(numberOfIterations, gridHeight, gridWidth, gridValues);

    //display the results
    displayGame(results);

    //figure out stdin/stdout compatibility so it can be tested!

  });

  var runGame = function(n, h, w, v){
    var resultGrid = [];
        resultArray = [];

    //split values into an array.
    resultArray.push(v.split(" "));

    //make the array a grid. TODO this is wrong
    resultGrid.push(resultArray.slice(0, w));
    for(var j = 0; j <= h; j++){
      var row = resultArray.slice( (j+w), (j+w+w) );
      resultGrid.push(row);
    }

    //do this n times
    for(var i = 0; i <= n; i++){
      //iterate through the grid:

        //if this index's value is 0
        if(parseInt(resultGrid[i]) === 0){
          //get all its neighbor's values
            getNeighborValues(i, resultGrid);
            //if there are exactly 3 1's, turn this index into a 1

        } else if(parseInt(resultGrid[i]) === 1) {

        //if this index's value is 1
          //get all its neighbor's values
            getNeighborValues(i, resultGrid);
            //if there are 2 or 3 neighbors, stay a 1
            //else change to 0
        } else {
          return "error.";
        }

    }

    return resultGrid;
  };

  var getNeighborValues = function(i, grid){
    //make an array to hold all this index's neighbor 1's and 0's to send back to main function
    var neighborArray = [];

    return neighborArray;
  };

  var displayGame = function(r){
    $('.results').append("<div>" + r + "</div>");
  };


});