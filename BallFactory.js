function BallFactory(){
    this.GetBall1 = function(){
        return new Ball(150,150,2,5,"tomato");
    }
    this.GetBall2 = function(){
        return new Ball(60,60,3,5,"green");
    }
    this.GetBall3 = function(){
        return new Ball(80,100,4,2,"yellow");
    }
    this.GetBall4 = function(){
        return new Ball(20,20,1,2,"purple");
    }
}
