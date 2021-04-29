class Hexa{
    constructor(x,y){
        var options={
            'restitution':0.4,
            'friction':1
        }
        this.body = Bodies.circle(x, y,20, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
    }
    display(){
        push();
        //translate(this.body.position.x, this.body.position.y);
        var pos=this.body.position;
       // rectMode(CENTER);
       ellipseMode(RADIUS)
       fill(rgb(240,128,128));
       ellipse(pos.x,pos.y, 20,20);
        
        pop();
    }
}