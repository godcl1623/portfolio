import source301 from '../../examples/por/port_main.png';
import source302 from '../../examples/por/port_about.png';
import source303 from '../../examples/por/port_works_projects.png';

const data = {
  header: 'portfolio',
  images: [source301, source302, source303],
  icons: ['Icon 1', 'Icon 2', 'Icon 3', 'Icon 4'],
  comment: `
  # 목적 및 기능
  - React.js 실습 및 기기에 최적화된 형태로 자기소개 정보 제공

  # 주요 기술
  ## ※ Front-End
  ### ▷ React.js
  - JavaScript, 나아가 React.js의 실력 향상을 위해 React.js를 사용했습니다.
    - 함수형 컴포넌트와 Hook 등을 사용해 다양한 기기에서 최대한 비슷한 화면을 표시하는 것에 집중했습니다.
  ### ▷ Emotion.js
  - 스타일 작성을 위해 CSS-in-JS 라이브러리인 Emotion.js를 사용했습니다.
    - CSS 문법을 그대로 사용할 수도, Styled Component 형태로 작성할 수도 있는 등 다양한 기법을 연습하는 데 유리하다 판단했기 때문입니다.
  - CSS-in-JS를 도입한 이유는 익숙한 문법 사용을 통해 효율성을 높이기 위해서입니다.
    - React.js의 경우 Class에 의해 스타일이 겹치는 문제가 발생해 기존처럼 CSS 파일을 사용하는 데 어려움이 있었습니다.
    - React.js에서 기본으로 제공하는 스타일 작성 방법은 직관적이긴 했지만, 기존의 CSS 문법과 차이가 있어 이질감이 느껴졌습니다.
    - 대안을 찾던 중 CSS-in-JS는 위와 같은 문제점을 해소할 수 있을 것으로 기대하여 선택했습니다.
  
  # 기술적 고민
  ## > 해결한 문제
  ### ▷ 문제 상황
  - 작업물을 소개하기 위한 캐러셀 컨테이너를 만드는 과정에서, 목록의 양 끝에 도착한 캐러셀이 반대쪽 끝으로 넘어갈 때 자연스럽게 넘어가지 않고 역순으로 넘어가는 과정이 표시됨
    - 예상했던 동작: [1, 2, 3] 구조에서 3 → 1로 넘어갈 때 3 다음에 바로 1이 표시될 것으로 예상
    - 실제 동작: [1, 2, 3] 구조에서 3 → 1로 넘어갈 때 3 → 2 → 1 순으로 넘어가는 과정이 그대로 표시됨

  ### ▷ 접근 방법
  - 1차 원인 파악: CSS transition 속성값의 최적화 문제
    - transition을 부여하지 않았을 경우 3 → 1로 자연스럽게 넘어갔지만, transition을 부여한 경우 3 → 2 → 1 순으로 넘어가는 과정이 표시됨
  - 1차 해결안: 전환 효과가 부여되는 상태에서 3 → 1로 자연스럽게 넘어가는 값을 찾아 transition 속성에 할당함
  - 2차 문제: 캐러셀 슬라이드를 빠르게 넘길 경우, 간헐적으로 3 → 2 → 1 순으로 넘어가는 과정이 표시되는 문제가 다시 발생함
  - 2차 해결안: 캐러셀 구조의 특징에 대해 정보를 수집한 후, 기존에 아이템이 [1, 2, 3] 형식으로만 있던 배열의 양 끝에 반대쪽 끝 아이템을 새로 추가해 [3, 1, 2, 3, 1] 구조로 변경
    - 근본적인 문제는 캐러셀 구조라는 형태는 알지만, ‘캐러셀 구조’ 자체에 대한 지식이 없던 상황에서 발생한 문제였음
    - ‘슬라이드 형식’에 대해 검색해 이러한 구조가 ‘캐러셀 구조’라는 것을 알고, ‘캐러셀 구조의 원리’를 검색해 동작 원리에 대한 정보를 습득하여 문제 해결
      
  ### ▷ 적용 결과
  - 캐러셀 구조 완성 

  ## > 해결이 필요한 문제
  ### ▷ 캐러셀 Indicator와 실제 페이지가 일치하지 않는 문제
  - 문제: 캐러셀 아이템을 빠르게 넘길 때 indicator와 실제 페이지가 불일치하는 현상 발생
  - 예상 원인
    - 페이지 표시와 Indicator 표시에 서로 다른 Redux State를 사용 중인데, 아이템을 빠르게 넘길 때 페이지 표시 State가 갱신되지 않았음에도 Indicator State가 갱신돼 발생한 것으로 추정
  - 해결 방법:
    - 캐러셀 아이템과 Indicator가 동일한 State를 사용하도록 변경
  `,
  links: [
    {
      name: 'GITHUB',
      address: 'https://github.com/godcl1623/portfolio'
    },
    {
      name: 'DEMO',
      address: 'https://lch-portfolio.netlify.app'
    }
  ]
}

export default data;