class bob
{
	constructor(x,y,r)
	{
		var options={
			// its not still
			isStatic:false,
            // it will bounce
			restitution:1,
			// its will follow the force of friction(its actually 0 here)
			friction:0,
            // its having some density or in other words weight
			density:0.8
			
			}
		this.x=x;
		this.y=y;
		this.r=r
		
		// creating the circle shaped bob
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		// adding it to the world
		World.add(world, this.body);

	}
	display()
	{
			// defining its position
			var paperpos=this.body.position;
			push()
			translate(paperpos.x, paperpos.y);
			rectMode(CENTER)
			//strokeWeight(4);
			fill(255,0,255)
			//imageMode(CENTER);
			//image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
			pop()
			
	}

}

