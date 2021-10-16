function brickCalculator(n){
    var ins= 0;
    if(n<=10){
        brick= n*15*1000;
    }

    else if(n<=20){
       var firstPartBrick = 10*15*1000;
        var remaining = n-10;
        var secondPart = remaining*12;
        var secondPartResult = secondPart*1000;
        brick = firstPartBrick+secondPartResult;

    }

    else{
        var firstPartBrick = 10*15*1000;
        var secondPartResult= 10*12*1000;
        var thirdPartRemain = n-20;
        var thirdPart = thirdPartRemain*10*1000;
        brick = firstPartBrick+secondPartResult+thirdPart;
    }
    return brick;
}
var output = brickCalculator(40);
console.log(output+' '+"Brick")