class TrashBin{
    constructor(x,y,width,height) {
        var options = {
            'restitution':0.8,
            'friction':1.3,
            'density':1.0
        }
        this.bin = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    
    World.add(world, this.bin);
  }
  display(){
    var pos = this.bin.position;
    var angle = this.bin.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    strokeWeight(3);
    stroke("blue")
    fill("lightblue");
    rect(0, 0, this.width, this.height);
    pop();
  }
};
  