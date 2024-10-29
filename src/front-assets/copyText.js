// copy-text.js

/*
This JavaScript file is part of a Publii plugin that enables easy text copying functionality. 
It is crucial that any modifications made to this file are saved in a minimized format, 
as the plugin uses the minimized version for optimal performance. 
Minification reduces file size and improves load times, enhancing the user experience. 
Please ensure to minify the file before deploying any updates.
*/

// Default configuration variables for the copy functionality
// These values will be overridden by user settings through a configuration <script> tag
let config = {
    iconSize: 16,           // Size of the copy icon in pixels
    iconColor: '#2067BC',   // Color of the copy icon
    txtLabel: '',           // Label for the copy action; left empty if not needed
    txtMessage: 'Copied!',  // Message to display when the text is successfully copied
    txtTime: 1500           // Duration (in milliseconds) for which the confirmation message will be shown
};

// Wait for the DOM content to be fully loaded before executing the following code
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'copy-text' and iterate over them
    document.querySelectorAll(".copy-text").forEach(element => {
        // Svg icon
        const svgIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="${config.iconSize}" height="${config.iconSize}" viewBox="0 0 24 24" fill="none" stroke="${config.iconColor}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
        // Create a new span element for the copy icon
        const icon = document.createElement("span");
        icon.innerHTML = svgIcon; // Set the inner HTML to the SVG icon definition
        icon.classList.add("copy-icon"); // Add a class for styling purposes

        // Retrieve the copy label from the configuration
        const label = config.txtLabel;
        // If the label is specified (not an empty string), create and append it to the icon
        if (label !== "") {
            const textSpan = document.createElement("span"); // Create a span for the label text
            textSpan.classList.add("copy-icon-text"); // Add a class for styling
            textSpan.innerText = label; // Set the text of the span to the label
            icon.appendChild(textSpan); // Append the label span to the icon
        }

        // Append the icon to the current copy text element
        element.appendChild(icon);

        // Add a click event listener to the icon
        icon.addEventListener("click", () => {
            // Get the full text content from the element and trim whitespace
            let mainText = element.innerText.trim();

            // If a label is present, remove it and any preceding blank line from the main text
            if (label !== "") {
                // Create a regex to match the label preceded by an optional newline character
                const regex = new RegExp('\\n?' + label + '$');
                // Remove the label from the main text and trim again to clean up
                mainText = mainText.replace(regex, '').trim();
            }

            // Use the Clipboard API to write the cleaned main text to the clipboard
            navigator.clipboard.writeText(mainText).then(() => {
                // Create a span element for the confirmation popup
                const popup = document.createElement("span");
                popup.innerText = config.txtMessage; // Set the text of the popup to the confirmation message
                popup.classList.add("copy-popup"); // Add a class for styling the popup
                icon.appendChild(popup); // Append the popup to the icon

                // Remove the popup after the specified duration
                setTimeout(() => popup.remove(), config.txtTime);
            });
        });
    });
});
