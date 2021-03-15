function localScope() {

    var myVariable = "I am here!";
    return myVariable;
}
if (typeof myVariable != "undefined") {
    console.log('outside localScope', myVariable)
}

else {
    console.log('outside localScope UNDEFINED!!!')
}

module.exports = localScope;