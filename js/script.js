function Phone (brand, price, color){
    this.brand = brand;
    this.price = price;
    this.color = color;
};
Phone.prototype.printInfo = function(){
    console.log("the phone brand is " + this.brand + ", color is " + this.color + ",and the price is... " + this.price + ".");
};
var Samsung = new Phone("Samsung Galaxy S6", "well, you still can't afford it", "deep blue"),
    iPhone = new Phone("iPhone6s","cheap","white"),
    OnePlus = new Phone("OnePlus One", "1000$","red");

Samsung.printInfo();