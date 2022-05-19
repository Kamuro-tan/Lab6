
// setTimeout(function () {
//     console.log("hello, world!");
// }, 5000);


var main = function () {
    var messages = ["первое сообщение", "второе сообщение", "третье", "четвертое"];

    var displayMessage = function (messageIndex) {
        var $message = $("<p>").text(messages[messageIndex]).hide();
        $(".message").empty();
        $(".message ").append($message);
        $message.fadeIn();

        setTimeout(function () {
            if (messageIndex < messages.length - 1) {
                messageIndex = messageIndex + 1;
            } else {
                messageIndex = 0;
            }

            displayMessage(messageIndex);
        }, 3000);

    };

    displayMessage(0);
}


$(document).ready(main);
