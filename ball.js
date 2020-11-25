class Ball{
    constructor(x, y,r) {
        var options = {
            
            'restitution':1,
            'friction':0,
            'frictionAir':0.00,
            'slop': 1,
            'intertia':Infinity
            
        }
        this.x = x;
        this.y = y;
        this.r = r;
        this.body = Bodies.circle(this.x,this.y,r/2,options);
        
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        stroke("white");
        fill("black")
        ellipse(0, 0,this.r);
        tint(0, 153, 204, 126);
        pop();
      }
}
