class Obstacle {
    constructor(x, y, w, h) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.speed = 2;
    }
    
    update() {
        this.x -= this.speed;
    }
    
    draw() {
        fill(0, 255, 0); // Color verde
        rect(this.x, this.y, this.w, this.h);
    }
}