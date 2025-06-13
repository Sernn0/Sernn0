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
    const gray = Math.floor(100 + Math.random() * 100);
    let sizeCategory = Math.random();
    let size;
    if (sizeCategory < 0.05) {
      size = 20 + Math.random() * 20; // very small (5%)
    } else if (sizeCategory < 0.25) {
      size = 35 + Math.random() * 25; // small (20%)
    } else if (sizeCategory < 0.55) {
      size = 70 + Math.random() * 40; // medium (30%)
    } else {
      size = 130 + Math.random() * 50; // large (45%)
    }
    let xZone = Math.random();
    let x;
    if (xZone < 0.3) {
      x = Math.random() * (width / 6); // Region 1
    } else if (xZone < 0.45) {
      x = width / 6 + Math.random() * (width / 6); // Region 2
    } else if (xZone < 0.5) {
      x = width / 3 + Math.random() * (width / 6); // Region 3
    } else if (xZone < 0.55) {
      x = width / 2 + Math.random() * (width / 6); // Region 4
    } else if (xZone < 0.7) {
      x = (2 * width) / 3 + Math.random() * (width / 6); // Region 5
    } else {
      x = (5 * width) / 6 + Math.random() * (width / 6); // Region 6
    }
    triangles.push({
      x,
      y: Math.random() * height,
      size,
      speed: 0.2 + Math.random() * 0.3,
      alpha: 0.05 + Math.random() * 0.2,
      color: (() => {
        const alpha = 0.05 + Math.random() * 0.2;
        const r = Math.random();
        if (r < 0.06) {
          return `rgba(200, 150, 255, ${alpha})`; // light purple
        } else if (r < 0.12) {
          return `rgba(255, 180, 200, ${alpha})`; // light pink
        } else {
          return `rgba(${gray}, ${gray}, ${gray}, ${alpha})`; // grayscale
        }
      })(),
      direction: Math.random() < 0.3 ? 'down' : 'up'
    });
  }
}

function drawTriangles() {
  ctx.clearRect(0, 0, width, height);
  for (const tri of triangles) {
    ctx.fillStyle = tri.color;
    ctx.beginPath();
    if (tri.direction === 'down') {
      ctx.moveTo(tri.x, tri.y);
      ctx.lineTo(tri.x - tri.size / 2, tri.y - tri.size);
      ctx.lineTo(tri.x + tri.size / 2, tri.y - tri.size);
    } else {
      ctx.moveTo(tri.x, tri.y);
      ctx.lineTo(tri.x - tri.size / 2, tri.y + tri.size);
      ctx.lineTo(tri.x + tri.size / 2, tri.y + tri.size);
    }
    ctx.closePath();
    ctx.fill();

    if (tri.direction === 'down') {
      tri.y += tri.speed;
      if (tri.y - tri.size > height) {
        tri.y = -tri.size;
      }
    } else {
      tri.y -= tri.speed;
      if (tri.y + tri.size < 0) {
        tri.y = height + tri.size;
      }
    }
  }
  requestAnimationFrame(drawTriangles);
}

window.addEventListener('resize', () => {
  resizeCanvas();
  createTriangles(50);
});

resizeCanvas();
createTriangles(50);
drawTriangles();