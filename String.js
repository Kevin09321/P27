class String {
    constructor(bodyA,pointB){
    var  options = {
        bodyA: bodyA,
        pointB: pointB,
        //bodyB: bodyB,
        length: 250,
        stiffness: 0.5
    }
    this.string = Matter.Constraint.create(options);

    World.add(world,this.string)
    this.pointB = pointB;
    } 

    display(){
        
    var pointA = this.string.bodyA.position;
    var pointB = this.pointB;
    
    strokeWeight(5);
    stroke(255);
    fill(255);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    

    }
    
}

