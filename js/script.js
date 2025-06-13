// 기하학적인 배경 애니메이션 (간단한 폴리곤 효과)
const canvas = document.getElementById('bg-pattern');
const ctx = canvas.getContext('2d');

let width, height;
let triangles = [];

function resizeCanvas() {
  width = window.innerWidth;
  height = window.innerHeight;
  canvas.width = width;
  canvas.height = height;
}

function createTriangles(count) {
  triangles = [];
  for (let i = 0; i < count; i++) {
    triangles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      size: 20 + Math.random() * 30,
      speed: 0.2 + Math.random() * 0.3,
      alpha: 0.1 + Math.random() * 0.2
    });
  }
}

function drawTriangles() {
  ctx.clearRect(0, 0, width, height);
  ctx.fillStyle = '#fff';
  for (const tri of triangles) {
    ctx.beginPath();
    ctx.moveTo(tri.x, tri.y);
    ctx.lineTo(tri.x - tri.size / 2, tri.y + tri.size);
    ctx.lineTo(tri.x + tri.size / 2, tri.y + tri.size);
    ctx.closePath();
    ctx.globalAlpha = tri.alpha;
    ctx.fill();
    ctx.globalAlpha = 1;

    tri.y -= tri.speed;
    if (tri.y + tri.size < 0) {
      tri.y = height + tri.size;
    }
  }
  requestAnimationFrame(drawTriangles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createTriangles(60);
});

resizeCanvas();
createTriangles(60);
drawTriangles();