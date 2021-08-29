//calendar-block, saveEvent, eventDesc

var button = $('.saveEvent')

//Current Date
$(document).ready(function () {
  var date = moment().format('MMMM Do YYYY, h:mm:ss a');
  $("#currentDay").text(date);

  //Past/Present/Future Colors
function presentTime () {
    var present = moment().hours();
    var time = $(".calendar-block");

    time.each(function () {

    var hour = document.getElementById("7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23")

        if (hour === present) {
           $("textarea").addClass("present")
        } else if (present > hour) {
            $("textarea").addClass("past")
        } else {
            $("textarea").addClass("future")
        }
    })
}
presentTime() 

//EventListen - local storage
button.on("click", function (event){
    event.preventDefault()
})


})
       





