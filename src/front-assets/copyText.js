// copy-text.js

/*
This JavaScript file is part of a Publii plugin that enables easy text copying functionality. 
It is crucial that any modifications made to this file are saved in a minimized format, 
as the plugin uses the minimized version for optimal performance. 
Minification reduces file size and improves load times, enhancing the user experience. 
Please ensure to minify the file before deploying any updates.
*/

// Default configuration values that can be overridden by global variables
let config = {
    iconChoice: window.iconChoice || 1,
    iconSize: window.iconSize || 16,
    iconColor: window.iconColor || '#2067BC',
    txtLabel: window.txtLabel || '',
    txtMessage: window.txtMessage || 'Copied!',
    txtTime: window.txtTime || 1500
};

/*
Alternative method using 'typeof' to check if the global variables are defined.
This approach prevents any errors that may occur if the global variables are not set,
ensuring that default values are assigned only when necessary.

let config = {
    // Using window properties or default values if they are undefined
    iconSvg: typeof window.iconSvg !== 'undefined' ? window.iconSvg : 1,
    iconSize: typeof window.iconSize !== 'undefined' ? window.iconSize : 16,
    iconColor: typeof window.iconColor !== 'undefined' ? window.iconColor : "#2067BC",
    txtLabel: typeof window.txtLabel !== 'undefined' ? window.txtLabel : "",
    txtMessage: typeof window.txtMessage !== 'undefined' ? window.txtMessage : "Copied!",
    txtTime: typeof window.txtTime !== 'undefined' ? window.txtTime : 1500
};
*/

// Run the main function after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
    // Select all elements with the class 'copy-text'
    document.querySelectorAll(".copy-text").forEach(element => {
        // SVG for the copy icon using String.raw to preserve special characters
        let svgIcon
        switch (config.iconChoice) {
            case 1:
                svgIcon = String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-copy"><rect width="14" height="14" x="8" y="8" rx="2" ry="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/></svg>`;
                break;
            case 2:
                svgIcon = String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clipboard"><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/></svg>`;
                break;
            case 3:
                svgIcon = String.raw`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-files"><path d="M20 7h-3a2 2 0 0 1-2-2V2"/><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"/><path d="M3 7.6v12.8A1.6 1.6 0 0 0 4.6 22h9.8"/></svg>`;
                break;
            }

        // Create the span element for the icon and add the SVG content
        const icon = document.createElement("span");
        icon.innerHTML = svgIcon; // Set the inner HTML to the SVG icon definition
        icon.classList.add("copy-icon"); // Add a class for styling purposes

        // Add label text if specified
        if (config.txtLabel) {
            const textSpan = document.createElement("span");
            textSpan.classList.add("copy-icon-text"); // Add a class for styling
            textSpan.innerText = config.txtLabel; // Set the text of the span to the label
            icon.appendChild(textSpan); // Append the label span to the icon
        }
        
        // Append the icon to the main element
        element.appendChild(icon);

        // Click event listener for the icon
        icon.addEventListener("click", () => {
            // Trim the main text and remove the label if present
            const mainText = element.innerText.trim().replace(config.txtLabel, "").trim();

            // Copy to clipboard and show confirmation
            navigator.clipboard.writeText(mainText).then(() => {
                const popup = document.createElement("span");
                popup.innerText = config.txtMessage; // Set the text of the popup to the confirmation message
                popup.classList.add("copy-popup"); // Add a class for styling the popup
                icon.appendChild(popup); // Append the popup to the icon
                setTimeout(() => popup.remove(), config.txtTime); // Remove the popup after the specified duration
            });
        });
    });
});
