// Wait until the DOM content is fully loaded before adding the event listener
document.addEventListener('DOMContentLoaded', function() {
    // Add the click event listener to the button
    document.getElementById("unhackButton").onclick = function() {
        // Open a YouTube video in a new tab
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    };
});
