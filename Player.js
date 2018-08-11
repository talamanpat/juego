function Player(x,h,w){
    this.x = x; 
    this.h = h; 
    this.d = pizarra.y - this.h; 
    this.w = w; 
    this.puntos = 0;
	
    this.dibuja= function (){
        ctx.fillStyle = "navy";
        ctx.beginPath();
        ctx.rect(this.x, this.d, this.w, this.h);
        ctx.closePath();
        ctx.fill();
    }
    
    this.whatKey = function (evt) {

        switch (evt.keyCode) {
            // Left arrow.
            case 37:
                player.x = player.x - 20;
                if (player.x < 0) player.x = 0;
                break;

            // Right arrow.
            case 39:
                player.x = player.x + 20;
                if (player.x > pizarra.x - player.w) player.x = pizarra.x - player.w;
                break;
        }
    }
    
    this.mover = function (deltaX,deltaY){
        this.x+=deltaX
        this.d+=deltaY
    }   
}