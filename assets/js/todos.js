$("ul").on("click","li",function(){
  $(this).toggleClass("todo");
});
$("ul").on("click","span",function(e){
  $(this).parent().fadeOut("slow");
  e.stopPropagation();
});
$("input[type='text']").keypress(function(e){
  if(e.which === 13){//press enter to add new TODO
    var a = $(this).val();//Take the value from input
     $(this).val("");//After fetching value make the input empty again
    $("ul").append("<li><span><i class='fa fa-trash' style='font-size:20px;color:red'></i></span> "+a+"</li>");//Append new li and Span too
  }
});
$(".fa-plus").on("click",function(){
  $("input").fadeToggle("slow");
});
