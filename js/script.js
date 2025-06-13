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

const skillDescriptions = {
  C: `
    <div style="text-align: center;">
      <img src="assets/icon/c-icon.svg" alt="C icon" style="width: 100px; display: block; margin: 0 auto 10px;">
      <hr style="border: 0; border-top: 1px solid #ccc; margin-bottom: 10px;">
    </div>
    • C language<br><br>
    ▸ C 언어는 대학교 1학년 때 '프로그래밍/고급 프로그래밍' 수업을 통해 접하였으며 가장 많이 사용했고, 사용하고 있는 주 프로그래밍 언어입니다.<br>
    ▸ 이외에도 2학년 재학 중 자료구조 학습을 통해 지식을 확장하고 있으며, 포인터, 메모리 연산, 기본 자료구조 등을 다룰 수 있습니다.
  `,
  JavaScript: `
    <div style="text-align: center;">
      <img src="assets/icon/js-icon.svg" alt="JavaScript icon" style="width: 100px; display: block; margin: 0 auto 10px;">
      <hr style="border: 0; border-top: 1px solid #ccc; margin-bottom: 10px;">
    </div>
    • JavaScript<br><br>
    ▸ JavaScript는 대학교 2학년 때 '웹스크립트 프로그래밍' 수업을 통해 html과 함께 접하였으며 DOM과 객체를 이해하고 활용할 수 있습니다.<br>
    ▸ 해당 수업으로 흥미가 생겨 프론트엔드 개발자로써 필요한 역량을 채우고자 추후 TypeScript, Node.js, React에 대해 공부할 계획을 세우고 있습니다.
  `,
  Python: `
    <div style="text-align: center;">
      <img src="assets/icon/python-icon.svg" alt="Python icon" style="width: 100px; display: block; margin: 0 auto 10px;">
      <hr style="border: 0; border-top: 1px solid #ccc; margin-bottom: 10px;">
    </div>
    • Python<br><br>
    ▸ Python은 고등학생 때 Discord 봇 만들기 프로젝트를 통해 처음 접하였으며, 대학교 1학년 때 '창의적 사고와 코딩' 수업을 통해 흥미를 붙이게 되었으나, 그 이후로는 대학교에서 더 접할 기회가 없었기에 아쉽게 생각하고 있는 언어입니다.<br>
    ▸ 매우 직관적이고 간단한 특징에 매료되어 깊게 공부해보고싶은 언어 중 하나입니다.
  `
};

document.querySelectorAll('.skill-card-wrapper').forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const skill = wrapper.dataset.skill;
    const desc = skillDescriptions[skill] || '';
    document.getElementById('skill-description').innerHTML = desc;
    document.getElementById('skill-popup').classList.remove('hidden');
  });
});

document.querySelector('.skill-popup-close').addEventListener('click', () => {
  document.getElementById('skill-popup').classList.add('hidden');
});