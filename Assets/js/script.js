var currentDay = $("#currentDay"); //Variable to store current date
var btnEl = $('.saveBtn'); //Variable to add event listener to

var currentTime; // Variable to store current time


// Function checks current date and changes p element in header to match current date

function dateToday(){
    $(currentDay).text(moment().format('MMM Do, YYYY'));
    currentTime = moment().set(); // Retrieves current hour value
};


// Function Compares current time with time block hour values and changes background accordingly

function compareTime() {



    $('.row').each(function() {

        var blockText = $(this).children(".hour").text();

        var timeBlock = moment(blockText, "hA");

        if(timeBlock.isBefore(currentTime)) {
            $(this).children(".time-block").addClass("past");
        } else if(timeBlock.isAfter(currentTime)) {
            $(this).children(".time-block").addClass("future"); 
        } else {
            $(this).children(".time-block").addClass("present");
        }
    })

};





dateToday();
compareTime();
