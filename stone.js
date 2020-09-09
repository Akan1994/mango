class Stone{
constructor(x , y ,  r)
{
    var options={
        mass:20,
        friction:1,
        restitution:2,
        density:0.05
    }
    
    this.image = loadImage("stone.png");
    this.body = Bodies.circle(x , y , r , options);
    this.r=r;

    World.add(world,this.body);
}
display()
{
    var pos = this.body.position;
    push()
    translate(pos.x, pos.y);
		rotate(this.body.angle)
	
		imageMode(CENTER);
		
		image(this.image, 0,0);
		pop()
}
}