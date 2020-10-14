



/* var cardContainer = document.getElementById("card");
var titleContainer = document.getElementById("title-info");
var ratingContainer = document.getElementById("rating-info");
var servingContainer = document.getElementById("serving-info");
var prepTimeContainer = document.getElementById("prepTime-info");
var cookingTimeContainer = document.getElementById("cookingTime-info");
var skillLevelContainer = document.getElementById("skillLevel-info");
var sourceContainer = document.getElementById("source-info");
var ingredientsContainer = document.getElementById("ingredients-info");
var prepMethodsContainer = document.getElementById("prepMethods-info");

var testBtn = document.getElementById("testBtn");


var searchBtn = document.getElementById("searchBtn");*/
let randomBtn = document.getElementById("randomBtn"); 

randomBtn.addEventListener("click", loadJSON);




  // parse the dataset into a js object
  function loadJSON() {
    let dataUrlString = "https://raw.githubusercontent.com/elalimardani/dump/main/bbc_food.json";
    let http_request = new XMLHttpRequest();
    try{
       // Opera 8.0+, Firefox, Chrome, Safari
       http_request = new XMLHttpRequest();
    }catch (e) {
             // Something went wrong
             alert("Your browser broke!");
             return false;
          }
    http_request.onreadystatechange = function() {

       if (http_request.readyState == 4  ) {
          
          let ourObjData = JSON.parse(http_request.responseText); 
          let index = Math.floor((Math.random() * 12959) + 1);


          document.getElementById('card').style.display='block';

          document.getElementById("title-info").innerHTML = ourObjData[index].title;
          document.getElementById("rating-info").innerHTML = ourObjData[index].total_ratings;
          document.getElementById("serving-info").innerHTML = ourObjData[index].serving;
          document.getElementById("prepTime-info").innerHTML = ourObjData[index].prep_time;
          document.getElementById("cookingTime-info").innerHTML = ourObjData[index].cooking_time;
          document.getElementById("skillLevel-info").innerHTML = ourObjData[index].skill_level;
          document.getElementById("source-info").innerHTML = ourObjData[index].source;

          for(var i=0; i<ourObjData[index].ingredients.length; i++){
            document.getElementById("ingredients-info").insertAdjacentHTML("beforeend", "<li>" + ourObjData[index].ingredients[i] + "</li>" );
          }

          for(var i=0; i<ourObjData[index].prep_methods.length; i++){
            document.getElementById("prepMethods-info").insertAdjacentHTML("beforeend", "<li>" + ourObjData[index].prep_methods[i] + "</li>" );
          }

       }
    }
    http_request.open("GET", dataUrlString, true);
    http_request.send();
 }
 
   

 




  
  







//////////////////////////////////////////////////////////////////////////
//////////Button Generators//////////

//randomBtn onClick
/* randomBtn.addEventListener("click", function(){  
    
    
}); */




//renderHTML
 /* function renderHTML(ourObjData){
  var titleString = "";
  var ratingString = "";
  var servingString = "";
  var prepTimeString = "";
  var cookTimeString ="";
  var skillLevelString = "";
  var sourceString = "";
  var ingredientsString = "";
  var prepMethodsString = "";
  document.getElementById('card').style.display='block';
    titleString += "Title: " + ourObjData[0].title;
    servingString +=   "Serving: " + ourObjData[0].serving;
    ratingString +=  "Rating: " + ourObjData[0].total_ratings;
    prepTimeString +=  "Prep Time: " + ourObjData[0].prep_time;
    cookTimeString +=  "Cooking Time: " + ourObjData[0].cooking_time;
    skillLevelString +=  "Skill Level: " + ourObjData[0].skill_level;
    sourceString += ourObjData[0].source;

    for(var i=0; i<ourObjData[0].ingredients.length; i++){
      ingredientsString += "<li>" + ourObjData[0].ingredients[i] + "</li>";
    }

    for(var i=0; i<ourObjData[0].prep_methods.length; i++){
      prepMethodsString += "<li>" + ourObjData[0].prep_methods[i] + "</li>";
    }

    titleContainer.insertAdjacentHTML('beforeend', titleString);
    ratingContainer.insertAdjacentHTML('beforeend',ratingString);
    servingContainer.insertAdjacentHTML('beforeend',servingString);
    prepTimeContainer.insertAdjacentHTML('beforeend', prepTimeString);
    cookingTimeContainer.insertAdjacentHTML('beforeend', cookTimeString);
    skillLevelContainer.insertAdjacentHTML('beforeend', skillLevelString);
    sourceContainer.insertAdjacentHTML('beforeend', sourceString);
    ingredientsContainer.insertAdjacentHTML('beforeend', ingredientsString);
    prepMethodsContainer.insertAdjacentHTML('beforeend', prepMethodsString); 
}
*/
 

//function to hide the card element
/* function hideCard(){
  card.classList.add("hide-me");
} */