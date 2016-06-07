var vowels=["a","e","i","o","u"];
$(document).ready(function(){
  $("#text").submit(function(event){
    var arrays = $("#sentence").val().split("");
    for(i=0; i < arrays.length; i++){
      if (vowels.indexOf(arrays[i].toLowerCase()) !== -1){
        arrays[i] = "-";
      }
    }
    var string= arrays.join("");
    $("p").text(string);
    event.preventDefault();
  });

});
