$(document).ready(function(){
  $("form#fortune-teller").submit(function(event){
    event.preventDefault();
    var unlucky = 0;
    var lucky = 0;
    $("input:checkbox[name=unlucky]:checked").each(function(){
      unlucky += 1;
    });
    $("input:checkbox[name=lucky]:checked").each(function(){
      lucky += 1;
    });
    if (unlucky > lucky) {
      $(".fortune1").show();
      $(".fortune2").hide();
      $(".fortune3").hide();
    }
    if (lucky > unlucky) {
      $(".fortune2").show();
      $(".fortune1").hide();
      $(".fortune3").hide();
    }
    if (lucky === unlucky) {
      $(".fortune3").show();
      $(".fortune1").hide();
      $(".fortune2").hide();
    }
    $('#fortune-teller').hide();
    console.log(unlucky)
    console.log(lucky)
    // $("#question-responses").show();
    // $("input:checkbox[name=question]:checked").each(function(){
    //   var questionmode = $(this).val();
    //   $('#question-responses').append(questionmode + "<br>");
    // });
    // $("#answer-responses").show();
    // $("input:checkbox[name=answer]:checked").each(function(){
    //   var answermode = $(this).val();
    //   $('#answer-responses').append(answermode + "<br>");
    // });
    // $('#fortune-teller').hide();
  });
});
