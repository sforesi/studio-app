canvas = document.getElementById("renderer");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx = canvas.getContext("2d");

// find the center of the window
center_x = canvas.width / 2;
center_y = canvas.height / 2;
radius = 150;

//draw a circle
ctx.beginPath();
ctx.arc(center_x,center_y,radius,0,2*Math.PI);
ctx.stroke();

for(var i = 0; i < bars; i++){

    //divide a circle into equal parts
    rads = Math.PI * 2 / bars;

    bar_height = 100;
    bar_width = 2;

    x = center_x + Math.cos(rads * i) * (radius);
y = center_y + Math.sin(rads * i) * (radius);
    x_end = center_x + Math.cos(rads * i)*(radius + bar_height);
    y_end = center_y + Math.sin(rads * i)*(radius + bar_height);

    //draw a bar
    drawBar(x, y, x_end, y_end, bar_width);
}