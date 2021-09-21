let bubbles = [];

function setup()
{
    createCanvas(600, 600);

}

function mousePressed() {
    let z = random(10,50);
    let b = new Bubble(mouseX, mouseY, z);
    bubbles.push(b);
}

function draw()
{
    background(0);
    for (let i = 0; i < bubbles.length; i++)
    {
            bubbles[i].move();
            bubbles[i].show();
    }
}

class Bubble
{
    constructor(x, y, z)
    {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    move()  {
    this.x = this.x + random(-5, 5);
    this.y = this.y + random(-5, 5);
            }

    show()  {
    let x = random(0, 255);
    let y = random(0, 255);
    let z = random(0, 255);
    stroke(x, y, z);
    strokeWeight(4);
    noFill();
    ellipse(this.x, this.y, this.z * 2);
            }
}   