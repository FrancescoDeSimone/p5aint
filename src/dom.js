'use strict';
const hide = (id, val) => {
  const bar = document.getElementById(id);
  const barType = bar.style[id == "toolbar" ? "width" : "height"]
  if (barType == "0px" || barType == 0) {
    bar.style.animationName = "open" + id;
    bar.style[id == "toolbar" ? "width" : "height"] = val
    document.querySelectorAll(`#${id} *`).forEach(tag => tag.style.display = "block")
  } else {
    bar.style.animationName = "close" + id;
    bar.style[id == "toolbar" ? "width" : "height"] = "0px"
    document.querySelectorAll(`#${id} *`).forEach(tag => tag.style.display = (tag.classList.contains("hide")) ? "block" : "none")
  }
  bar.style.animationPlayState = "running";
}

window.onload = () =>
  document
    .getElementById("sizeSelector")
    .insertAdjacentHTML(
      "afterbegin",
      [...Array(95).keys()]
        .flatMap(
          x =>
            `<option ${
            x + 5 == sketchBrushSize() ? 'selected="selected"' : ""
            } ">${x + 5}</option>`
        )
        .toString()
    );
