
// Create & Append Canvas element to DOM
function canvasToDOM(id, width, height) {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height =  height;
    canvas.id = id;
    document.body.append(canvas);
}

canvasToDOM('canvas', 500, 500);
canvasToDOM('canvas2', 500, 500);

// Create 2D context from canvas
const c = canvas.getContext('2d');
const c2 = canvas2.getContext('2d')

// Create a circle with dimension
function drawCircle(ctx, x, y, radius, color) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI, true);
    ctx.fillStyle = color;
    ctx.fill();
}

drawCircle(c, 100, 100, 200, '#00f');
drawCircle(c2, 100, 100, 100, 'red');
