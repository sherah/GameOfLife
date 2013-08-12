$(document).ready(function(){

  var thisGrid = [];

  $('#addAnotherLine').click(function(){
    event.preventDefault();

    if(thisGrid.length > 0){
      thisGrid.push($(".gridValues" + (thisGrid.length + 1)).val());
    } else {
      thisGrid.push($(".gridValues").val());
    }
    console.log(thisGrid);

    $('.lines').append("<input type='text' class='gridValues" + (thisGrid.length + 1) + "' placeholder='line values, separated by spaces'><br>");

  });


  $('#submit').click(function(){
    //prevent the page from refreshing so the result remains visible
    event.preventDefault();

    //get the inputs
    var numberOfIterations = $('#numberOfIterations').val();
        gridWidth          = $('#gridWidth').val();
        gridHeight         = $('#gridHeight').val();
        //gridValues         =  //TODO: refactor to accept lines when making compatible with stdin/stdout

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

    //make the array a grid.
    //in the interest of time, I will pseudocode the rest!
    //get a two-dimensional array going. that array is constructed based on the
    //height and width specified in the input.

    //do this n times
    for(var i = 0; i <= n; i++){
      //iterate through the grid:
        //for var j (this row)
          //for var k (this index)
            //if this index's value is 0
            if(parseInt(resultGrid[i]) === 0){
              //get all its neighbor's values
                var neighbors = getNeighborValues(resultGrid, resultGrid[j][k]);
                //if there are exactly 3 1's, turn this index into a 1

            } else if(parseInt(resultGrid[i]) === 1) {

            //if this index's value is 1
              //get all its neighbor's values
                var neighbors = getNeighborValues(resultGrid, resultGrid[j][k]);
                //if there are 2 or 3 neighbors, stay a 1
                //else change to 0
            } else {
              return "error.";
            }

    }

    return resultGrid;
  };

  var getNeighborValues = function(grid, gridIndex){
    //make an array to hold all this index's neighbor 1's and 0's to send back to main function
    var neighborArray = [];

    //push the gridIndex's preceding value (gridIndex[j][k-1]) or, if that would be less than 0, get this row's last value.
    //push the gridIndex's preceding value (gridIndex[j][k+1]) or, if that would be greater than the width, get this row's first value.
    //push the gridIndex's preceding row/index value (gridIndex[j-1][k]), or if j-1 is less than 0, get the last row's k value.
    //push the gridIndex's preceding row/index value (gridIndex[j+1][k]), or if j+1 is greater than the length of the j arrays, get the first j row's k value.
    //get diagonals

    //these are all pushed to the neighborArray and returned:
    return neighborArray;
  };

  var displayGame = function(r){
    $('.results').append("<div>" + r + "</div>");
  };


});