var DnaTranscriber = function (input) {
  this.value = input;
};
  
DnaTranscriber.prototype.toRna = function (value) {
  var newRna = [];
  for (var i = 0; i< value.length; i++){
    if (value[i]= "C"){
      newRna.push("G")
    }
  }
  return newRna.join("");
}
module.exports = DnaTranscriber;