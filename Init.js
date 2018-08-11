var canvas; 
var ctx; 
var gameLoop; 
var ajaxCall=true;
pizarra = new Pizarra(300,300); 
player = new Player(150,10,150);
ballFactory=new BallFactory();
ball1 = new ballFactory.GetBall1();
ball2 = new ballFactory.GetBall2();
ball3 = new ballFactory.GetBall3();
ball4 = new ballFactory.GetBall4();
ejecutor = new Ejecutor();

function callAjax(){
    if(player.puntos==12 && ajaxCall){
        $.ajax({
            type: "POST",
            data: "puntos="+player.puntos,
            url: "call.php",
            cache: false,
            success: function(html){
                $("#conajax").append(html);
            }
        });

        ajaxCall=false;
    }
}

$(document).ready(function() {
    ejecutor.drawGameCanvas()
});