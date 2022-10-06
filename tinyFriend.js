// find who's name is shortest!
function tinyFriend(){
    var friends = ["Mehavienothoy","taposhi","tuba","sayma"]
 for(var i =0;i<=friends.length; i++){

   if( friends[0].length < friends[1].length &&friends[0].length < friends[2].length && friends[0].length < friends[3].length ){
    console.log("small name is: ",friends[0])
    break;
   }
   
   else if(friends[1].length < friends[0].length  &&friends[1].length < friends[2].length && friends[1].length < friends[3].length ){
    console.log("small name is:",friends[1])
    break;
   }
   else if(friends[2].length < friends[0].length && friends[2].length < friends[1].length  && friends[2].length < friends[3].length ){
    console.log("small name is:",friends[2])
    break;
   }
   else{
    console.log("small name is:",friends[3])
    break;
   }
   
 }

}
tinyFriend()
