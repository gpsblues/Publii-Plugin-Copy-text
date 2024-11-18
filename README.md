# Publii Plugin: Copy Text

This plugin adds a copy feature to HTML text elements.

<p><img height="100" alt="publii plugin" title="Copy text icons" src="https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/5ef4b9e342a6d8c2a18773b78659d1469007046b/.assets/thumbnail.svg"></p>

## Features
The plugin adds a copy function to HTML elements with a custom class, featuring a small clickable icon in the top right corner. After copying, a brief popup notifies the user that the text has been copied to the clipboard. Various customizations are available.

![Publii plugin screenshot](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/screenshot1.png)

## Installation and Usage
- Download the .zip file of the latest plugin version from the [release page](https://github.com/gpsblues/Publii-Plugin-Copy-text/releases/).
- Open Publii CMS and [install the plugin](https://getpublii.com/docs/plugins.html#installingplugins).
- [Enable the plugin](https://getpublii.com/docs/plugins.html#enablingplugins).
- Set plugin options by clicking on its name.
- Save, Preview, or Sync your website to see it in action.

In the plugin settings, define a custom class name (default is 'copy-text'). To enable the copy function, add this class to the HTML tag. The element with the applied class will display a copy icon in the top right corner.

```html
<p class="copy-text">Lorem Ipsum is simply dummy text ...</p>

```
![Copy text](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/1.png)

![Copy text](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/2.png)

![Copy text](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/3.png)

The plugin allows for basic customizations, such as:
- Icon type
- Icon size
- Text label
- Copy confirmation message
- Simple style adjustments

Be aware that existing theme styles might override the plugin settings. For greater control over these settings, you can use the Custom CSS section in Publii.

## Note
If you want to enable the copy function for code snippets, I recommend using the official [Syntax Highlighter plugin](https://marketplace.getpublii.com/plugins/syntax-highlighter/).

## Disclaimer
This plugin is an unofficial extension for the [Publii CMS](https://getpublii.com/). I do not assume any responsibility for potential issues or malfunctions that may occur while using this plugin. Additionally, support for this plugin is not guaranteed.

For official Publii resources, please visit the [Publii CMS Official Repository](https://marketplace.getpublii.com/plugins/).
