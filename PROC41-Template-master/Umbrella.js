class Umbrella(){
    constructor(x, y){

        this.body = Circle(x, y, width, height, r);
        this.width = width;
        this.height = height;
        this.r = radius;
    }
    umbrellaBoy.loadImg("walking_1.png");

    for (var i = 0; i < maxDrops; i++) {
        drops.push(new createDrop(random(0, 400), random(0, 400)));
    }
}
function display() {
    umbrella.display();
}