var vowels=["a","e","i","o","u"];
var sentences = [
  "Okaley Dokely!",
  "Stupid Flanders...",
  "To be, or not to be",
  "That's what she said.",
  "Do what you must",
  "Use the Force.",
  "Alright, alright, alright"
  ];
function getRandomIndex(){
  return Math.floor(Math.random() * sentences.length);
  }
function placeOnPage(character){
  $("ul").append("<li class='character'>"+character+"</li>");
}
var arrays;
var untouchedArray;
var loser= true;
var userAnswer = [];
var solved = false;



$(document).ready(function(){
  $('body').on('keypress', function(e){
    var typedKey = String.fromCharCode(e.which);
    $('li.selected').text(typedKey);
  });

  $("#getsentence").click(function(){
    $('ul, #winnerscircle h1').empty();
    arrays = sentences[getRandomIndex()].split("");
    untouchedArray = arrays.slice();
    var loser= true;
    var userAnswer = [];
    for(i=0; i < arrays.length; i++){
      if (vowels.indexOf(arrays[i].toLowerCase()) !== -1){
        arrays[i] = "-";
      }
    }
    for (i = 0; i < arrays.length; i++) {
      placeOnPage(arrays[i]);
    }
    $("li").click(function() {
      $('.selected').removeClass('selected').css('background-color', '#fff');
      if (($(this).text() === "-") || $(this).hasClass("verified")) {
        $(this).addClass("verified");
        $(this).toggleClass('selected');
        $(this).keydown(function(){
          alert("Handler function");
        })
      }
    });

    $('#checkit').click(function(){

      for (i = 0; i < untouchedArray.length; i++) {
        userAnswer[i] = $("#sentencelist li:EQ("+i+")").text();
        console.log(i);
      }
      if ( userAnswer.join("") === untouchedArray.join("") ) {
        loser = false;
      } else {
        loser = true;
      }
      if (!loser) {
        $("#winnerscircle h1").text("Hey, hey!  You got it!");
        solved= true;
      } else {
        $("#winnerscircle h1").text("Sad face.  Try again.");
        solved = false;
      }
    });



  });



});
