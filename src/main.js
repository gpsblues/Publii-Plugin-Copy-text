class MyPlugin {
    constructor (API, name, config) {
        this.API = API;         // gives you an access to the plugins API functions
	    this.name = name;       // retrieved plugin name - probably will be removed in the future
	    this.config = config;   // gives access to the plugin saved config
    }

    addModifiers () {
		this.API.addModifier('controllo', this.modifyHTML, 1, this);
	}

// *** INSERTION ***
    // Should be used to input your own HTML/CSS/JS code in specific places of the website.

    addInsertions () {
        //add CSS link in head
        this.API.addInsertion('publiiHead', this.addStyle, 1, this);
        //add JS link and code in footer
        this.API.addInsertion('publiiFooter', this.addCode, 1, this);
    }
	
// ***CUSTOM CODE ***

    addStyle(rendererInstance) {
        if (this.loadOn(rendererInstance)) {
            //Create CSS

            let className = this.config.className
            // If the custom class is not defined, a default value will be used.
            if (!className) className = "copy-text"

            let myStyle = `
                .${className} {
                    position: relative;
                    padding: ${this.config.classPadding}px;
                    padding-top: calc(${this.config.iconSize}px * 2)!important;
                    background-color: ${this.config.classBg};
                    border-radius: ${this.config.classRadius}px;
                }

                .copy-icon {
                    position: absolute;
                    top: calc( ${this.config.iconSize}px / 2);
                    right: calc( ${this.config.iconSize}px);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                }
                
                .copy-icon svg {
                    width: ${this.config.iconSize}px;
                    stroke: ${this.config.iconColor};
                }
                
                .copy-icon-text {
                    margin-left: 8px;
                    font-size: 0.75rem;
                    color: ${this.config.iconColor};
                }

                .copy-popup {
                    position: absolute;
                    top: 50%;
                    right: 115%;
                    transform: translateY(-50%);
                    background-color: ${this.config.txtBgColor};
                    color: ${this.config.txtColor};
                    padding: 2px 6px;
                    font-size: 0.75rem;
                    border-radius: 4px;
                    white-space: nowrap;
                }
            `
            //Minimize CSS
            myStyle = minifyCSS(myStyle);

            //Adds a <style> tag with custom CSS 
            return '<style>'+ myStyle +'</style>';
        }
        return '';
	}

    addCode(rendererInstance) {
        if (this.loadOn(rendererInstance)) {
        //Create JS

        let myCode = `
            // User settings configurations
            window.iconChoice   =  ${this.config.iconChoice};  // Icon choiche
            window.iconSize     =  ${this.config.iconSize};    // Size of the copy icon in pixels
            window.iconColor    = '${this.config.iconColor}';  // Color of the copy icon
            window.txtLabel     = '${this.config.txtLabel}';   // Label for the copy action
            window.txtMessage   = '${this.config.txtMessage}'; // Message to display when the text is successfully copied
            window.txtTime      =  ${this.config.txtTime};     // Duration (in milliseconds) for which the confirmation message will be shown
        `;

        //Minimize JS
        myCode = minifyJS(myCode);

        //Adds js file
        return `
        <script>${myCode}</script>
        <script src="${rendererInstance.siteConfig.domain}/media/plugins/${this.name}/copyText.min.js" defer></script>
        `
        }
        return '';
    }

    loadOn(rendererInstance) {
		// Check whether to load on posts, everywhere (excluding index, 404 and search), or both pages
		let context = rendererInstance.globalContext.context;
		
		switch (this.config.loadOn) {
			 case 'posts':
				  return Array.isArray(context) && context.includes('post');
			 case 'all':
				  if (Array.isArray(context)) {
						// Check if context contains 'index', '404' or 'search'
						if (context.includes('404') || context.includes('search') || context.includes('index')) {
							 return false;
						} else {
							 return true;
						}
				  } else {
						return false;
				  }
			 default:
				  return false;
		}
  }

}

function minifyCSS(code) {
    //Simple script to minify CSS
    return code
        .replace(/\/\*(?:(?!\*\/)[\s\S])*\*\/|[\r\n\t]+/g, '')  // Removes comments and newline
        .replace(/\s*([:;{}])\s*/g, '$1');                      // Removes unnecessary whitespace around : ; { }
} 

function minifyJS(code) {
    //Simple script to minify CSS
    return code
        .replace(/\/\*[\s\S]*?\*\//g, '') // Remove multi-line comments
        .replace(/\/\/.*?(\r?\n|$)/g, '') // Remove single-line comments
        .replace(/\s*([{}();,:])\s*/g, '$1') // Remove whitespace around certain characters
        .replace(/\n{2,}/g, '\n') // Remove extra newlines
        .replace(/\s+/g, ' ') // Replace multiple spaces with a single space
        .trim(); // Trim leading and trailing whitespace
} 



module.exports = MyPlugin;