var dress
dress = "little dress";
function myDress(){
var dress = "ball gown";

return dress;
}
if (typeof dress !="undefined"){
console.log( 'outside myDress', dress);
}
else(typeof myDress + dress)


module.exports = myDress;