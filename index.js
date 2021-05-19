

function bigW(element){
     return element["result"] === "W";
}


function superbowlWin(array){
let win = array.find(bigW); 
if (win){ 
 return win.year;
   } 
   else {
       return win; 
    }
}
