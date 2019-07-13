var timerValue = localStorage.getItem("timerValue");
var res = timerValue.split(":");
var $tmr_value = $('.tmr-value-container');
if (parseInt(res[0]) == 0){ 
    var seconds = parseInt(res[1]) > 1 ? parseInt(res[1]) + " seconds" : parseInt(res[1]) + " second";
    var text = seconds;
    $tmr_value.text(text);
} else if (parseInt(res[0]) > 0) {
    var minutes = parseInt(res[0]) > 1 ? parseInt(res[0]) + " minutes " : parseInt(res[0]) + " minute ";
    var seconds = parseInt(res[1]) > 1 ? parseInt(res[1]) + " seconds" : parseInt(res[1]) + " second";
    var text = minutes + "and " + seconds;
    $tmr_value.text(text);
}