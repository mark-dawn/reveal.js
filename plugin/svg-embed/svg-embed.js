let inline_svg = (e) => {
    var params, style, svg_e;
    params = e.querySelectorAll("param");
    style = e.getAttribute("style");
    svg_e = e.contentDocument.documentElement/*.cloneNode(true)*/;
    svg_e.setAttribute("class", "stretch");
    svg_e.setAttribute("style", style);
    e.parentElement.replaceChild(svg_e, e);
}
Reveal.getSlides().forEach((s) => {
  s.querySelectorAll("object.svg-embed").forEach(function (e) {
    if (e.contentDocument) {
        inline_svg(e);
    } else {
        e.addEventListener("load", (ev) => {
            inline_svg(ev.target);
        }, false);
    }
  });
});
