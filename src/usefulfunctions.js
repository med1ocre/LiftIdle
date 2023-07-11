export function fadePage(){

  $("#fadeCover").fadeOut("slow");

}

export function fancyReload(){

  $("#fadeCover").fadeIn("slow",function(){
        location.reload();
    });

}
