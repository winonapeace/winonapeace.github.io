$(document).ready(function() {
  $(".switch").click(function() {
    $(".switch").toggleClass("light_it_up");
    // make the lightbulb change color
    $(".lightbulb").toggleClass("its_lit")
  });
});