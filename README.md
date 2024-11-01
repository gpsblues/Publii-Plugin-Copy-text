# Publii Plugin: Copy Text

This plugin adds a copy feature to HTML text elements.

![Copy text icons](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/5ef4b9e342a6d8c2a18773b78659d1469007046b/.assets/thumbnail.svg)

## Features
The plugin adds a copy function to HTML elements with a custom class, featuring a small clickable icon in the top right corner. After copying, a brief popup notifies the user that the text has been copied to the clipboard. Various customizations are available.

## Installation and Usage
- Download the .zip file of the latest plugin version from the [release page](https://github.com/gpsblues/Publii-Plugin-Copy-text/releases/).
- Open Publii CMS and [install the plugin](https://getpublii.com/docs/plugins.html#installingplugins).
- [Enable the plugin](https://getpublii.com/docs/plugins.html#enablingplugins).
- Set plugin options by clicking on its name.
- Save, Preview, or Sync your website to see it in action.

![Publii plugin screenshot](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/screenshot1.png)

In the plugin settings, define a custom class name (default is 'copy-text'). To enable the copy function, add this class to the HTML tag. The element with the applied class will display a copy icon in the top right corner.

```html
<p class="copy-text">Lorem Ipsum is simply dummy text ...</p>

```
![Result](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/screenshot2.png)

The plugin allows for basic customizations, such as:
- Icon size
- Text label
- Copy confirmation message
- Simple style adjustments

For more complex style customizations, you can use Publii's integrated 'Custom CSS' tool.

![Publii](https://raw.githubusercontent.com/gpsblues/Publii-Plugin-Copy-text/refs/heads/main/.assets/screenshot1.png)

## Disclaimer
This plugin is an unofficial extension for the [Publii CMS](https://getpublii.com/). I do not assume any responsibility for potential issues or malfunctions that may occur while using this plugin. Additionally, support for this plugin is not guaranteed.

For official Publii resources, please visit the [Publii CMS Official Repository](https://marketplace.getpublii.com/plugins/).
