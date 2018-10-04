$("document").ready(function () {
  let maxVal = 100;
  const numGen = function (maxVal){
    return Math.floor(Math.random() * maxVal + 1);
  }

  let ranNum = numGen();

  $("#guess").submit((e) => {

    let myGuessNum = $("#input-box").val();
    // $("#input-box").val("");
    if(myGuessNum > ranNum){
      $("#high-low-boom").text("That is too high");
    }
    else if(myGuessNum < ranNum){
      $("#high-low-boom").text("That is too low");
    }
    else{
      $("#high-low-boom").text("BOOM!");
    }


    $("#last-guess").text(myGuessNum);
  });

  $("#clear").click(() => $("#input-box").val(""));
  $("#last-guess").click(() => alert("last-guess"));
  
  $("#reset").click(() => {
    $("#input-box").val("");
    ranNum = numGen();
    $("#last-guess").text("Loading...");
    $("#high-low-boom").text("Awaiting Guess...");

  });

});

