Reveal.addEventListener("ready",function() {
// Select SVG files based on class name
var mySVGsToInject = document.querySelectorAll('img.inject_me');

// Replace the IMG with SVG objects so external style sheets will load
SVGInjector(mySVGsToInject);
});
