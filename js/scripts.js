

$(document).ready(function() {
  $("form#delivery").submit(function(event) {

    var flavor = $("input:radio[name=flavor]:checked").val();
    var result;
    if (flavor === "shio") {
      result = "Shio"
    } else if (flavor === "tofu") {
      result = "Tofu"
    } else if (flavor === "spicyt") {
      result = "Spicy Tonkotsu Ramen"
    } else if (flavor === "shoyu") {
      result = "Shoyu Ramen"
    }

    var nameInput = $("input#name").val();
    var addressInput = $("input#address").val();
    var contactInput = $("input#contact").val();

    $("#output").show();
    $("#ramen").text(result);
    $("#recipient").text(nameInput);
    $("#location").text(addressInput);
    $("#phone").text(contactInput);
    event.preventDefault();
  });
});
