var vowels=["a","e","i","o","u"];
var sentences = [
  "Hi-dilly-ho, neighborinos!",
  "Sorry to bother you, Reverend Lovejoy, but I'm kind of in a tizzy. My son Todd just told us he didn't want to eat his damn vegetables.",
  "I’ve done everything the Bible says — even the stuff that contradicts the other stuff!",
  "Hey Homie, I can see your doodle.",
  "Homer, you've met my parents.",
  "Okaley Dokely!",
  "Stupid Flanders..."
];
function getRandomIndex(){
  return Math.floor(Math.random() * sentences.length);
  }
function placeOnPage(character){
  $("ul").append("<li class='character'>"+character+"</li>");
}
var arrays = sentences[getRandomIndex()].split("");
// var originalForEnd = arrays;
$(document).ready(function(){

  $("#getsentence").click(function(event){
    for(i=0; i < arrays.length; i++){
      if (vowels.indexOf(arrays[i].toLowerCase()) !== -1){
        arrays[i] = "-";
      }
    }
    var string= arrays.join("");//currently not doing anything
    for (i = 0; i < arrays.length; i++) {
      placeOnPage(arrays[i]);
    }
    $("li").click(function() {
      if ($(this).text() === "-") {
        $(this).toggleClass('selected');
      }
    });
  });

  // $("li").click(function() {
  //   $(this).toggleClass('selected');
  // });

});
