// Wait until the DOM content is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Add the click event listener to the button
    document.getElementById("unhackButton").onclick = function() {
        // Open a new tab or window with the YouTube link
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };
});
