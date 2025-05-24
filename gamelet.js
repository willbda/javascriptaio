const ball = document.getElementById("ball");
document.addEventListener("keydown", handleKeyPress);
let position = {
  x: 200,
  y: 200,
};

function handleKeyPress(e) {
  if (e.code === "ArrowLeft") {
    position.x = position.x - 10;
  }
  if (e.code === "ArrowRight") {
    position.x = position.x + 10;
  }

  if (e.code === "ArrowDown") {
    position.y = position.y + 10;
  }
  if (position < 0) {
    position = 0;
  }
  refresh();
}
function refresh() {
  ball.style.left = position.x + "px";
}
