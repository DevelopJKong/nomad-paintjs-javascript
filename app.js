const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

canvas.width = 800;
canvas.height = 800;

ctx.fillRect(210 - 40 , 200 - 10, 15, 100);
ctx.fillRect(360 - 40 , 200 - 10, 15, 100);
ctx.fillRect(260 - 40 , 200 - 10, 60, 200);
ctx.arc(250, 100, 50, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath();
ctx.fillStyle = "red";
ctx.arc(260,80,5,0,2 * Math.PI);
ctx.arc(220,80,5,0,2 * Math.PI);
ctx.fill();


//지붕 만들기
// ctx.fillRect(200, 200, 50, 200);
// ctx.fillRect(400, 200, 50, 200);
// ctx.lineWidth = 2;
// ctx.strokeRect(300, 300, 50, 100);
// ctx.fillRect(200, 200, 200, 20);
// ctx.moveTo(200, 200);
// ctx.lineTo(325, 100);
// ctx.lineTo(450, 200);
// ctx.stroke();

//// ctx.moveTo(50, 50);
//// ctx.lineTo(100, 50);
//// ctx.lineTo(100, 100);
//// ctx.lineTo(50, 100);
//// ctx.lineTo(50, 50);
//// ctx.stroke();
////

// // ctx.rect(50,50,100,100);
// // ctx.rect(150,150,100,100);
// // ctx.rect(250,250,100,100);
// // ctx.fill();
// //
// // ctx.beginPath();
// // ctx.rect(350,350,100,100);
// // ctx.fillStyle = "red";
// // ctx.fill();
