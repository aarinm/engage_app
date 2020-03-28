exports.getCooking = function(subacts){
  var cookarray = [];
  var i = 0;
  while (i < subacts.Size){
    var cookObj = subacts.ObjectAct(i);
    var cookActName = cookObj.StringOf("name");
    var cookString = createString(cookActName);
    artarray.push(artString);
    i = i+1;
  }
  return cookarray;
}

exports.getRandom(){
  array = ['baking', 'drinks', 'grilling', 'cooking', 'meats', 'vegetarian'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  var rand = createString(randomElement);
  return rand;  
}

createString = function(subactname){
  var cookstring;
  if (subactname === 'baking'){
    cookstring = "Fire up the oven with these baking recipes: ";
    cookstring += baking();
  }
  else if (subactname === 'drinks'){
    cookstring = "Quench your thirst with these drink ideas: ";
    cookstring += drinks();  
  }
  else if (subactname === 'grilling'){
    cookstring = "Here's some fun grilling recipes! ";
    cookstring += grilling();
  }
  else if (subactname === 'cooking'){
    cookstring = "Learn how to cook with these recipes: ";
    cookstring += cooking();
  }
  else if (subactname === 'meats'){
    cookstring = "Whip up some hearty dishes with these meat recipes: ";
    cookstring += meats();
  }
  else{
    cookstring = "Dress up your veggies with these vegetarian dishes: ";
    cookstring += vegetarian();
  }
}

baking = function(){
  array = ['https://www.tasteofhome.com/collection/baking-ideas-for-when-youre-bored/', 'https://www.foodnetwork.com/topics/baking', 'https://www.olivemagazine.com/guides/best-ever/best-ever-quick-and-easy-baking-recipes-ready-in-under-an-hour/'];
  const randomElement = array[Math.floor(Math.random() * array.length)]; 
  return randomElement;
}

drinks = function(){
  array = ['https://www.delish.com/content/cocktail-recipes/', 'https://www.allrecipes.com/recipes/77/drinks/', 'https://www.tablespoon.com/meals/drinks/non-alcoholic-party-drinks-everyone-will-love'];
  const randomElement = array[Math.floor(Math.random() * array.length)];  
  return randomElement;
}

grilling = function(){
  array = ['https://www.delish.com/cooking/recipe-ideas/g3429/weeknight-dinners-on-the-grill/', 'https://www.bonappetit.com/recipes/slideshow/60-favorite-grilling-recipes-almost-everything', 'https://www.tasteofhome.com/collection/grilling-ideas-for-dinner/'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement; 
}

cooking = function(){
  array = ['https://www.countryliving.com/food-drinks/g648/quick-easy-dinner-recipes/', 'https://www.foodnetwork.com/recipes/photos/50-quick-snack-recipes', 'https://www.jessicagavin.com/how-to/cooking-101/', 'https://www.bonappetit.com/gallery/cooking-at-home-coronavirus'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement;  
}

meats = function(){
  array = ['https://www.allrecipes.com/recipes/92/meat-and-poultry/', 'https://www.bonappetit.com/recipes/slideshow/quick-meat-recipes', 'https://www.delish.com/cooking/nutrition/g3209/healthy-high-protein/', 'https://www.foodnetwork.com/topics/meat'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement; 
}

vegetarian = function(){
  array = ['https://www.allrecipes.com/recipes/87/everyday-cooking/vegetarian/', 'https://www.cookinglight.com/food/vegetarian/simple-vegetarian-recipes', 'https://www.bonappetit.com/recipes/vegetarian/slideshow/easy-vegetarian-dinner-recipes', 'https://tasty.co/topic/best-vegetarian'];
  const randomElement = array[Math.floor(Math.random() * array.length)];
  return randomElement; 
}
