document.addEventListener("DOMContentLoaded", function() {
    // Create a paragraph to contain the phrase
    var paragraph = document.createElement("p");

    // Add the text to the phrase
    var text = document.createTextNode("© 2023 Pedro Garcia. Tomar, 3200-251 Serra");

    // Add the text to the paragraph
    paragraph.appendChild(text);

    // Add the paragraph to the body of the page
    var phraseContainer = document.getElementById("copyrightPhrase");
    phraseContainer.appendChild(paragraph);

    // Add a class to center the text
    phraseContainer.classList.add("centerText");
});