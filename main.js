$(document).ready(function(){

  var thisGrid = [];

  $('#addAnotherLine').click(function(){
    event.preventDefault();

    if(thisGrid.length > 0){
      thisGrid.push($(".gridValues" + (thisGrid.length + 1)).val().split(" "));
    } else {
      thisGrid.push($(".gridValues").val().split(" "));
    }

    $('.lines').append("<input type='text' class='gridValues" + (thisGrid.length + 1) + "' placeholder='line values, separated by spaces'><br>");

  });


  $('#submit').click(function(){
    //prevent the page from refreshing so the result remains visible
    event.preventDefault();

    //get the inputs
    var numberOfIterations = $('#numberOfIterations').val();
        gridWidth          = $('#gridWidth').val();
        gridHeight         = $('#gridHeight').val();
        gridValues         = thisGrid; //TODO: refactor to accept lines when making compatible with stdin/stdout

    //kick off the algorithm for the game
    var results = runGame(numberOfIterations, gridHeight, gridWidth, gridValues);

    //display the results
    displayGame(results);

    //figure out stdin/stdout compatibility so it can be tested!

  });

  var runGame = function(n, h, w, v){
    var crazyGrid = [];
        resultGrid = thisGrid;

    //create a crazyGrid that keeps the values of the surrounding spaces easily.
    //the idea I have going is that, to wrap around the grid, I can surround the
    //working grid with 8 copies of itself. ie:

    //// 1 1 1  1 1 1  1 1 1
    //// 0 0 0  0 0 0  0 0 0
    //// 1 1 1  1 1 1  1 1 1

    //// 1 1 1  1 1 1  1 1 1
    //// 0 0 0  0 0 0  0 0 0
    //// 1 1 1  1 1 1  1 1 1

    //// 1 1 1  1 1 1  1 1 1
    //// 0 0 0  0 0 0  0 0 0
    //// 1 1 1  1 1 1  1 1 1
    
    //where the center grid is the original. but I don't need to create all those 
    //grids, just the outer edges. so here is how I'll do that:

    //generate a new crazyGrid each time the board changes, so the neighbor lookup
    //works correctly. TODO: this is expensive to keep passing over. think of better way.

    //do this n times
    for(var i = 0; i <= n; i++){
      crazyGrid = getThisIterationCrazyGrid(resultGrid, h, w);

      //iterate through the grid:
        //for var j (this row)
        for(var j= 0; j <= h.length - 1; j++){

          //for var k (this index)
          for(var k=0; k <= w.length - 1; k++){

            //if this index's value is 0
            if(parseInt(resultGrid[i]) === 0){

              //get all its neighbor's values
                var neighbors = getNeighborValues(crazyGrid, resultGrid, resultGrid[j][k]);
                //if there are exactly 3 1's, turn this index into a 1

            } else if(parseInt(resultGrid[i]) === 1) {

            //if this index's value is 1
              //get all its neighbor's values
                var neighbors = getNeighborValues(crazyGrid, resultGrid, resultGrid[j][k]);
                //if there are 2 or 3 neighbors, stay a 1
                //else change to 0
            } else {
              return "error.";
            }

          }//k
        }//j

    }

    return resultGrid;
  };

  var getThisIterationCrazyGrid = function(rg, h, w){
    
    //to put the extra values around the original grid,
    //do some pushing. return the grid to the main function for
    //the game to proceed.

    h = h.length-1;
    w = w.length-1;

    //wip
    //lower right to upper left
    grid.push(rg[h][w]);
    //top row
    grid.push(rg[0]);
    //lower left to upper right
    grid.push(rg[h][0]);
    
    //middles and edges

    //upper right to lower left

    //upper left to lower right

    return grid;
  };


  var getNeighborValues = function(cgrid, grid, gridIndex){
    //make an array to hold all this index's neighbor 1's and 0's to send back to main function
    var neighborArray = [];

    //here, use the crazyGrid to find the neighbors more easily.

    //these are all pushed to the neighborArray and returned:
    return neighborArray;
  };

  var displayGame = function(r){
    $('.results').append("<div>" + r + "</div>");
  };


});