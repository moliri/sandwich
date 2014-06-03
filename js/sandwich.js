"use strict";

///////////////////////////////////////
// Please note that is site is SATIRICAL and in NO WAY means imply that reducing a woman to a sandwich maker is okay.
//////////////////////////////////////
/* Global variables and objects */

// Handling browser navigation
$(window).on("navigate", function (event, data) {
  var direction = data.state.direction;
  
  if (direction === 'back') {    
    if($.mobile.activePage.is('#recipeItem')){
        $('#recipes .recipeList').empty();
        populateRecipeList();
    }
  }
  
});

///////////////////////////////////////
/* start page events and functions */

/* starting script for intro page */
$(document).on('pageinit', '#intropage', function(){
});






