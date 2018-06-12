// const addCat = function(name, food){
//   const name = createName();
//   const food = createFood();
//   // const img = createImg();
//   appendElements(name, food, img)
// }
//
//
// const createName = function(catName){
//   const name = document.createElement('li');
//   name.textContent = catName;
//   return name;
// }
//
// const createFood = function(catFood){
//   const food = document.createElement('li');
//   food.textContent = catFood;
//   return food;
// }
//
// const appendElements = function(catName, catFood){
//   createName.appendChild()
//
// }

// var app = function () {
//
//   const catToAdd = document.createElement('cat');
//   catToAdd.classList.add('newCat');
//   var nameInList = document.createElement('li');
//   nameInList.textContent = "New cat ";
//   var foodInList = document.createElement('li');
//   foodInList.textContent = "Some food";
//   var imgInList = document.createElement('li');
//   imgInList.textContent = "http://www.catster.com/wp-content/uploads/2015/06/garfield.jpg";
//   nameInList.appendChild(foodInList);
//   foodInList.appendChild(imgInList);
//   cat.appendChild(nameInList);
//   const thisIsWhereYouAddTheCat = document.querySelector('#cats')
//   thisIsWhereYouAddTheCat.appendChild(catToAdd);
// }
//
// window.onload = app;

// const quoteArticle = document.createElement('article');
// quoteArticle.classList.add('quote');
// const blockQuote = document.createElement('blockquote');
// blockQuote.textContent = "The perfect if the enemy of the good";
// const cite = document.createElement('cite');
// cite.textContent = " Callum";
// blockQuote.appendChild(cite);
// quoteArticle.appendChild(blockQuote);
// const quotes = document.querySelector('#quotes')
// quotes.appendChild(quoteArticle);


var app = function (){
  addCat('cat', "no food", "https://r.hswstatic.com/w_907/gif/tesla-cat.jpg")
}

var addCat = function(name, favFood, url){
    var image = createImage(url);
    var catName = createName(name);
    var catFood = createFood(favFood);
    appendAllElements(catName, catFood, image);
  }

  var createImage = function(url){
    var imageLi = document.createElement('li');
    // image.innerHTML = "<img width=500 src=\'' " + url + "'\' >";
    var imageTag = document.createElement('img');
    imageTag.width = '500';
    imageTag.src = url;
    imageLi.appendChild(imageTag);
    return imageLi;
  }

  var createName = function(name){
    var nameLi = document.createElement("li");
    nameLi.textContent = 'name: ' + name;
    return nameLi;
  }

  var createFood = function(food){
    var foodLi = document.createElement('li');
    foodLi.textContent = 'Favourite food: ' + food;
    return foodLi;
  }

  var appendAllElements = function(nameLi, foodLi, imageLi) {
    var catList = document.createElement('ul')
    catList.classList.add('cat');
    catList.appendChild(nameLi);
    catList.appendChild(foodLi);
    catList.appendChild(imageLi);
    var container = document.querySelector("#cats");
    container.appendChild(catList);
  }

window.onload = app;
