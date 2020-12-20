class Ball {

    constructor (x,y,radius){
     var option = {
    isStatic: false,
    resitution: 1,
    density: 0.5,
    friction: 0
    }

    this.body = Bodies.circle(x,y,radius,option);

    World.add(world,this.body);

    this.y = y;
    this.x = x;
    this.radius = radius;

    }

    display() {
    push();
    translate(this.body.position.x,this.body.position.y);
    ellipseMode(RADIUS);
    ellipse(0,0,this.radius,this.radius);
    pop();
    
    }

    







}