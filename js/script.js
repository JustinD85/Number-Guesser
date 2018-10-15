$("document").ready(function () {
  //Min value
  const MIN_VALUE = 0;
  //Maximum guess value
  let maxVal = 100;
  //Function to call new value after reset
  const numGen = function (i){
    return Math.floor(Math.random() * i + 1);
  }
  
  

  //The current max value to use in logic
  let ranNum = numGen(maxVal);
  console.log(ranNum);
  //Hides Elements from view
  $("#last-guess").css("visibility", "hidden");
  $("#high-low-boom").css("visibility", "hidden");

  //Regex for checking non numerals
  let regex = /^[^\W]+$/;

  //Checks number validity, checks after every new char
  $("#input-box").on('input', () => {
    $("header").removeClass('error');
    /*
    If the input is greater, lower, or wrong resets input 
    and shows error message.
    */
    if($("#input-box").val() > maxVal ||
      $("#input-box").val() < MIN_VALUE || 
      !regex.test($("#input-box").val())){

        //Adds the class the shows error here
      $("header").addClass('error');
        //Clears input here
        $("#input-box").val(""); 
      }
    })

  //Grabs the event in case I want to manipulate it later
  $("#guess-button").click((e) => {

    //Copies the value from input-box
    let myGuessNum = $("#input-box").val();

    $("#last-guess").css("visibility", "visible");
    $("#high-low-boom").css("visibility", "visible");
    
    //Conditional checks
    if(parseInt(myGuessNum) > ranNum){
      $("#high-low-boom").text("That is too high");
    }
    else if(parseInt(myGuessNum) < ranNum){
      $("#high-low-boom").text("That is too low");
    }
    else{
      $("#high-low-boom").text("BOOM!");
    }

    //Displays what the last guess was
    $("#last-guess").text(myGuessNum);

    /*
    I have nowhere to send the data so I prevent the default
    behaviour of it wanting to refresh mah page.
    */
    e.preventDefault();
  });

  //Logic for the clear button, initial state disabled
  $("#clear-button").prop("disabled", true);
  /*
    Disables the clear button if there is nothing in the inputbox.
    Note: Works with keyup only.
    */
    $("#input-box").change(function () {
      if($(this).val().length != 0){
        $("#clear-button").prop("disabled", false);
      }
      else{
        $("#clear-button").prop("disabled", true);
      }
    })

  /*
    Even having the above code fire onchange I need to use
    the click handler to check again to disable the clear 
    button. Look into further if get time.
    */
    $("#clear-button").click(() => {
      $("#input-box").val("");
      if($(this).val().length != 0){
        $("#clear-button").prop("disabled", false);
      }
      else{
        $("#clear-button").prop("disabled", true);
      }
    });

    $("#reset").click(() => {
      $("#input-box").val("");
      ranNum = numGen();
      $("#last-guess").css("visibility", "hidden");
      $("#high-low-boom").css("visibility", "hidden");
    });

    //Timer for checking reset needs

  });