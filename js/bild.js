class Bild {
    constructor(html, max) {
        this.grav = 1.05;
        this.pos = { x: 0, y: -300 }
        this.speed = 5;
        this.html = html;
        this.end = false;
        this.max = max;
    }
    fall() {
        this.speed = this.speed * this.grav;
        var newPos = { x: this.pos.x, y: this.pos.y + this.speed };
        if (newPos.y > this.max) {
            newPos.y = this.max;
            this.speed = 0;
            this.end = true;
        }
        this.pos = newPos;
        this.draw();
    }
    draw() {
        this.html.style.top = this.pos.y + "px"
    }
    spinn(src) {
        this.html.src = src;
        this.pos.y = -1000;
        this.speed = Math.round((Math.random() + 0.5) * 3);
        this.end = false;
        this.draw();
    }
}