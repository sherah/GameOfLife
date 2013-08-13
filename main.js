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
        resultGrid = v;

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
    //for(var i = 0; i <= n; i++){
      crazyGrid = getThisIterationCrazyGrid(resultGrid, h, w);

      //iterate through the grid:
        //for var j (this row)
    //     for(var j= 0; j <= h.length - 1; j++){

    //       //for var k (this index)
    //       for(var k=0; k <= w.length - 1; k++){

    //         //if this index's value is 0
    //         if(parseInt(resultGrid[i]) === 0){

    //           //get all its neighbor's values
    //             var neighbors0 = getNeighborValues(crazyGrid, j, k);
    //             //if there are exactly 3 1's, turn this index into a 1
    //             if(neighbors0 === 3){
    //               resultGrid[j][k] = 1;
    //             }


    //         } else if(parseInt(resultGrid[i]) === 1) {

    //         //if this index's value is 1
    //           //get all its neighbor's values
    //             var neighbors1 = getNeighborValues(crazyGrid, j, k);
    //             //if there are 2 or 3 neighbors, stay a 1
    //             if(neighbors1 === 2 || neighbors1 === 3){
    //               resultGrid[j][k] = 1;
    //             } else {
    //               //else change to 0
    //               resultGrid[j][k] = 0;
    //             }
    //         } else {
    //           return "error.";
    //         }

    //       }//k
    //     }//j

    // }

    // return resultGrid;
  };

  var getThisIterationCrazyGrid = function(rg, h, w){
    //set up the new grid
    var grid = [];
    
    //to put the extra values around the original grid,
    //do some pushing. return the grid to the main function for
    //the game to proceed.

    h = h.length-1;
    w = w.length-1;

    //populate the first row:
      //lower right to upper left
      grid.push(rg[h][w]);
      //top row
      //fixing grid.concat(rg[h]);
      for(var x in rg[h]){
        grid.push(parseInt(x));
      }
      //lower left to upper right
      grid.push(rg[h][0]);

    //set up the number of remaining rows that will be needed
    for(var i=0; i<=h; i++){

      //middles and edges: last first, the original row, first last.
      grid[i+1].push(rg[i][w]);
      //fixing grid[i+1].concat(rg[i]);
      for(var y in rg[i]){
        grid[i+1].push(parseInt(y));
      }
      grid[i+1].push(rg[i][0]);
     
    }

    //finish the last row:
      //upper right to lower left
      grid[h].push(rg[0][w]);
      //bottom row
      //fixing grid[h].concat(rg[0]);
      for(var l in rg[0]){
        grid[h].push(parseInt(l));
      }
      //upper left to lower right
      grid[h].push(rg[0][0]);

    console.log("this is the grid: ", grid);
    return grid;
  };


  var getNeighborValues = function(cgrid, grid, row, column){
    //make an array to hold all this index's neighbor 1's and 0's to send back to main function
    var neighborCount = 0;
    var r = row+1;
    var c = column+1;

    //here, use the crazyGrid to find the neighbors more easily.
    //add all surrounding values together and return the result count for the game
    //to decide whether to make the square live or die.
    neighborCount += cgrid[r+1][c] + cgrid[r-1][c] + cgrid[r+1][c+1] + cgrid[r+1][c-1] + cgrid[r-1][c+1] + cgrid[r+1][c-1] + cgrid[r][c+1] + cgrid[r][c-1];

    return neighborCount;
  };

  var displayGame = function(r){
    $('.results').append("<div>" + r + "</div>");
  };


});