class Polygon {
    constructor(x, y,radius) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.circle(x, y,radius, options);
      this.radius=radius;
      this.image=loadImage('polygon.png')

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
  
     //===updation in C24  - STROKEWEIGHT AND STROKE   
      
      image(this.image,0, 0, this.radius*2, this.radius*2);
      pop();
    }
  };
  