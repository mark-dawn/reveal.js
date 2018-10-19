 ( () => {
     var options = Reveal.getConfig().cite || {};
     options.cite = options.cite || 'https://unpkg.com/citation-js@0.4.0-8';
     options.config = options.config || '';
     values = [];
     Reveal.getSlides().forEach((s) => {
         s.querySelectorAll("a").forEach((e) => {
             doi = e.getAttribute("href");
             values.push(doi);
         });
     });
 })();
 
 function async cite(doi, format) {
     var xhr = new XMLHttpRequest();
     xhr.open("GET", doi);
}
