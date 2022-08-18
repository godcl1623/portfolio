# portfolio

## **서비스 소개**

**portfolio**는 React.js 실습 및 기기에 최적화된 형태로 자기소개 정보를 제공하기 위한 프로젝트입니다.

## **목차**

- [portfolio](#portfolio)
  - [**서비스 소개**](#서비스-소개)
  - [**목차**](#목차)
  - [**프로젝트 구조**](#프로젝트-구조)
  - [**기능 명세 및 상세 화면**](#기능-명세-및-상세-화면)
    - [1. 메인 화면](#1-메인-화면)
    - [2. About 페이지](#2-about-페이지)
    - [3. Works 페이지](#3-works-페이지)
    - [4. Contact 창](#4-contact-창)
  - [**기술 스택**](#기술-스택)
    - [Front-End](#front-end)
  - [**기술적 고민**](#기술적-고민)
    - [해결한 문제](#해결한-문제)
  - [느낀 점](#느낀-점)
  - [프로젝트 실행 방법](#프로젝트-실행-방법)

## **프로젝트 구조**

```
📦portfolio
 ┣ 📂public
 ┃ ┣ 📜_redirects
 ┃ ┣ 📜index.html
 ┃ ┣ 📜logo192.png
 ┃ ┣ 📜logo512.png
 ┃ ┣ 📜manifest.json
 ┃ ┗ 📜robots.txt
 ┣ 📂src
 ┃ ┣ 📂components
 ┃ ┃ ┣ 📂about
 ┃ ┃ ┃ ┗ 📜About.js
 ┃ ┃ ┣ 📂core
 ┃ ┃ ┃ ┗ 📜Main.js
 ┃ ┃ ┣ 📂modal
 ┃ ┃ ┃ ┣ 📂contact
 ┃ ┃ ┃ ┃ ┗ 📜Contact.js
 ┃ ┃ ┃ ┣ 📂projects
 ┃ ┃ ┃ ┃ ┣ 📂layouts
 ┃ ┃ ┃ ┃ ┃ ┣ 📜BodySection.js
 ┃ ┃ ┃ ┃ ┃ ┣ 📜PageBtn.js
 ┃ ┃ ┃ ┃ ┃ ┗ 📜PageIndicator.js
 ┃ ┃ ┃ ┃ ┗ 📜Projects.js
 ┃ ┃ ┃ ┗ 📜Modal.js
 ┃ ┃ ┣ 📂utils
 ┃ ┃ ┃ ┣ 📜Carousel.js
 ┃ ┃ ┃ ┣ 📜Common.js
 ┃ ┃ ┃ ┣ 📜DividePara.js
 ┃ ┃ ┃ ┣ 📜GenArticle.js
 ┃ ┃ ┃ ┣ 📜GenContent.js
 ┃ ┃ ┃ ┗ 📜GenSection.js
 ┃ ┃ ┣ 📂works
 ┃ ┃ ┃ ┗ 📜Works.js
 ┃ ┃ ┗ 📜App.js
 ┃ ┣ 📂db
 ┃ ┃ ┣ 📂resources
 ┃ ┃ ┃ ┣ 📜project1.js
 ┃ ┃ ┃ ┣ 📜project2.js
 ┃ ┃ ┃ ┗ 📜project3.js
 ┃ ┃ ┣ 📜aboutData.js
 ┃ ┃ ┗ 📜projectsData.js
 ┃ ┣ 📂examples
 ┃ ┃ ┣ 📂crd
 ┃ ┃ ┃ ┗ 📜react_stock.jpg
 ┃ ┃ ┣ 📂libmng
 ┃ ┃ ┃ ┣ 📜libmng_meta_main.png
 ┃ ┃ ┃ ┣ 📜libmng_meta_media.png
 ┃ ┃ ┃ ┗ 📜libmng_thumbs_list.png
 ┃ ┃ ┗ 📂por
 ┃ ┃ ┃ ┣ 📜port_about.png
 ┃ ┃ ┃ ┣ 📜port_main.png
 ┃ ┃ ┃ ┗ 📜port_works_projects.png
 ┃ ┣ 📂modules
 ┃ ┃ ┗ 📜customfunctions.js
 ┃ ┣ 📂slices
 ┃ ┃ ┗ 📜index.js
 ┃ ┣ 📂styles
 ┃ ┃ ┣ 📜elementsPreset.js
 ┃ ┃ ┗ 📜presets.js
 ┃ ┣ 📂svgs
 ┃ ┃ ┣ 📜01-html.svg
 ┃ ┃ ┣ 📜02-css.svg
 ┃ ┃ ┣ 📜03-js.svg
 ┃ ┃ ┣ 📜04-react.svg
 ┃ ┃ ┣ 📜05-redux.svg
 ┃ ┃ ┣ 📜06-node.svg
 ┃ ┃ ┣ 📜07-mysql.svg
 ┃ ┃ ┗ 📜08-python.svg
 ┃ ┗ 📜index.js
 ┣ 📜.DS_Store
 ┣ 📜.eslintrc.json
 ┣ 📜.gitignore
 ┣ 📜.prettierrc
 ┣ 📜README.md
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┗ 📜yarn.lock
```

## **기능 명세 및 상세 화면**

### 1. 메인 화면

![https://user-images.githubusercontent.com/20578093/175293963-41dd0ac7-8ee1-465f-b30f-26d7b3c7a0fc.png](https://user-images.githubusercontent.com/20578093/175293963-41dd0ac7-8ee1-465f-b30f-26d7b3c7a0fc.png)

### 2. About 페이지

- 자기 소개, 기술 스택 소개
    ![https://user-images.githubusercontent.com/20578093/175293768-d5bc2992-2308-4e46-ae0e-a278dafad01a.png](https://user-images.githubusercontent.com/20578093/175293768-d5bc2992-2308-4e46-ae0e-a278dafad01a.png)

### 3. Works 페이지

- 현재까지 만든 개인 프로젝트를 소개
    ![https://user-images.githubusercontent.com/20578093/175294022-d9b8c4a0-34fc-4db9-b258-ea536d34f375.png](https://user-images.githubusercontent.com/20578093/175294022-d9b8c4a0-34fc-4db9-b258-ea536d34f375.png)

- 프로젝트는 모달창과 캐러셀 슬라이드를 통해 소개
    ![https://user-images.githubusercontent.com/20578093/175294381-9bd38e61-6630-4277-9401-f2273b0ff66d.png](https://user-images.githubusercontent.com/20578093/175294381-9bd38e61-6630-4277-9401-f2273b0ff66d.png)

### 4. Contact 창

![https://user-images.githubusercontent.com/20578093/175294736-da7b096c-62c7-415a-af39-a5b6cef55fff.png](https://user-images.githubusercontent.com/20578093/175294736-da7b096c-62c7-415a-af39-a5b6cef55fff.png)

## **기술 스택**

### Front-End

- React.js
  - JavaScript, 나아가 React.js의 실력 향상을 위해 React.js를 사용했습니다.
    - 함수형 컴포넌트와 Hook 등을 사용해 다양한 기기에서 최대한 비슷한 화면을 표시하는 것에 집중했습니다.
- Redux
  - 전역 상태 사용 경험과 Redux 자체에 대한 사용 경험을 쌓기 위해 도입했습니다.
  - 처음에는 재래적인 action, reducer, store 구조로 만들었으나 이후 redux-toolkit의 slice로 수정했습니다.
- React-router
  - 라우팅 개념 정립과 react-router 사용 경험을 쌓기 위해 도입했습니다.
  - 처음에는 v5로 작성했으나 이후 v6으로 업데이트를 진행했습니다.
- Emotion.js
  - 스타일 작성을 위해 CSS-in-JS 라이브러리인 Emotion.js를 사용했습니다.
    - CSS 문법을 그대로 사용할 수도, Styled Component 형태로 작성할 수도 있는 등 다양한 기법을 연습하는 데 유리하다 판단했기 때문입니다.
  - CSS-in-JS를 도입한 이유는 익숙한 문법 사용을 통해 효율성을 높이기 위해서입니다.
    - React.js의 경우 Class에 의해 스타일이 겹치는 문제가 발생해 기존처럼 CSS 파일을 사용하는 데 어려움이 있었습니다.
    - React.js에서 기본으로 제공하는 스타일 작성 방법은 직관적이긴 했지만, 기존의 CSS 문법과 차이가 있어 이질감이 느껴졌습니다.
    - 대안을 찾던 중 CSS-in-JS는 위와 같은 문제점을 해소할 수 있을 것으로 기대하여 선택했습니다.

## **기술적 고민**

### 해결한 문제

1. 캐러셀 애니메이션 효과 오류
    - **문제 상황**
        - 작업물을 소개하기 위한 캐러셀 컨테이너를 만드는 과정에서, 목록의 양 끝에 도착한 캐러셀이 반대쪽 끝으로 넘어갈 때 자연스럽게 넘어가지 않고 역순으로 넘어가는 과정이 표시됨
            - **예상했던 동작**: [1, 2, 3] 구조에서 3 → 1로 넘어갈 때 3 다음에 바로 1이 표시될 것으로 예상
            - **실제 동작**: [1, 2, 3] 구조에서 3 → 1로 넘어갈 때 3 → 2 → 1 순으로 넘어가는 과정이 그대로 표시됨
    - **접근 방법 및 해결**
        - **1차 원인 파악**: CSS `transition` 속성값의 최적화 문제
            - `transition`을 부여하지 않았을 경우 3 → 1로 자연스럽게 넘어갔지만, `transition`을 부여한 경우 3 → 2 → 1 순으로 넘어가는 과정이 표시됨
        - **1차 해결안**: 전환 효과가 부여되는 상태에서 3 → 1로 자연스럽게 넘어가는 값을 찾아 `transition` 속성에 할당함
        - **2차 문제**: 캐러셀 슬라이드를 빠르게 넘길 경우, 간헐적으로 3 → 2 → 1 순으로 넘어가는 과정이 표시되는 문제가 다시 발생함
        - **2차 해결안**: 캐러셀 구조의 특징에 대해 정보를 수집한 후, 기존에 아이템이 [1, 2, 3] 형식으로만 있던 배열의 양 끝에 반대쪽 끝 아이템을 새로 추가해 [3, 1, 2, 3, 1] 구조로 변경
            - 근본적인 문제는 캐러셀 구조라는 형태는 알지만, ‘캐러셀 구조’ 자체에 대한 지식이 없던 상황에서 발생한 문제였음
            - ‘슬라이드 형식’에 대해 검색해 이러한 구조가 ‘캐러셀 구조’라는 것을 알고, ‘캐러셀 구조의 원리’를 검색해 동작 원리에 대한 정보를 습득하여 문제 해결
    - **적용 결과**
        - 캐러셀 구조 완성
2. 캐러셀 Indicator - 실제 페이지 동기화 문제
    - **문제 상황**
        - 캐러셀 아이템을 빠르게 넘길 때 indicator와 실제 페이지가 불일치하는 현상 발생
    - **접근 방법 및 해결**
        - 원인 파악
            - 캐러셀 효과의 구현 방법이 원인이 되어 발생함
                - 목록 끝에서 클릭을 빠르게 할 경우 다음 아이템으로 넘어가는 효과가 재생됨과 동시에 목록의 반대쪽 끝으로 넘어가는 효과가 실행됨
                - 페이지 표시기 입장에서는 2번 입력이 발생해 표시 순서를 2번 변경했는데, 캐러셀 자체는 1번 입력을 받은 것으로 처리됐기 때문에 불일치가 발생함
        - 해결안
            - 페이지 표시기 또한 캐러셀 효과와 동일한 방식으로 순서가 변경되도록 로직을 수정함
            - 즉, 목록의 끝에 도달했을 때 다음 아이템으로 넘어가려 할 경우 목록의 반대쪽 끝으로 강제로 페이지를 이동
            - 추가로 목록의 끝에서 반대쪽 끝으로 이동할 때 버튼을 강제로 비활성화시켜 무리한 조작으로 인해 오류가 발생할 수 있는 가능성을 차단함
    - **적용 결과**
        - 캐러셀 페이지 전환 효과를 자연스럽게 구현하는 한편, 무리한 사용자 조작에도 문제가 발생하지 않게 됨

## 느낀 점

- React를 배운 후 처음으로 만들어본 프로젝트였기 때문에, 뭐가 뭔지 잘 모르는 상태로 만들어 아쉬운 점이 많은 것 같습니다.
  - 특히 재사용성과 관련해 아쉬운 점이 많은데, 만들 당시부터 리팩토링을 진행할 때도 각 컴포넌트의 재사용성을 의식했지만 충분하지 못했던 것 같습니다.
- 이번 프로젝트에서 주된 구현 사항은 다음과 같습니다.
  1. 페이지 이동 간 애니메이션 효과 구현
     - 원리는 다음과 같습니다.
       1. 페이지 이동 버튼을 클릭할 경우 전역 플래그의 값을 수정
       2. 전역 플래그의 값이 바뀌면 opacity, transition 등의 값을 조정해 페이지 컴포넌트를 숨김
       3. react-router의 useNavigate를 사용해 페이지를 이동함
  2. 수동 캐러셀, 타이머 캐러셀 구현
     - 처음에는 상위 컴포넌트에 종속적으로 캐러셀을 구현했었으나, 리팩토링을 통해 별도의 캐러셀 컴포넌트로 분리했습니다.
     - 그 결과 버튼을 통해 수동으로 페이지를 넘기는 수동 캐러셀, 타이머를 이용해 자동으로 페이지를 넘기는 타이머 캐러셀을 구현해 프로젝트를 소개할 수 있게 됐습니다.

## 프로젝트 실행 방법

- 프로젝트 클론

    ```bash
    # 현재 디렉터리에 클론하는 경우
    $ git clone https://github.com/godcl1623/portfolio.git .

    # 하위 디렉터리에 클론하는 경우
    $ git clone https://github.com/godcl1623/portfolio.git ./godcl1623-portfolio
    ```

- 프로젝트 실행

    ```bash
    # 필요 패키지 설치
    $ yarn
    
    # develop 서버 실행
    $ yarn start
    ```
