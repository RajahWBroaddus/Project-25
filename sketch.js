var wall_1, wall_2, wall_3;
var ground, ball;
var pressed = false;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
    createCanvas(1000, 700);
    rectMode(CENTER);




    engine = Engine.create();
    world = engine.world;
    ball = new Ball(70, 630, 70);

    //red walls
    /* wall1 = rect(290, groundSprite.y - groundSprite.height / 2 - 50, 20, 100);
     wall1.shapeColor = "red";
     wall_1 = Bodies.rectangle(290, groundSprite.y - groundSprite.height / 2 - 50, 20, 100, { isStatic: true });
     World.add(world, wall_1);

     wall2 = rect(400, groundSprite.y + groundSprite.height / 2 - 10, 200, 20);
     wall2.shapeColor = "red";
     wall_2 = Bodies.rectangle(400, groundSprite.y - groundSprite.height / 2 - 10, 200, 20, { isStatic: true });
     World.add(world, wall_2);

     wall3 = rect(510, groundSprite.y - groundSprite.height / 2 - 50, 20, 100);
     wall3.shapeColor = "red";
     wall_3 = Bodies.rectangle(510, groundSprite.y - groundSprite.height / 2 - 50, 20, 100, { isStatic: true });
     World.add(world, wall_3);*/

    wall_1 = Bodies.rectangle(775, 530, 20, 250, { isStatic: true });


    World.add(world, wall_1);

    wall_2 = new Basket(860, 635, 150, 20, 100, 120);
    World.add(world, wall_2);

    wall_3 = Bodies.rectangle(945, 530, 20, 100, { isStatic: true });
    World.add(world, wall_3);


    //Create a Ground

    ground = Bodies.rectangle(width / 2, 650, width, 10, { isStatic: true });
    World.add(world, ground);


    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background(0);
    Engine.update(engine);

    /*packageSprite.debug = true;
    wall1.debug = true;
    wall2.debug = true;
    wall3.debug = true;*/

    keyPressed();

    /*stroke("red");
    fill("red")
    rect(775, 530, 20, 250);
    rect(860, 635, 150, 20);
    rect(945, 530, 20, 250);
*/
    stroke("brown");
    fill("brown");
    rect(width / 2, 650, width, 10);

    ball.display();
    wall_2.display();

}

function keyPressed() {
    if (keyCode === UP_ARROW && pressed === false) {
        Matter.Body.applyForce(ball.body, ball.body.position, { x: 600, y: -2400 });
        pressed = true;
    }
}