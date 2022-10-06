//1 ti chair banate 1 kg/m3 kath, 1 ti table banate 31kg/m3 kath,1 ti khat banate 51kg/m3 kath lagle
//
function woodCalculator(chair,table,khat){
var total = chair*1+table*3+khat*5;
console.log("totol kath er poriman",total,"kg/m3");
}
//1 ti chair 1 ti table 1 ti khat banate koto tuku kath lagbe?
woodCalculator(1,1,1)
//3 ti chair 2 ti table 4 ti khat banate koto tuku kath lagbe?
woodCalculator(3,2,4)
