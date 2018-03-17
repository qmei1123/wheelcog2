function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() { 
    background(209,239,252);
    //line following mouse
        line(mouseX, mouseY, mouseX*20, mouseY*60);

    
    for (i = 0; i < width; i+=400) {
        for (j = 0; j < height; j+=400) {
    
    //custome shape
    beginShape();
    fill(255,109,109);
    strokeWeight(5);
    stroke(255,109,109);

    let vertices = map(mouseX, 0, width, i, j);

    for(let a = 0; a < 360; a += vertices) {
        let x = 150 * sin(a) + 180;
        let y = 150 * cos(a) + 180;
        vertex (x, y);
    }
    endShape(CLOSE);
        }
    }
}