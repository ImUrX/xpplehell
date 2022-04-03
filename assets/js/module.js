import {MouseDrawer} from "./draw/MouseDrawer.js";

const canvas = document.getElementById("draw");

let drawer = new MouseDrawer(canvas);
canvas.addEventListener("mousedown", (e) => drawer.onMouseDown(e));
canvas.addEventListener("mousemove", (e) => drawer.onMouseMove(e));
canvas.addEventListener("mouseup", (e) => drawer.onMouseUp(e));
canvas.addEventListener("mouseout", (e) => drawer.onMouseOut(e));

const toolbar = document.getElementById("toolbar");
for (let child of toolbar.children) {
    child.onclick = () => drawer.updatePencil(child.style.getPropertyValue("--type"));
}
