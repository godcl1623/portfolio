import source1 from '../../examples/crd/react_stock.jpg';

const data = {
  header: 'clone-react-dnd',
  images: [source1],
  icons: ['Icon 1', 'Icon 2', 'Icon 3'],
  comment: `
  # 목적 및 기능
  - Library Manager 앱에 드래그 앤 드롭 기능 추가 및 클론 코딩을 통한 React.js 이해도 제고
  - 연산 수행 및 상태 관리 수행을 통해 사용자의 드래그 앤 드롭 기능 구현의 보조

  # 주요 기술
  ## ※ Front-End
  ### ▷ React.js
  - React.js의 Custom Hook을 사용한 기능 개발을 목표로 삼았습니다.
    - 이전 프로젝트에서 React.js는 계속 사용해 왔으나, Custom Hook은 직접 구현해본 경험이 없었기 때문입니다.
    - 실제로 배포하진 않았으나, npm 등 패키지 매니저를 통해 설치 및 사용하는 것을 상정하고 개발을 진행했습니다.
  ### ▷ Zustand
  - 글로벌 상태 관리 및 Redux 이외의 상태 관리 라이브러리 체험을 위해 사용했습니다.
  
  # 기술적 고민
  ## > 해결한 문제
  ### ▷ 요약
  - 기존에 사용해오던 react-redux로는 프로젝트 외부에서 글로벌 상태 관리가 불가능하여 Zustand 라이브러리로 변경

  ### ▷ 문제 상황
  - 글로벌 상태 관리로 사용해오던 react-redux는 프로젝트 내부 테스트 환경에서는 잘 작동했으나, 라이브러리 설치를 상정한 환경에서는 사용할 수 없었음
    - 커스텀 훅을 만든 후 프로젝트 내부에서 테스트하는 경우 react-redux로도 글로벌 상태 관리에 문제가 없었음
    - 커스텀 훅만 별도의 폴더에 분리해 다른 프로젝트에 로컬 설치하여 사용할 경우 상태관리 기능이 작동하지 않음

  ### ▷ 접근 방법
  - 원인 파악
    - 조사 결과, 라이브러리를 외부 프로젝트에 설치하는 환경에서는 react-redux를 사용할 수 없다는 것을 발견함

  - 대안 조사
    - npm trends를 기준으로 redux 계열을 제외한 상태 관리 라이브러리 종류를 목록화
    - 조사 시점 기준 가장 인기 있는 라이브러리인 MobX와 Zustand를 비교함
    - 둘 중 함수형 컴포넌트에 좀 더 적합하다는 평을 받은 Zustand를 사용하기로 결정함

  ### ▷ 적용 결과
  - 프로젝트 내부 테스트 환경에서도, 외부 프로젝트에 라이브러리 형태로 설치한 상황에서도 동일하게 작동하는 것을 확인

  ## > 해결이 필요한 문제
  ### ▷ 카테고리 부여 로직
  - 문제
    - 중첩 구조 내의 요소마다 카테고리를 부여하는 로직을 구현했으나, 설계 오류로 인해 예상했던 것과 다른 방향으로 작동
  - 예상 원인 및 해결 방법
    - DOM 요소의 중첩 구조를 읽어 들이기 위해 작성한 BFS 구조 코드의 설계 오류로 인해 발생한 문제이므로, 알고리즘 구조 수정이 필요
  ### ▷ 과도한 사용자 역할
  - 문제
    - 라이브러리를 사용해 실제로 드래그 앤 드롭 기능을 구현할 때 라이브러리 역할의 비중이 작음
  - 예상 원인 및 해결 방법
    - 현재 문제의 원인은 단순히 드래그 앤 드롭 구현을 위해 필요한 수치만 제공하는 것에 있음
    - 드래그 앤 드롭 구현을 위해 이벤트 핸들러에서 작성하는 코드 중 라이브러리로 처리할 수 있는 부분은 라이브러리가 처리하도록 작성
  `,
  links: [
    {
      name: 'GITHUB',
      address: 'https://github.com/godcl1623/CLONE-react-dnd'
    }
  ]
}

export default data;