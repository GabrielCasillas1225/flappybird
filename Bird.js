class Bird {
    constructor(img, h) {
        this.x = 50;
        this.y = h / 2;
        this.size = 36;
        this.velocity = 0;
        this.gravity = 0.6;
        this.lift = -15;
        this.img = img;
    }
    
    up() {
        this.velocity += this.lift;
    }
    
    update() {
        this.velocity += this.gravity;
        this.y += this.velocity;
        
        if (this.y > height - this.size / 2) {
            this.y = height - this.size / 2;
            this.velocity = 0;
        }
        if (this.y < this.size / 2) {
            this.y = this.size / 2;
            this.velocity = 0;
        }
    }
    
    draw() {
        image(this.img, this.x - this.size / 2, this.y - this.size / 2, this.size, this.size);
    }
    
    
    hits(obstacle) {
        return (this.x + this.size / 2 > obstacle.x &&
                this.x - this.size / 2 < obstacle.x + obstacle.w &&
                this.y + this.size / 2 > obstacle.y &&
                this.y - this.size / 2 < obstacle.y + obstacle.h);
    }
}
