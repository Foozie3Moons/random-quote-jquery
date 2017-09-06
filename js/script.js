$(document).ready(function() {

  quotes = [
    ["Mexican food is far more varied than people think. It changes like dialects. I was brought up in Jalisco by the sea on a basic diet - tomatoes, chillis, peppers of every size and rice, which is a Mexican staple. The Pacific coast has a huge array of seafood.", "Jean Rostand"],
    ["Stupidity, outrage, vanity, cruelty, iniquity, bad faith, falsehood - we fail to see the whole array when it is facing in the same direction as we.", "Joel Fuhrman"],
    ["Chemicals are not currently tested for their endocrine disruption potential before they are approved for use and enter our environment, and there are endocrine disruptors in a vast array of products we come into contact with every day, including organochlorine pesticides, plastics, fuels, and other industrial chemicals", "Joe Klein"]
  ];

  function randomQuote() {
    var i = Math.floor(Math.random() * quotes.length);
    return quotes[i];
  }

  // jQuery UI functions

  $( function() {
    $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).click( function( event ) {
      event.preventDefault();
    } );
  } );

  $( function() {
    $( "#dialog" ).dialog();
    $("#dialog").attr("disabled", true);
    $('#dialog').dialog({
        width: 600,
        modal: true,
        resizable: false,
        draggable: false
    });
    quote = randomQuote();
    $('#quote').text(quote[0]);
    $('#author').text("-" + quote[1]);
  } );

  $("#dialog").on("mouseup", "button", function(e) {
    $('#quote').text("");
    quote = randomQuote();
    $(this).parent().find($("#quote")).text(quote[0]);
    $(this).parent().find($("#author")).text("-" + quote[1]);
  })

});
