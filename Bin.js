class Bin {
    constructor(x, y, width, height,) {
        var options = {
            'isStatic': true,
            'visable': true,
        }
        //this.body = Bodies.rectangle(x, y, width, height, options);
        
       
        this.width = width;
        this.height = height;
        this.image = loadImage ("sprites/dustbin.png")
        this.image = (x, y, width, height, options);
       

        World.add(world, this.image, );
    }
    display() {
        push();
       // var pos = this.body.position;
       // rectMode(CENTER)
        fill("red");
       // rect(pos.x, pos.y, this.width, this.height);
       image(this.image,x,y,this.width,this.height );
        imageMode(CENTER);
        pop();
    }
};