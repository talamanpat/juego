function Pizarra(x,y){
    this.x = x; 
    this.y = y; 
    this.hijos=new Array;
        
    this.dibuja = function(){
        ctx.clearRect(0, 0, this.x, this.y);
        this.hijos=new Array;
        ctx.fillStyle = "thistle";
        ctx.beginPath();
        ctx.rect(0, 0, this.x, this.y);
        ctx.closePath();
        ctx.fill();
    }
    
    this.agregar= function(dibujable){
        this.hijos[this.hijos.length]=dibujable;
        this.hijos[this.hijos.length-1].dibuja();
        if(dibujable instanceof Ball ){
            limites(dibujable);
        }
    }
    
    this.quitar = function(dibujable){
        for (hijo in this.hijos)
        {
            if(this.hijos[hijo]==dibujable){
                delete this.hijos[hijo];
            }
        }
    }
        

    this.mover = function (deltaX,deltaY){
            this.x+=deltaX;
            this.y+=deltaY;
            for (hijo in this.hijos)
            {
                if(this.hijos[hijo] instanceof Player )
                    this.hijos[hijo].mover(deltaX,deltaY);
            }
        
    }
    
    
    function limites(bola){
        // Bounce on a left or right edge.
        if (bola.x + bola.dX > pizarra.x - 15 || bola.x + bola.dX < 15) bola.dX = -bola.dX;

        // If bola hits the top, bounce it. 
        if (bola.y + bola.dY < 15) bola.dY = -bola.dY;
        // If the bola hits the bottom, check see if it hits a paddle.
        else if (bola.y + bola.dY > pizarra.y - 15) {
            // If the bola hits the paddle, bounce it.
            if (bola.x > player.x && bola.x < player.x + player.w) {
                player.puntos++;
                bola.dY = -bola.dY;
                document.getElementById('puntos').innerHTML= player.puntos;
            }
            // Otherwise the game is over.
            else {
                clearInterval(gameLoop);
                alert("Game over!");
            }
        }

    }
    


}