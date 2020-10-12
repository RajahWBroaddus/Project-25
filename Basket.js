class Basket {
    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.image = loadImage("trashcan.png");

        World.add(world, this.body);

    }

    display() {
        //image(this.image, this.body.position.x, this.body.position.y, 100, 150);
        imageMode(CENTER);
        image(this.image, this.body.position.x, this.body.position.y - 105, 210, 250);
    }
}