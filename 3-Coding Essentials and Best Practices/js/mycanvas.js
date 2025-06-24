var canvas, ctx;
window.onload = init;
function init() {
  console.log("Canvas init running");

  const canvas = document.getElementById("mycanvas");
  const ctx = canvas.getContext("2d");

  ctx.fillStyle = "forestgreen";
  ctx.fillRect(50, 10, 100, 100);
  ctx.strokeStyle = "lightgreen";
  ctx.lineWidth = 5;
  ctx.strokeRect(50, 10, 100, 100);
  ctx.fillStyle = "white"; // Text color
  ctx.font = "12px Arial"; // Font and size
  ctx.fillText("my green box ", 65, 65); // x and y (inside the box)

  ctx.fillStyle = "red";
  ctx.fillRect(160, 10, 70, 60);
  ctx.strokeStyle = "yellow";
  ctx.setLineDash([5, 5]); // dashed
  ctx.lineWidth = 2;
  ctx.strokeRect(160, 10, 70, 60);
  ctx.fillStyle = "white"; // Text color
  ctx.font = "11px Arial"; // Font and size
  ctx.fillText("My Red Box ", 165, 45); // x and y (inside the box)

  ctx.fillStyle = "grey";
  ctx.fillRect(160, 90, 140, 100);
  ctx.strokeStyle = "black";
  ctx.setLineDash([10, 3, 3, 3]); // dash-dot pattern
  ctx.lineWidth = 8;
  ctx.strokeRect(160, 90, 140, 100);
  ctx.fillStyle = "yellow"; // Text color 
  ctx.font = "20px Arial"; // Font and size 
  ctx.fillText("My Grey Box ", 170, 142); // x and y (inside the box)

  ctx.fillStyle = "purple";
  ctx.fillRect(235, 22, 120, 50);
  ctx.strokeStyle = "white";
  ctx.setLineDash([3, 6]); // dotted
  ctx.lineWidth = 2;
  ctx.strokeRect(235, 20, 120, 50);
  ctx.fillStyle = "white"; // Text color
  ctx.font = "14px Arial"; // Font and size
  ctx.fillText("My Purple Box ", 249, 45); // x and y (inside the box)

  drawTwoRectangles();
}

function drawTwoRectangles() {
  console.log("Draw function works.");
}
