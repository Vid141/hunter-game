class Fruit{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		this.body=Bodies.circle(this.x, this.y, this.r, options)
		World.add(world, this.body);
	}

	display()
	{
		var fruitPos=this.body.position;	
		push()
		translate(fruitPos.x, fruitPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill(255,0,255)
		
		ellipseMode(CENTER);
		ellipse( 0,0,this.r*2, this.r*2)
		pop()
 }
}