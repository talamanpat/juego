function Ball(x,y,dX,dY,style){
    this.x = x; 
    this.y = y; 
    this.dX = dX;
    this.dY = dY;
    this.style=style;
	
    this.dibuja= function() {
        ctx.fillStyle = style;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 15, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.fill();
        this.x += this.dX;
        this.y += this.dY;
    }
    
    this.mover = function (deltaX,deltaY){
        this.x+=deltaX
        this.y+=deltaY
    }
}