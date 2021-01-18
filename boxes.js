class Box{
    constructor(x,y,width,height){
        var options = {
          'isStatic':true,
            'restitution':0,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image=loadImage("dustbingreen2.png")
        
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        strokeWeight(6);
        stroke("gold");
         fill("gold");
        image(this.image, 0,0,200,200);
      
        pop();
      }
};