class Floor {

    constructor (x,y,width,hight){
     var option = {
    isStatic: true
    
    }

    this.body = Bodies.rectangle(x,y,width,hight,option);

    World.add(world,this.body);

    this.y = y;
    this.x = x;
    this.width = width;
    this.hight = hight;
    }
    
    display() {
        push();
    translate(this.body.position.x,this.body.position.y);
fill('grey');
    rectMode(CENTER);
    rect(0,0,this.width,this.hight);
    pop();
    
    }}