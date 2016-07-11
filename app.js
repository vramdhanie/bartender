var Question = function(flavour, text){
    this.flavour = flavour;
    this.text = text;
}

var Ingredient = function(flavour, name, amount){
    this.flavour = flavour;
    this.name = name;
    this.amount = amount;
}

var Pantry = function(){
    this.ingredients = [];
}

Pantry.prototype.add = function(ingredient){
    this.ingredients.push(ingredient);
}

Pantry.prototype.getIngredient = function(name, amount){
    //code to remove amount of name ingredient
}


/**
 * In the client code
 */

var q1 = new Question("Sweet", "Do you like sweet?");
var ing = new Ingredient("Strong", "Rum", 20);
