var canvas;
var fade;
var fadeAmount = 1
let clouds=[];
/*p5.js makes it interactive!!!*/

function setup() {
    canvas=createCanvas
    (windowWidth,windowHeight);
    canvas.position(0,0);
    canvas.style('z-index','-1');
    fade=0;
    for (let i = 0; i < 20; i++) { 
        let cloud = {
          x: random(width),
          y: random(50, height - 100),
          speed: random(1, 2)
        };
        clouds.push(cloud);
      }     
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(120, 143, 194);
      // draw and move the clouds
    for (let i = 0; i < clouds.length; i++) {
    let cloud = clouds[i];
    
    // move the cloud to the right
    cloud.x += cloud.speed;
    
    // draw a cloud
    fill(255);
    noStroke();
    ellipse(cloud.x, cloud.y, 50, 30);
    ellipse(cloud.x + 20, cloud.y, 60, 40);
    ellipse(cloud.x + 50, cloud.y, 40, 20);

    // reset the cloud's position when it goes off the canvas
    if (cloud.x > width + 50) {
      cloud.x = -50;
      cloud.y = random(50, height - 100);
      cloud.speed = random(1, 2);     
    }   
}
}



