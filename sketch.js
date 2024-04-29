let sprite;
let bg;
const w = 431;
const h = 768;
let bird;
let birdImg;
let bgX = 0;
let bgX2 = w;
let obstacles = []; 

function preload() {
    sprite = loadImage('./img/flappybird.png');
}

function setup() {
    createCanvas(w, h);
    bg = sprite.get(0, 0, w, h);
    birdImg = sprite.get(432, 0, 51, 36);
    bird = new Bird(birdImg, height);
}

function draw() {
    background(220);
    image(bg, bgX--, 0);
    image(bg, bgX2--, 0);
    if (bgX <= -w) {
        bgX = w;
    }
    if (bgX2 <= -w) {
        bgX2 = w;
    }
    
    
    for (let obstacle of obstacles) {
        obstacle.update();
        obstacle.draw();
        if (bird.hits(obstacle)) {
            console.log("Game Over");
            noLoop(); 
        }
    }
    
    
    if (frameCount % 100 === 0) {
        let obstacleHeight = random(height / 2);
        let gap = 200; 
        let obstacle1 = new Obstacle(w, 0, 50, obstacleHeight);
        let obstacle2 = new Obstacle(w, obstacleHeight + gap, 50, height - (obstacleHeight + gap));
        obstacles.push(obstacle1);
        obstacles.push(obstacle2);
    }
    
    bird.update();
    bird.draw();
}

function keyPressed(){
    if(keyCode === 32){ 
        bird.up();
    }
}