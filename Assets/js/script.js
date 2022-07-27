var currentDay = $("#currentDay"); //Variable to store current date
var saveBtn = $('.saveBtn'); //Variable to add event listener to
var currentTime; // Variable to store current time

// Function checks current date and changes p element in header to match current date

function dateToday(){

    $(currentDay).text(moment().format('MMM Do, YYYY'));
    currentTime = moment().hour('hA'); // Retrieves current hour value

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

function storeRetrieve() {

    $(".time-block").each(function() {
        var projKey = $(this).attr("id");
        var projValue = localStorage.getItem(projKey);
        $(this).val(projValue);
    })

};

saveBtn.on("click", function() {

    var projKey = $(this).siblings(".time-block").attr("id"); // Retrieves ID for time block
    var projValue = $(this).siblings(".time-block").val(); // Retrieves text entry for time block
    localStorage.setItem(projKey, projValue); // Stores entry to local storage

});

storeRetrieve();
dateToday();
compareTime();
