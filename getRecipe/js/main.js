

let randomBtn = document.getElementById("randomBtn"); 

randomBtn.addEventListener("click", loadJSON);


  // parse the dataset into a js object
  function loadJSON() {
    let dataUrlString = "https://raw.githubusercontent.com/elalimardani/getRecipe/master/res/bbc_food.json";
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
 
   
