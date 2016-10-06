//#Week 6 JQuery Code Challenge

//Objects

var boxy = {
    height : 0,
    width : 0,
    area : function(h = this.height, w = this.width) {
        return h*w;
    }
};

//function updateArea () {
//    boxy.area = boxy.height*boxy.width;
//}

areaIncrease : function() {
    this.height ++;
    this.width ++;
};

areaDecrease : function() {
    this.height --;
    this.width --;
};

heightIncrease : function() {
    this.height ++;
};

heightDecrease : function() {
    this.height --;
};

widthIncrease : function() {
    this.width ++;
};

widthDecrease : function() {
    this.width --;
};

$('#AreaIncrease').click.(function() {
    areaIncrease();
});

print : function() {
    var heightHtml = "Height: " + this.height;
    var widthHtml = "Width: " + this.width;
    var areaHtml = "Area: " this.area; 
};
		
//Code Challenge:
//Create an object named "Box" with 3 properties, height, width, volume.
//Create 2 buttons for Height. The first button decreases the Box Height by 1. The second button increases the Box Height by 1.
//Create a button that prints the object and its attributes to the page (use the span "output".
 
//Extra credit
//Create interactive buttons to decrease or increase the Width and Volume