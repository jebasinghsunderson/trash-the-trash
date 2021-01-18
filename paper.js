class Paper{
    constructor(x,y,radius){
        var options={
            'isStatic':false,
            'friction':1.0,
            'restiution':0,
            'density':1.2,

        }
  
     this.body=Bodies.circle(56, 614, 45,options);
     this.x=56;
     this.y=614;  
     this.radius=45;
     this.image=loadImage("paper.png")    
      World.add(world,this.body);

    }
    display(){ 
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        imageMode(RADIUS);
        //strokeWeight(4);
      //  stroke("green");
        fill("red");
        image(this.image,0,0, 45, 45);
        pop(); 
    }

};