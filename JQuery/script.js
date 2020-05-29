$(document).ready(function(event){
$("#authenticate").submit(function(){
    alert('submited')
    event.preventDefault();

})
})
$(document).ready(function(){
    $("img").hover(function(){
      $("img").fadeOut();
    });
    $("#button").click(function(){
      $("img").show();
    });
  });

$(document).ready(function(){
    $("#button").hide(function(){
        $("p").hide();
    })
    $("#button").show(function(){
        $("p").show();
        
    })
})
$(document).ready(function(){
    $("two").hover(function(){
        $("#guys").hide();
    })
    $("#show").click(function(){
        $("#guys").show();
    });
});