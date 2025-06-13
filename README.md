# 🌐 웹 스크립트 프로그래밍 – 자기 이력 홈페이지 만들기
한남대학교 컴퓨터공학과 20222328 윤여명
> 이것은 개인 포트폴리오이며 HTML, CSS, JavaScript를 이용하여 만든 웹 사이트입니다.
---

## 프리뷰

[🔗 깃허브 프로필 링크 (윤여명)](https://github.com/Sernn0)

[🔗 웹 바로가기 링크](https://sernn0.github.io/Sernn0/)

---

## 기능

### 디자인
- 별도의 템플릿을 사용하지 않음
- 수업시간에 배우지 않은 내용은 ChatGPT의 도움을 받음
- Canvas 기반 삼각형 배경 애니메이션

### 프로그래밍 언어 활용 능력
- Python / JavaScript / C 언어에 대한 활용 능력 카드 표시
- 각 카드를 클릭하면 설명 모달 팝업 등장
- 우상단 x를 클릭하여 창 닫기 가능
<details>
<summary>코드 위치 및 설명</summary>

- 파일 별 관련 코드
    - 'index.html'
        - line 166~
            ```html
            <div id="skill-popup" class="skill-popup hidden">
              <div class="skill-popup-content">
                <span class="skill-popup-close">&times;</span>
                <p id="skill-description"></p>
              </div>
            </div>
            ```
            - id="skill-popup"인 외부 컨테이너는 어두운 배경을 포함한 모달의 전체 영역임
            - class="hidden"으로 기본적으로 화면에서 숨겨져 있음
            - span.skill-popup-close는 닫기 버튼으로 작동함 (&times = × 표시)
            - #skill-description은 JS에서 선택된 언어에 대한 설명을 삽입하는 공간임

        - line 25, 34, 43
            ```html
            <div class="skill-card-wrapper" data-skill="C">...</div>
            <div class="skill-card-wrapper" data-skill="JavaScript">...</div>
            <div class="skill-card-wrapper" data-skill="Python">...</div>
            ```
            - 위는 모달 팝업을 트리거하는 요소임

    - 'style.css'
        - line 283~
            ```css
            .skill-popup {
              position: fixed;
              ...
            }
            ```
            - fixed로 고정되어 스크롤과 무관하게 모달 팝업이 항상 화면 중앙에 표시됨

        - line 295~
            ```css
            .skill-popup.hidden {
              display: none;
            }
            ```
            - 모달을 보이지 않게 하는 클래스, JS에서 이 모달을 열고 닫을 때 해당 클래스를 추가/제거함

        - line 298~
            ```css
            .skill-popup-content {
              ...
              position: relative;
            }
            ```
            - 닫기 버튼의 위치 설정을 위해 position: relative 사용

        - line 307~
            ```css
            .skill-popup-close {
              ...
              cursor: pointer;
              ...
            }
            ```
            - 모달 우상단의 닫기 버튼을 클릭 가능한 포인터로 설정

        - line 315~
            ```css
            #skill-description {
              text-align: left;
            }
            ```
            - 모달 상자 내부의 설명 텍스트를 왼쪽으로 정렬

    - 'script.js'
        - line 112~
            ```js
            // 모달 설명 객체 정의
            const skillDescriptions = {
              C: `<div>...</div>`,
              JavaScript: `<div>...</div>`,
              Python: `<div>...</div>`
            };

            // 각 카드 클릭 시 모달 열기
            document.querySelectorAll('.skill-card-wrapper').forEach(wrapper => {
              wrapper.addEventListener('click', () => {
                const skill = wrapper.dataset.skill;
                const desc = skillDescriptions[skill] || '';
                document.getElementById('skill-description').innerHTML = desc;
                document.getElementById('skill-popup').classList.remove('hidden');
              });
            });

            // X 버튼 클릭 시 모달 닫기
            document.querySelector('.skill-popup-close').addEventListener('click', () => {
              document.getElementById('skill-popup').classList.add('hidden');
            });
            ```
            - 카드 클릭 시: `.skill-card-wrapper`에 `click` 이벤트 등록, `data-skill` 값을 기반으로 설명 모달을 표시함
            - 팝업 내용: `skillDescriptions` 객체에서 해당 언어의 HTML 콘텐츠를 가져와 삽입함
            - X 버튼 클릭 시: `.skill-popup-close` 클릭 시 `.hidden` 클래스를 추가하여 팝업 닫힘

</details>

### 프로젝트 캐러셀
- 프로젝트는 캐러셀 형태로 구성
- 좌우 화살표 버튼으로 항목 전환
- 레이아웃 반응형 및 통일된 높이 설정
<details>
<summary>코드 위치 및 설명</summary>

- 파일 별 관련 코드
    - 'index.html'
        - line 55~
            ```html
            <section id="projects">
              <h2>프로젝트</h2>
              <div class="project-carousel-container">
                <span class="project-nav left">&#10094;</span>
                <div class="project-carousel">
                  <div class="project-card"> ... </div>
                  <div class="project-card"> ... </div>
                  <div class="project-card"> ... </div>
                  <div class="project-card"> ... </div>
                  <div class="project-card"> ... </div>
                </div>
                <span class="project-nav right">&#10095;</span>
              </div>
            </section>
            ```
            - `<section id="projects">`: 전체 프로젝트 영역을 감싸는 섹션임
            - `<div class="project-carousel-container">`: 캐러셀 전체 틀 및 버튼 포함임
            - `<span class="project-nav left/right">`: 좌우 방향 화살표 버튼임 (〈: lang, 〉: rang)
            - `<div class="project-carousel">`: 캐러셀 슬라이드 전체를 감싸는 컨테이너임
            - `<div class="project-card">`: 각각의 개별 프로젝트 항목임 (총 5개)

    - 'style.css'
        - 작동 원리 설명과는 거리가 멀기에 생략

    - 'script.js'
        - line 155~
            ```js
            // 현재 표시 중인 프로젝트 인덱스
            let currentProjectIndex = 0;

            // 모든 프로젝트 카드 요소 수집
            const projectCards = document.querySelectorAll('.project-card');
            const totalProjects = projectCards.length;

            // 현재 인덱스에 해당하는 프로젝트만 보이도록 표시 업데이트
            function updateProjectDisplay() {
              projectCards.forEach((card, index) => {
                card.style.display = index === currentProjectIndex ? 'block' : 'none';
              });
            }

            // 왼쪽 화살표 클릭 시 이전 프로젝트로 이동
            document.querySelector('.project-nav.left').addEventListener('click', () => {
              currentProjectIndex--;
              if (currentProjectIndex < 0) {
                currentProjectIndex = totalProjects - 1;
              }
              updateProjectDisplay();
            });

            // 오른쪽 화살표 클릭 시 다음 프로젝트로 이동
            ocument.querySelector('.project-nav.right').addEventListener('click', () => {
              currentProjectIndex++;
              if (currentProjectIndex >= totalProjects) {
                currentProjectIndex = 0;
              }
              updateProjectDisplay();
            });

            // 초기화 시 첫 번째 프로젝트만 보이도록 설정
            updateProjectDisplay();
            ```
            - `currentProjectIndex`: 현재 보이는 프로젝트의 인덱스를 추적함
            - `projectCards`: 모든 프로젝트 카드를 배열로 수집함
            - `updateProjectDisplay()`: 카드 표시/숨김 처리 (하나만 block, 나머지는 none)
            - `.project-nav.left` 클릭: 인덱스를 감소시켜 이전 프로젝트 표시 (음수가 되면 마지막 요소 표시)
            - `.project-nav.right` 클릭: 인덱스를 증가시켜 다음 프로젝트 표시 (인덱스를 넘어가면 첫 번째 요소 표시)

</details>

### 아이콘 이미지를 통한 콘택트(SNS) 링크
- 하단 Contact 영역에 Github, Instagram, Discord 아이콘 배치
- 각각의 아이콘은 해당 플랫폼 프로필 링크로 연결됨
- `Contact` 라벨로 섹션 구분을 명확히 하여 사용자가 쉽게 인식 가능