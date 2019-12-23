!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports,require("ntcjs"),require("color")):"function"==typeof define&&define.amd?define(["exports","ntcjs","color"],t):t(e.engine={},e.ntcjs,e.color)}(this,function(e,t,a){function r(e,t){return e.replace(/%s/,t)}t=t&&t.hasOwnProperty("default")?t.default:t,a=a&&a.hasOwnProperty("default")?a.default:a;var n='You are trying to run "createSwatch" without passing the "neutral" shade\nthrough the "shades" property. What we actually got is this: ("%s").\nPlease, make sure the shade "neutral" is present and is a valid hex code.';function s(e){return/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(e)}var d=.2;function o(e,t){if(void 0===t&&(t=h),!s(e))throw new Error(r(u,'"'+e.toString()+'"'));var a,n,d=(a=Object.keys(t),n=Object.keys(h),0===a.length?[]:a.filter(function(e){return!n.includes(e)}));if(d.length>0)throw new Error(r(c,'"'+d.join(", ")+'"'));var o=l(e,t.contrastRatio),f=l(o,t.contrastRatio),p=l(f,t.contrastRatio),m=i(e,t.contrastRatio),g=i(m,t.contrastRatio),S=i(g,t.contrastRatio);return{darkest:p,darker:f,dark:o,neutral:e.toUpperCase(),light:m,lighter:g,lightest:S}}var h={contrastRatio:d};function i(e,t){return void 0===t&&(t=d),a(e).lighten(t).hex()}function l(e,t){return void 0===t&&(t=d),a(e).darken(t).hex()}var u="You are passing an invalid or malformed color string (%s).\nTo learn more about our algorithm for hexadecimal color strings,\nplease refer to https://stackoverflow.com/a/9682781.\n",c="You passed some invalid options when generating shades (%s).\nPlease refer to https://github.com/chiefGui/reshader to know more\nabout the available, valid options.\n";function f(e){return new Array(e).fill(" ").join("")}function p(e){return new Array(e).fill(" ").join("")}function m(e){return new Array(e).fill(" ").join("")}e.createSwatch=function(e){var a=e.formalName,s=e.shades,d=e.contrastRatio;if(!s)throw new Error('"createSwatch" requires at least the argument "shades"');if(!s.neutral)throw new Error(r(n,JSON.stringify(s,null,2)));var o=a||t.name(s.neutral)[1];return{formalName:o,hydratedName:o.trim().replace(/(?:^\w|[A-Z]|\b\w)/g,function(e,t){return 0==t?e.toLowerCase():e.toUpperCase()}).replace(/\s+/g,"").replace(/[^a-zA-Z0-9]/g,"").replace(/['"]+/g,""),contrastRatio:d||.2,shades:s}},e.EXCEPTION__UNDEFINED_SHADES='"createSwatch" requires at least the argument "shades"',e.EXCEPTION__NO_NEUTRAL=n,e.createShades=o,e.EXCEPTION__INVALID_COLOR_STRING=u,e.EXCEPTION__INVALID_CREATE_SHADES_OPTIONS=c,e.createPalette=function(e){return Object.keys(e).reduce(function(t,a){var r,n="string"==typeof(r=e[a])?{hex:r,options:{}}:r;return t[a]=o(n.hex,n.options),t},{})},e.parseSwatchToJSON=function(e,t){void 0===t&&(t={numberOfSpaces:0});var a=0===t.numberOfSpaces?"":f(t.numberOfSpaces),r=0===t.numberOfSpaces?"  ":a+f(t.numberOfSpaces),n=0===t.numberOfSpaces?"    ":r+f(t.numberOfSpaces);return a+"{\n"+r+'"'+e.hydratedName+'": {\n'+n+'"darkest": "'+e.shades.darkest+'",\n'+n+'"darker": "'+e.shades.darker+'",\n'+n+'"dark": "'+e.shades.dark+'",\n'+n+'"neutral": "'+e.shades.neutral+'",\n'+n+'"light": "'+e.shades.light+'",\n'+n+'"lighter": "'+e.shades.lighter+'",\n'+n+'"lightest": "'+e.shades.lightest+'"\n'+r+"}\n"+a+"}"},e.parseSwatchToJS=function(e,t){void 0===t&&(t={numberOfSpaces:0});var a=0===t.numberOfSpaces?"":p(t.numberOfSpaces),r=0===t.numberOfSpaces?"  ":a+p(t.numberOfSpaces),n=0===t.numberOfSpaces?"    ":r+p(t.numberOfSpaces);return a+"{\n"+r+e.hydratedName+": {\n"+n+'darkest: "'+e.shades.darkest+'",\n'+n+'darker: "'+e.shades.darker+'",\n'+n+'dark: "'+e.shades.dark+'",\n'+n+'neutral: "'+e.shades.neutral+'",\n'+n+'light: "'+e.shades.light+'",\n'+n+'lighter: "'+e.shades.lighter+'",\n'+n+'lightest: "'+e.shades.lightest+'"\n'+r+"}\n"+a+"}"},e.parseSwatchToCSS=function(e,t){return void 0===t&&(t={numberOfSpaces:0}),0===t.numberOfSpaces||m(t.numberOfSpaces),0===t.numberOfSpaces||m(t.numberOfSpaces),0===t.numberOfSpaces||m(t.numberOfSpaces),":root {\n  --palette-"+e.hydratedName+"--darkest: "+e.shades.darkest+";\n  --palette-"+e.hydratedName+"--darker: "+e.shades.darker+";\n  --palette-"+e.hydratedName+"--dark: "+e.shades.dark+";\n  --palette-"+e.hydratedName+"--neutral: "+e.shades.neutral+";\n  --palette-"+e.hydratedName+"--light: "+e.shades.light+";\n  --palette-"+e.hydratedName+"--lighter: "+e.shades.lighter+";\n  --palette-"+e.hydratedName+"--lightest: "+e.shades.lightest+";\n}"},e.parseSwatchToSCSS=function(e){return"$palette-"+e.hydratedName+"--darkest: "+e.shades.darkest+";\n$palette-"+e.hydratedName+"--darker: "+e.shades.darker+";\n$palette-"+e.hydratedName+"--dark: "+e.shades.dark+";\n$palette-"+e.hydratedName+"--neutral: "+e.shades.neutral+";\n$palette-"+e.hydratedName+"--light: "+e.shades.light+";\n$palette-"+e.hydratedName+"--lighter: "+e.shades.lighter+";\n$palette-"+e.hydratedName+"--lightest: "+e.shades.lightest+";"},e.isValidHexColor=s,e.format=r});
//# sourceMappingURL=reshader.umd.js.map
