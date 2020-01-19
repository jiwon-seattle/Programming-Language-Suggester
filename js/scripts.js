
$(document).ready(function() {
  $("button#start").click(function(event){
    $("form#language").show();
  })
})

$(document).ready(function() {
  $("form#language").submit(function(event) {
    event.preventDefault();
    var data = $("input:radio[name=data]:checked").val();
    var duration = $("input:radio[name=duration]:checked").val();
    var result;
    if (duration === "long") {
      $("#result-long").show();
      $("#result-intro").show();
      $("#result-sql").show();
      $("#result-python").show();
      $("#result-javascript").show();
    } else if (duration === "short" && data === "sql2") {
      $("#result-intro").show();
      $("#result-sql").show();
      $("#result-python").hide();
      $("#result-javascript").hide();
    } else if (duration === "short" && data === "python2") {
      $("#result-intro").show();
      $("#result-sql").hide();
      $("#result-python").show();
      $("result-javascript").hide();
    } else if (duration === "short" && data === "javascript2") {
      $("#result-intro").show();
      $("#result-sql").hide();
      $("#result-python").hide();
      $("#result-javascript").show();
    } else if (duration === "short" && duration === "long") {
      $("#result-intro").show();
    }

    var nameInput = $("input#name").val();
    $("#you").text(nameInput)

    $("#output").show();
    $("#ramen").text(result);
    $("#recipient").text(nameInput);
    $("#location").text(addressInput);
    $("#phone").text(contactInput);

  });
});
