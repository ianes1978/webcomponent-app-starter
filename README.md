# lit-element webcomponent starter TS (+Bootstrap)
version Typescript of [lit-element webcomponent starter JS](https://github.com/ianes1978/lit-element-webpack-starter)

## intro
This is a simple starter of a webcomponent builded with lit-element library and webpack bundler.
![screen](https://github.com/ianes1978/lit-element-webpack-starter/blob/master/images/screenshot.PNG)

## first-component
example of naked webcomponent

## bs-component
A component that load from external css a global style.
**But preserve the shadowdom for scoped style**.
I think can be usefull to create a library of webcomponent that have to ereditate the global style.

## webcomponents-loader.js is a polyfill for webcomponents
webcomponents-loader.js is a polyfill for webcomponents

*in index.html:*
```
    <!-- Load polyfills -->
    <script src="libs/webcomponents-loader.js" defer> </script>

    <!-- Load component when polyfills are definitely ready -->
    <script type="module">
        // Take care of cases in which the browser runs this
        // script before it has finished running 
        // webcomponents-loader.js (e.g. Firefox script execution order)
        window.WebComponents = window.WebComponents || {
            waitFor(cb) { addEventListener('WebComponentsReady', cb) }
            }

        WebComponents.waitFor(async () => {
            await import('./main.js');
        });
    </script>
```

## lit-css-global-scope
it is a simple module to import global style, you can replace with a simple script if you want:
```
import { css } from 'lit-element';
const styleRules = Object.values(document.styleSheets).reduce((obj,styleSheet)=>{
   return obj = [...obj,...Object.values(styleSheet.cssRules)]
   },[])
   
   let externalStyles =  styleRules.map(rule=>rule.cssText).join('\n');
   externalStyles = externalStyles.replace(/html {/g,":host {");
   externalStyles = externalStyles.replace(/@import/g,"/@import");
   externalStyles = css([externalStyles]);

export {externalStyles};
```
Import global styleSheet from document Object (and replace body tag with :host). you can upload as many files css as you want

# Use it
### Project setup
```
git clone https://github.com/ianes1978/lit-element-webpack-starter.git

npm install
```

### Compiles and hot-reloads for development
```
npm start
```

### Compiles and minifies for production
```
npm run build
```

