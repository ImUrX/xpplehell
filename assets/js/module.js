import {MouseDrawer} from "./draw/MouseDrawer.js";

/**
 * @type {HTMLCanvasElement}
 */
const canvas = document.getElementById("draw");

let drawer = new MouseDrawer(canvas);
// should drawer add itself as a listener instead of depending on this code block?
canvas.addEventListener("mousedown", (e) => drawer.onMouseDown(e));
canvas.addEventListener("mousemove", (e) => drawer.onMouseMove(e));
canvas.addEventListener("mouseup", (e) => drawer.onMouseUp(e));
canvas.addEventListener("mouseout", (e) => drawer.onMouseOut(e));

const toolbar = document.getElementById("toolbar");
for (const child of toolbar.querySelectorAll(".button.color")) {
    child.onclick = () => drawer.updatePencil(child.style.getPropertyValue("--type"));
}

{
    const clearButton = document.getElementById("clear");
    clearButton.onclick = () => {
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}
