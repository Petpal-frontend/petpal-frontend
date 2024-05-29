 <h1>PetPal 🐾</h1>

![intro](https://github.com/Petpal-frontend/petpal-frontend/assets/138556024/999251f8-781f-489b-b432-7128e366c7d6)

  <h3>펫팔, 펫과 펜팔, 두근두근 우리만의 소통 시작 </h3>
</div>

<br/>

### 배포 링크

👉 [PetPal 바로가기](https://petpalofficial.netlify.app/)

### 테스트 계정

```
ID: petpal@test.com
PW: 123123
```

## 1. 서비스 소개

반려동물을 사랑하는 이들을 위한 온라인 커뮤니티, 펫팔을 소개합니다!

펫팔은 지역 기반 서비스를 활용해 내가 사는 동네 근처에서 필요한 용품을 중고로 사거나 판매할 수 있고,
나와 가까운 곳에 사는 반려인들과 연결되어 새로운 산책 메이트를 찾는 것이 쉬워집니다.
여행이나 긴급한 일로 집을 비워야 할 때는 근처의 돌보미를 찾아 반려동물을 안심하고 맡길 수 있습니다.

펫팔과 함께라면, 멀리 가지 않아도 내 지역 내에서 모든 반려동물 관련 커뮤니티를 누릴 수 있습니다.

<br/>
<br/>

## 2. 팀원 소개

|            [🔗 김소리](https://github.com/sorikikikim)             |                                       [🔗 류경민](https://github.com/kmryuuu)                                        |             [🔗 최지완](https://github.com/jiwanchoi)              |               [🔗 최현아](https://github.com/hhyunn)                |
| :----------------------------------------------------------------: | :------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------: | :-----------------------------------------------------------------: |
| <img src="https://avatars.githubusercontent.com/u/73383923?v=4" /> | <img src="https://avatars.githubusercontent.com/u/138556024?s=400&u=c59a7dfd776d2944acc017d76dcbeed71d1174bf&v=4" /> | <img src="https://avatars.githubusercontent.com/u/54405518?v=4" /> | <img src="https://avatars.githubusercontent.com/u/110486454?v=4" /> |

<br/>
<br/>

## 3. 역할 분담

![image](https://github.com/Petpal-frontend/petpal-frontend/assets/138556024/da7c4e50-c5f7-4dd9-b369-9cff6351277a)

<br/>
<br/>

## 4. 개발 일정

|          기간           |                         |
| :---------------------: | :---------------------: |
| 2023.10.12 - 2023.10.19 | 프로젝트 기획 및 디자인 |
| 2023.10.15 - 2023.10.18 |   프로젝트 기초 세팅    |
| 2023.10.19 - 2023.10.29 |      페이지 마크업      |
| 2023.10.30 - 2023.11.05 |        기능 구현        |
|      2023.11.06 -       |        리팩토링         |

<br/>
<br/>

## 5. 기술 스택 및 개발 환경

<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" /> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=ffd35b" /> <img src="https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232a" />  
| 구분 | |
| :---: | --- |
| **사용 기술** | 프론트엔드: React, Recoil, Axios, styled-components, JavaScript <br/> 백엔드: 제공된 API 사용 |
| **컨벤션** | ESLint, Prettier |
| **협업** | Git, GitHub, Notion, Discord, Figma |
| **IDE** | VSCode |
| **배포** | netlify |

<br/>

### 라이브러리 사용 이유

- Recoil: 간편한 전역 상태 관리와 접근을 위해 사용했습니다.
- Axios: 간편한 HTTP 요청을 위해 사용했습니다.
- styled-components: 스타일 캡슐화로 코드의 가독성과 유지보수 향상을 위해 사용했습니다.
- react-router-dom: 페이지 라우팅을 위해 사용했습니다.

<br/>

### 컨벤션

#### eslint

```
{
  "extends": ["react-app", "prettier"],
  "rules": {
    "indent": ["error", 2, { "SwitchCase": 1 }],
    "no-var": "error",
    "require-await": "error",
    "eqeqeq": "warn",
    "react/prop-types": 0,
    "no-unused-vars": "off"
  }
}
```

#### prettier

```
{
  "singleQuote": true,
  "semi": true,
  "tabWidth": 2,
  "trailingComma": "all",
  "printWidth": 80,
  "arrowParens": "avoid",
  "endOfLine": "auto"
}
```

#### 커밋 컨벤션

```
✨ Feat: 기능 추가, 삭제, 변경
🐛 Fix: 버그, 오류 수정
📝 Docs: readme.md, json 파일 등 수정, 라이브러리 설치 (문서 관련, 코드 수정 없음)
🎨 Style: CSS 등 사용자 UI 디자인 변경 (제품 코드 수정 발생, 코드 형식, 정렬 등의 변경)
♻️ Refactor: 코드 리팩토링
🧪 Test: 테스트 코드 추가, 삭제, 변경 등 (코드 수정 없음, 테스트 코드에 관련된 모든 변경에 해당)
⚙️ Config: npm 모듈 설치 등
🌱 Chore: 패키지 매니저 설정할 경우, etc 등 (ex. gitignore)
💬 Comment: 필요한 주석 추가 및 변경
🚚 Rename: 파일 또는 폴더 명을 수정하거나 옮기는 작업만인 경우
🚚 Remove: 파일을 삭제하는 작업만 수행한 경우
```

<br/>
<br/>

## 6. 폴더 구조

```
petpal-frontend                     # git 저장소 # 여기서 git 작업을 해야합니다.
└── 📁 petpal                       # react 프로젝트 # 여기서 npm start를 해야합니다.
    ├── 📁 node_modules             # 의존성 모듈
    ├── 📁 public                   # 정적 파일 (index.html, 이미지 등)
    │   ├── favicon.ico
    │   └── index.html
    ├── 📁 src                      # 소스 코드
    │    ├── 📂 api                 # Axios 인스턴스 및 API 관련 모듈 함수
    │    ├── 📂 assets              # 폰트, 이미지 등 정적 리소스
    │    ├── 📂 atoms               # 리코일 관련 폴더
    │    ├── 📁 components          # 컴포넌트 (재사용 가능한 UI 컴포넌트가 위치하는 디렉토리)
    │    ├── 📁 mock                # mock 데이터 폴더
    │    ├── 📁 pages               # 페이지 컴포넌트 (컴포넌트로 구성하는 페이지)
    │    ├── 📁 styles              # 전역으로 적용할 css 파일들이 포함된 폴더
    │    │   ├── fonts.css
    │    │   └── GlobalStyle.jsx
    │    ├── App.js                 # 루트 앱 컴포넌트
    │    └── index.js               # 앱 진입점
    ├── .eslintrc.json              # eslint 설정 파일
    ├── .gitignore                  # Git으로 추적하지 않을 파일/폴더 목록
    ├── .prettierrc                 # prettier 설정 파일
    ├── package-lock.json           # 의존성 버전 잠금
    ├── package.json                # 프로젝트 설정 및 의존성
    └── README.md                   # 프로젝트 문서
```

<br/>
<br/>

## 7. Git Branch 전략 - Git + Github Flow

### 프로젝트 Gitflow 전략

이 프로젝트는 Git flow와 Github flow 전략을 함께 사용해 개발 및 관리했습니다.
팀 구성원 간의 업무 분담, 기능 개발, 버그 수정, 출시 및 유지 보수를 효과적으로 관리하기 위한 일련의 규칙과 프로세스를 지켰습니다.

### Gitflow 개요

main, dev, feature/기능명 브랜치를 사용했습니다.

- **main**: 안정적인 프로덕션 버전을 관리하는 브랜치입니다.
- **dev**: 다음 릴리스를 위한 개발 중인 기능을 통합하는 브랜치입니다.
- **feature/**: 새로운 기능 개발을 위한 브랜치입니다.

이번 개발 기간동안에는 사용하지 못했지만 리펙토링 기간에는 다음의 브랜치를 활성화 할 예정입니다.

- **bugfix/**: 버그 수정을 위한 브랜치입니다.
- **hotfix/**: 긴급한 버그 수정을 위한 브랜치입니다.

### 작업 흐름

1. 프로젝트에 참여하기 전, 개발자는 `dev` 브랜치로부터 새로운 `feature/기능명` 브랜치를 생성합니다.
2. 기능 개발이 완료되면, `dev` 브랜치로 Pull Request를 생성하고 코드 리뷰를 진행합니다.
3. 코드 리뷰 및 변경 사항 반영 후, `dev` 브랜치로 병합합니다.
4. 주기적으로 프로젝트의 안정적인 상태를 유지하기 위해 `dev` 브랜치를 `main` 브랜치로 병합하여 새로운 프로덕션 버전을 배포합니다.

<br/>
<br/>

## 8. 주요 기능

### 1) 홈

|                                                           스플래시 페이지                                                           |                                                           회원가입 페이지                                                            |                                                            로그인 페이지                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/b4dab298-bf46-4689-93d9-e8d892597608' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/ef07189e-1604-4647-9631-97cc4b9b16e1' height='480px' /> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/67a9a6a8-f5aa-4b0b-be2d-8dd2838bf7cb' height='480px'/> |

|                                                              홈 페이지                                                              |                                                             검색 페이지                                                             |
| :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/cc6822d7-2e4a-44d7-b47c-7662756994e3' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/f0b3ed18-3bdb-4b6b-92f2-7b6031f8ca94' height='480px'/> |

### 2) 피드

|                                                             피드 페이지                                                             |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/c9ed5017-92bb-4938-8fd7-8203f1efe7c8' height='480px'/> |

### 3) 게시물

#### 산책메이트, 돌보미

|                                                                                                                           게시물 목록 페이지                                                                                                                            |                                                                                                                           게시물 상세 페이지                                                                                                                            |                                                                                                                           게시물 작성 페이지                                                                                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/b0108255-9f03-4636-be94-d84022e73463' height='380px'/> <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/1f8f88ce-be23-4c24-b0e8-50912210e2ab' height='380px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/8d528176-c57c-410f-a31c-e155f6de16af' height='380px'/> <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/87e0f66c-97e9-4482-94da-1604adfb4ee2' height='380px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/d58df0c3-b183-435b-9557-7786b8b23b24' height='380px'/> <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/7023499a-0934-4d26-b5e0-15d8d9798ae0' height='380px'/> |

|                                                         게시물 수정 페이지                                                          |                                                             게시물 삭제                                                             |
| :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/3c9b35ec-84fd-4060-a2e5-cea3a34c4f98' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/55b292fc-b191-4359-aa42-94cda84f7e2c' height='480px'/> |

|                                                             좋아요 기능                                                             |                                                        댓글 작성, 삭제 기능                                                         |                                                              댓글 신고                                                              |
| :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/81c86621-ba94-4029-a3e9-960a8e9b99b2' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/dd0a9211-8289-4f9f-81bc-46c6d97d1d79' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/5a54379a-7129-4f5c-96f1-d827bfc21cfe' height='480px'/> |

### 4) 채팅

|                                                      채팅 목록, 채팅방 페이지                                                       |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/32a5f8f9-2afd-47f1-9c7a-1a4a250d3fd8' height='480px'/> |

### 5) 프로필

|                                                            프로필 페이지                                                            |                                                         프로필 수정 페이지                                                          |                                                        팔로워/팔로잉 페이지                                                         |
| :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/352cf1bb-efe5-4d9f-ace9-23b6446994da' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/63a9ddb7-5bfe-44f3-a080-3e843d79fa24' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/c070f835-f0ba-4316-9b2e-1f9a8c553cd9' height='480px'/> |

|                                                            로그아웃 기능                                                            |
| :---------------------------------------------------------------------------------------------------------------------------------: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/6a5f7d79-9f04-484b-96b8-c80259de1a51' height='480px'/> |

<br/>
<br/>

## 9. 상세 담당 업무

### 공통

아이디어 도출

기능 개발

- 초기 폴더구조 세팅 및 환경설정
- 각 페이지 라우터 연결

<br/>

### 김소리

화면 개발

- 헤더, 레이아웃, 유저 인포, 이미지 버튼 공통 컴포넌트
- 산책메이트, 돌보미, 프로필 페이지 (리스트, 상세, 글쓰기)

기능 개발

- 산책 메이트, 돌보미

  - 게시글 리스트, 상세, 작성, 수정 기능 구현
  - 모든 데이터 중 펫팔 데이터만 필터링
  - 게시글 중에서 산책메이트/돌보미로 구분하여 글 작성 및 불러오기
  - 가입할 때 회원의 지역 정보를 저장해 그 지역만의 게시글을 보여주도록 필터링
  - 게시글에 여러 개의 사진을 게시하도록 구현
  - 게시글 좋아요 기능 구현

- 프로필

  - 로그인된 사용자의 정보에 따라 사용자의 프로필을 보여주도록 구현
  - 사용자의 판매중인 상품과 게시글 리스트 구현

- 회원가입

  - 회원가입 시 이메일 유효성 체크

- 피드
  - 게시글, 사용자 데이터 개수에 따른 무한 스크롤 여부 및 보여 줄 데이터 상태관리
- API
  - API 사용을 위한 axios instances 생성

<br/>

### 류경민

화면 개발

- 프로젝트 로고 및 UI 디자인
- 로그인, 회원가입, 게시물 작성, 404 페이지 UI
- Submit 버튼, 댓글 및 채팅 입력 Input 공통 컴포넌트

기능 개발

- 댓글
  - 댓글 등록, 삭제 기능 구현
- 채팅 - 채팅 리스트 데이터 렌더링 구현 - 채팅 룸 사용자 입력 텍스트 및 이미지 렌더링 구현
  <br/>

### 최지완

화면 개발

- 홈 페이지
- 스플래시 페이지
- 피드 페이지
- 공통 컴포넌트 UI (modal, alert..)

기능 개발

- 사용자 인증
  - 로그인
  - 로그아웃
  - 회원가입
- 게시글
  - 상품 리스트, 상세, 작성, 수정 기능 구현
- 공통 컴포넌트
  - modal
  - alert
  - loading
  - slider
  - infinity scroll
  - map
  - splash
  - tooltip
- 상태관리
  - recoil atom으로 전역 데이터 관리

<br/>

### 최현아

화면 개발

- NavBar 공통 컴포넌트
- 쇼핑하기(리스트, 상세, 글쓰기), 채팅 목록, 채팅방, 계정 검색, 팔로우 페이지

기능 개발

- 팔로우
  - 팔로우, 언팔로우 기능 구현
  - 팔로잉, 팔로워 리스트 구현
  - 페이지 url에 따라 팔로잉과 팔로워 분리하여 로드
- 계정 검색
  - username을 필터링하여 사용자 검색 기능 구현
- 쇼핑하기
  - 쇼핑하기 게시글 리스트 구현
  - 모든 데이터 중 펫팔 데이터만 필터링
- 피드
  - 팔로잉한 사용자의 게시글 이미지 리스트 구현
- 홈
  - 사용자의 프로필 이미지 리스트 구현
- NavBar
  - 페이지 경로에 해당하는 탭 메뉴 활성화

<br/>
<br/>

## 10. 핵심 코드

<details>
<summary><b>홈, 피드 무한 스크롤 구현</b></summary>
<br/>
	
<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
```
import React, { useEffect, useState } from 'react';
import { ScrollContainer, ScrollImageButton } from './scrollStyle';
import { Link, useLocation } from 'react-router-dom';

const InfiniteScroll = ({ imageData, className }) => {
// useLocation을 사용하여 현재 경로(pathname)를 가져옵니다 -> 홈/피드 구분 위함
const { pathname } = useLocation();

    // 모든 이미지가 로딩되었는지를 추적

const [allImagesLoaded, setAllImagesLoaded] = useState(false);

    // 스크롤링 하기 전 초기에 로드되는 이미지 객체 배열 생성

// 데이터가 10개 미만인 경우 -> 데이터의 개수만큼
// 데이터가 10개 이상인 경우 -> 10개
// => 스크롤링 전 초기 상태에는 0 ~ 10개의 데이터가 로드됩니다.
const initialImageUrls = Array.from(
{ length: Math.min(10, imageData.length) },
(\_, index) => {
// 이미지 있는 게시물만 처리
if (imageData[index]) {
// 이미지가 1개 이상인 경우 무조건 배열로 처리해줌 -> 게시글의 이미지가 문자열로 담겨있기 때문에
let imageArr = imageData[index].image.split(',');
return {
// 첫번째 이미지만 담기
image: imageArr[0],
// path가 /인 경우 home에서 보여줄 이미지의 accountname을 -> 추후 프로필이미지 GET
// 그 외의 경우에는 게시글의 accountname을 저장 -> 추후 피드 GET
accountname:
pathname === '/'
? imageData[index].accountname
: imageData[index].author.accountname,
// id도 동일
id: pathname === '/' ? imageData[index].\_id : imageData[index].id,
};
}
return null;
},
);

    // 현재 렌더링되는 이미지 URL을 추적

const [imageUrls, setImageUrls] = useState(initialImageUrls);

    // 초기 이미지를 로딩 후 스크롤이 맨 아래로 도달했을 때 새 이미지를 추가하는 역할

// 초기 이미지 로직과 동일함
const addContent = () => {
const imageIndex = imageUrls.length % imageData.length;
if (imageData[imageIndex]) {
const newImageArr = imageData[imageIndex].image.split(',');
const newImageUrl = {
image: newImageArr[0],
accountname:
pathname === '/'
? `${imageData[imageIndex].accountname}`
: `${imageData[imageIndex].author.accountname}`,
id:
pathname === '/'
? `${imageData[imageIndex]._id}`
: `${imageData[imageIndex].id}`,
};
setImageUrls([...imageUrls, newImageUrl]);
}
};

    // 스크롤이 맨 아래에 닿는 경우 체크

const checkScroll = () => {
const scrollHeight = document.documentElement.scrollHeight;
const scrollTop = window.innerHeight + window.scrollY;
if (scrollTop >= scrollHeight - 100) {
// 스크롤이 맨 아래로 도달했을 때 이미지 추가하는 addContent 호출
addContent();
}
};

useEffect(() => {
// 가져온 데이터와 지금까지 보여준 이미지 데이터 길이가 같을 경우
if (imageUrls.length === imageData.length) {
// 모든 이미지 로드 여부를 true로 변경
setAllImagesLoaded(true);
} else {
// 그렇지 않으면 스크롤 이벤트 유지
window.addEventListener('scroll', checkScroll);
}

    return () => {
    		// 모든 이미지가 로딩되면 스크롤 이벤트 제거
      window.removeEventListener('scroll', checkScroll);
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps

}, [imageUrls]);

return (
<ScrollContainer style={{ paddingBottom: allImagesLoaded ? '70px' : '0' }}>
{/_ 렌더링 부분에서는 위에서 처리한 이미지 imageUrls를
ScrollContainer 내에 매핑하여 이미지를 화면에 렌더링합니다 _/}
{imageUrls.length > 0 ? (
imageUrls.map((item, index) => (
// pathname에 따라 보여줄 데이터와 위치가 결정됩니다.
<ScrollImageButton key={index} className={className}>
<Link
to={
pathname === '/'
? `/yourProfile/${item.accountname}`
: `/walkDetail/${item.id}`
} >
<img
src={item.image}
alt={
pathname === '/'
? `프로필 이미지 ${index}`
: `게시글 이미지 ${index}`
}
/>
</Link>
</ScrollImageButton>
))
) : (
<h1>팔로잉 중인 사용자의 게시물이 없습니다.</h1>
)}
</ScrollContainer>
);
};

export default InfiniteScroll;

```

</details>

<details>
<summary><b>react-daum-postcode 사용</b></summary>
<br/>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->

```

import React, { useState } from 'react';
import DaumPostcode from 'react-daum-postcode';
import Modal from 'react-modal';
import Input from '../Common/Input/Input';

function AddressSearch({ onAddressSelect, className }) {
const [roadAddress, setRoadAddress] = useState('');
const [isOpen, setIsOpen] = useState(false);
const completeHandler = data => {
setRoadAddress(data.roadAddress);
setIsOpen(false);
onAddressSelect(data.roadAddress);
};

const openModal = () => {
setIsOpen(true);
};

return (
<div>
// 컴포넌트를 렌더링한 곳에서 사용자가 주소를 입력하려면 버튼 또는 링크와 같은 UI 요소를 만들어서 DaumPostcode 컴포넌트를 열도록 유도해야 합니다.
저희는 readOnly 옵션이 적용된 Input 컴포넌트를 클릭 시 팝업을 열어서 주소를 입력받을 수 있습니다.
<Input
        value={roadAddress}
        readOnly
        placeholder="주소"
        onClick={openModal}
        className={className}
      />
<Modal
isOpen={isOpen}
ariaHideApp={false}
//바깥 클릭하면 꺼지도록
onRequestClose={() => setIsOpen(false)} >
// 모달 내에 DaumPostcode 컴포넌트를 렌더링 합니다. 'onComplete' prop은 Daum 우편번호 서비스에서 주소 입력이 완료되면 실행할 함수를 지정합니다.
이 함수에는 선택한 주소 정보가 전달되어 저장합니다.
<DaumPostcode onComplete={completeHandler} height="100%" />
</Modal>
<br />
</div>
);
}

export default AddressSearch;

```

</details>

<details>
<summary><b>반응형 구현 - 🔨코드는 추후 리팩토링 시 레이아웃 획일화를 진행하여 올릴 예정🔨</b></summary>
<br/>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->

```

진행중

```

</details>

<br/>
<br/>

## 11. 트러블 슈팅
<details>
 <summary><b>공통되고 한정적인 API를 사용하여 데이터 중복 및 데이터 필드의 한계</b></summary>
 <br/>

- <b>주소 필드로 사용 (intro):</b> API에 'intro' 파트에 주소 정보를 추가했습니다. 이 주소 정보는 사용자에게 표시되며, 특정 위치의 지리적 정보를 나타냅니다. 이 주소 정보를 통해 사용자들은 서비스 내에서 원하는 위치를 식별하고 선택할 수 있습니다.
- <b>고유 id:</b> API에서 고유 ID를 사용하여 개별 데이터 레코드를 식별합니다. 이 ID에 'petpal_'이라는 접두어를 추가함으로써, 해당 ID가 PetPal 애플리케이션에서 생성된 것임을 명확히합니다. 이로써 다른 시스템 또는 데이터베이스에서 유사한 ID와 혼동되는 것을 방지합니다.
- <b>accountname 구분 (초단위 시간):</b> 'accountname' 필드는 사용자의 계정 이름을 나타내며, PetPal 내에서 사용자를 식별합니다. 초단위까지의 시간 정보를 'accountname'에 추가함으로써, 동일한 시간에 계정을 생성한 여러 사용자에 대한 중복을 피하고 사용자의 계정 이름이 고유하도록 보장합니다.

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
<!--
서버에서 데이터를 불러오거나 처리하는 과정에서 오류가 발생할 수 있습니다. 이러한 오류는 네트워크 요청 중에 서버에서 반환되는 상태 코드가 예상치 못한 오류 상태 코드인 경우 또는 서버에서 오류 메시지를 반환하는 경우 발생할 수 있습니다.
 -->


<!-- 해결 방법:

네트워크 요청 오류 처리:

네트워크 요청 중에 서버에서 반환되는 상태 코드를 확인하고, 오류 상태 코드에 따라 적절한 조치를 취합니다.
오류 상태 코드를 분석하여 클라이언트 측에서 조치를 취할 수 있도록 에러 핸들링 코드를 작성합니다. 예를 들어, 404 상태 코드는 "리소스를 찾을 수 없음"을 의미하므로 사용자에게 해당 리소스를 찾을 수 없다는 메시지를 표시할 수 있습니다.
에러 핸들링 및 오류 메시지 표시:

서버에서 반환된 오류 메시지를 클라이언트 측에서 적절하게 처리하고 사용자에게 표시합니다.
에러 핸들러를 사용하여 예외를 캐치하고, 사용자에게 사용자 친화적인 오류 메시지를 표시합니다. 이로써 사용자는 오류 상황을 이해하고 적절한 조치를 취할 수 있습니다.
데이터 유효성 검사:

데이터를 서버로 보내기 전에 클라이언트 측에서 데이터의 유효성을 검사합니다.
이러한 검사는 입력 데이터의 형식, 범위, 값의 유효성을 확인하고, 서버로 전송하기 전에 잘못된 데이터가 없도록 보장합니다.
서버에서도 데이터 유효성 검사를 수행하여, 클라이언트에서 확인한 데이터가 서버에서도 검증되고 처리될 수 있도록 합니다.
이러한 접근 방식은 API 호출 및 데이터 처리 오류를 방지하고, 오류가 발생했을 때 사용자와 개발자가 이를 이해하고 적절하게 대응할 수 있도록 도움을 줍니다. -->

</details>
<details>
 <summary><b>Recoil 상태가 새로고침 할 때마다 초기화되는 현상</b></summary>
 <br/>

- 로그인 상태를 관리하는 Recoil 상태가 페이지 새로 고침 시 초기화되는 문제에 직면했습니다. 이를 해결하기 위해 LocalStorage에 Recoil 상태를 저장하고 동기화하기 위해 recoil-persist 라이브러리를 사용했습니다. recoil-persist를 통해 페이지 새로 고침이나 이동과 같은 상황에서도 Recoil 상태를 유지하여 문제를 해결할 수 있었습니다.
- 그러나 민감한 정보를 LocalStorage에 저장할 경우 보안 문제가 발생할 수 있습니다. 이를 해결하기 위해 SessionStorage를 사용하여 브라우저 Session이 종료될 때 데이터가 자동으로 삭제되도록 설정하는 방법이 있습니다. 그러나 이 경우에는 사용자의 로그인 상태를 계속 유지하기 어려울 수 있습니다.
- 이에, 민감한 정보를 암호화하여 저장하고, 필요할 때 복호화하여 사용하여 보안을 강화하고 사용자의 로그인 상태를 지속적으로 유지할 수 있는 방법에 대해 고려할 수 있었습니다.
</details>
<br/>
<br/>

## 12. 리팩토링 목표 => 라이트하우스로 수치화, 조금 더 세분화 된 지역구
- 맵 api의 고도화
  - 현재 펫팔은 사용자들에게 주소를 입력받아 위치정보를 사용하고 있습니다. 향후에는 Google Maps나 OpenStreetMap과 같은 다양한 맵 API를 도입하여 사용자들에게 더 나은 서비스를 제공할 계획입니다.
    이를 통해 사용자들에게는 실시간 위치 정보 제공 및 시설 검색과 같은 기능을 제공할 수 있게 될 것이며 이러한 업그레이드를 통해 펫팔의 사용성과 가치를 높여, 사용자들에게 더 편리하고 유용한 경험을 제공할 것입니다.
- 코드 스타일 통일
  - 프로젝트 내에서 일관 된 코드스타일 및 정확한 코드 컨벤션을 적용하여 가독성을 향상 시키고 협업을 더욱 원활하게 만들 것입니다.
- 재사용성 높이기
  - 코드를 더욱 모듈화 하고 재사용 가능한 함수 컴포넌트로 구성함으로써, 코드 중복을 최소화하고 유지보수를 쉽게 만들 것입니다.
- 웹 접근성 향상 계획
  - 펫팔은 시각, 청각, 지체, 인지적 장애 등 다양한 장애를 가진 사용자들이 애플리케이션을 이용할 때 불편함 없이 사용할 수 있도록 개선할 예정입니다.
    스크린 리더와 호환되는 텍스트와 레이아웃을 구현하고, 키보드 사용이 가능한 네비게이션 기능을 추가하여 사용자들에게 다양한 장애에 관계없이 쉽고 편리하게 펫팔의 서비스를 제공할 것입니다.
- 디자인 시스템 구축
  - 기존의 코드를 이용해 통일된 디자인 가이드라인과 컴포넌트 라이브러리를 구축해놓은 후 코드에 적용시켜 일관된 UI 및 UX를 제공할 것입니다. 이를 통해 팀 내에서 일관성을 유지하고 빠르게 디자인 및 개발 작업을 진행할 수 있을 것이라 예상합니다.
- 성능 최적화
  - 웹 애플리케이션의 성능을 개선하기 위해 코드, 이미지, 데이터 요청 및 렌더링 프로세스를 최적화할 것입니다. 이를 통해 빠른 페이지 로딩 및 서비스의 성능이 향상될 것입니다.
<br/>

### 리팩토링 진행
Lighthouse 수치를 통해 파악 후 개선을 진행하였습니다.
#### 홈 화면
- 개선 전
<img width="542" alt="image" src="https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/42b5f7ab-a57d-4f99-8485-320a2ff637e3">
<br/>
<br/>

- 개선 후 면


## 13. 프로젝트 관련 문서
#### 👉 [Notion](https://www.notion.so/1-6beb92665ec04f3d87bc385de664104f)
#### 👉 [Figma](https://www.figma.com/files/team/1294159315441165760)
```
