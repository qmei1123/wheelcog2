function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    angleMode(DEGREES);
}

function draw() { 
    background(218,93,120);
    //line following mouse
    

    
    for (i = 0; i < width - 80; i+=100) {
        for (j = 0; j < height - 80; j+=100) {
//    line(mouseX/50 - 10 + i, mouseY/50 - 10 + j, mouseX/100 + 10 +i, mouseY/60 + 10 + j);
     //       line = map(mouseX, 0 width, i)
    //custome shape
            
    beginShape();
    fill(255,109,109);
    noStroke();

    let verticesTwo = map(mouseY, 0, height, 4, 100);

    for(let b = 0; b < 360; b += verticesTwo) {
        let x2 = 60 * cos(b) + 180;
        let y2 = 60 * sin(b) + 180;
        vertex (x2 + i - 80, y2 + j - 80);
    }
    endShape(CLOSE);
            
              beginShape();
    fill(218,93,120);
    noStroke();

    let vertices = map(mouseX, 0, width, 4, 100);

    for(let a = 0; a < 360; a += vertices) {
        let x = 30 * sin(a) + 180;
        let y = 30 * cos(a) + 180;
        vertex (x + i - 80, y + j - 80);
    }
    endShape(CLOSE);
        }
    }
}