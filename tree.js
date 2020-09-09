class Tree {
    constructor(x , y , width , height)
    {
        var options =
     {
          length:20,
          stiffness:0.004,
          mass:23
    }
    this.tree = Bodies.rectangle(x , y , width , height , options);
    this.image = loadImage("tree.png");
  }
  display()
  {
    var posX = this.tree.position.x;
    var posY = this.tree.position.y;
    imageMode(CENTER);
    
   image(this.image , posX , posY ,500,1000);

  }
}