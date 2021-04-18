class Stone{
	constructor(x,y)
	{
    var options = {
      'density':12,
      'friction': 0.9,
      'restitution':0.8
    };
    
		this.x=x;
		this.y=y;
		this.width = 130;
      this.height = 40;
      this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
		World.add(world, this.body);

	}
	display()
	{
    var pos = this.body.position;
    //pos.x = mouseX;
    //pos.y = mouseY;
   var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
  rotate(angle);
    strokeWeight(1);
    stroke('black')
    fill('blue')
    rectMode(CENTER)
    rect(0,0, this.width, this.height);
    pop();
  };

}