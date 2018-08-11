function Ejecutor(){
    this.etapa = Etapa1();
    
    this.drawGameCanvas = function() {
        canvas = document.getElementById("gameBoard");
        if (canvas.getContext) {
            ctx = canvas.getContext("2d");
            gameLoop = setInterval(this.ejecucion,12);
            window.addEventListener('keydown', player.whatKey, true);
        }
    }
        
    this.ejecucion = function(){
        setEtapa();
        this.etapa.ejecucion();
        callAjax();
    }

    function setEtapa (){
        if(player.puntos<3){
            this.etapa =new Etapa1();
        }else if(player.puntos >= 4 && player.puntos < 10 ){
            this.etapa =new Etapa2();
        }else if(player.puntos >= 10 && player.puntos < 25 ){
            this.etapa =new Etapa3();
        }else if(player.puntos >= 25){
            this.etapa =new Etapa4();
        }
    }
    
}


