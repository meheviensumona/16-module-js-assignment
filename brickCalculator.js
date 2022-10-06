function brickCalculator(building){
    if(building<=10){
         var Eit_numbers = building*15*10000;
        console.log("Number of eit:-" ,Eit_numbers)
    }
    else if( building>10 && building<=20){
        var Eit_numbers = building*12*10000;
        console.log("Number of Eit:-",Eit_numbers);
    }
}
brickCalculator(5)
brickCalculator(12)

