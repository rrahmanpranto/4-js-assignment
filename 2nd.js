function woodCalculator(x, y, z){
    var chair = 4*x;
    var table = 8*y;
    var bed = 12*z;
    var result = chair+ table+ bed;
    return result;
}
 var output = woodCalculator(8, 5, 3);
 console.log(output)