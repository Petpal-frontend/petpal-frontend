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

<br/>

## 1. 서비스 소개
반려동물을 사랑하는 이들을 위한 온라인 커뮤니티, 펫팔을 소개합니다!

펫팔은 지역 기반 서비스를 활용해 내가 사는 동네 근처에서 필요한 용품을 중고로 사거나 판매할 수 있고,
나와 가까운 곳에 사는 반려인들과 연결되어 새로운 산책 메이트를 찾는 것이 쉬워집니다.
여행이나 긴급한 일로 집을 비워야 할 때는 근처의 돌보미를 찾아 반려동물을 안심하고 맡길 수 있습니다.

펫팔과 함께라면, 멀리 가지 않아도 내 지역 내에서 모든 반려동물 관련 커뮤니티를 누릴 수 있습니다.

<br/>
<br/>

## 2. 팀원 소개
| 리더 | 리더 | 리더 | 리더 |
| :---: | :---: | :---: | :---: |
| <img src="https://avatars.githubusercontent.com/u/73383923?v=4" /> | <img src="https://avatars.githubusercontent.com/u/138556024?v=4" /> | <img src="https://avatars.githubusercontent.com/u/54405518?v=4" /> | <img src="https://avatars.githubusercontent.com/u/110486454?v=4" /> |
| [🔗 김소리](https://github.com/sorikikikim) | [🔗 류경민](https://github.com/kmryuuu)  | [🔗 최지완](https://github.com/jiwanchoi)   | [🔗 최현아](https://github.com/hhyunn)  |

<br/>
<br/>

## 3. 역할 분담
!이미지 넣을 곳!

<br/>
<br/>

## 4. 개발 일정
| 기간 |  |
| :---: | :---: |
| 2023.10.12 - 2023.10.19 | 프로젝트 기획 및 디자인 |
| 2023.10.15 - 2023.10.18 | 프로젝트 기초 세팅 |
| 2023.10.19 - 2023.10.29 | 페이지 마크업 |
| 2023.10.30 - 2023.11.05 | 기능 구현 |
| 2023.11.06 - | 리팩토링 |

<br/>
<br/>

## 5. 기술 스택 및 개발 환경
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black"> <img src="https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=recoil&logoColor=white" /> <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white" /> <img src="https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=ffd35b" /> <img src="https://img.shields.io/badge/javascript-F7DF1E.svg?style=for-the-badge&logo=javascript&logoColor=20232a" />  
| 구분 |  |
| :---: | --- |
| **사용 기술** | 프론트엔드: React, Recoil, Axios, styled-components, JavaScript <br/> 백엔드: 제공된 API 사용  |
| **컨벤션** | ESLint, Prettier |
| **협업** | Git, GitHub, Notion, Discord, Figma |
| **IDE** | VSCode |

<br/>

### 라이브러리 사용 이유
- Recoil: 간편한 전역 상태 관리와 접근을 위해 사용했습니다.  
- Axios: 간편한 HTTP 요청을 위해 사용했습니다.  
- styled-components: 스타일 캡슐화로 코드의 가독성과 유지보수 향상을 위해 사용했습니다.
- react-router-dom: 페이지 라우팅을 위해 사용

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

## 7. Git Branch 전략 - Github Flow
### 프로젝트 Gitflow 전략
이 프로젝트는 Gitflow 전략을 따라 개발 및 관리됩니다. 
Gitflow는 Git을 사용한 협업 개발을 위한 전략으로, 팀 구성원 간의 업무 분담, 기능 개발, 버그 수정, 출시 및 유지 보수를 효과적으로 관리하기 위한 일련의 규칙과 프로세스를 제공합니다.

### Gitflow 개요
Gitflow 전략은 다음과 같은 주요 브랜치를 사용합니다:

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
| 스플래시 페이지 | 회원가입 페이지 | 로그인 페이지 |
| :---: | :---: | :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/b4dab298-bf46-4689-93d9-e8d892597608' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/ef07189e-1604-4647-9631-97cc4b9b16e1' height='480px' /> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/67a9a6a8-f5aa-4b0b-be2d-8dd2838bf7cb' height='480px'/> |

| 홈 페이지 | 검색 페이지 |
| :---: | :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/cc6822d7-2e4a-44d7-b47c-7662756994e3' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/f0b3ed18-3bdb-4b6b-92f2-7b6031f8ca94' height='480px'/> |

### 2) 피드
| 피드 페이지 |
| :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/c9ed5017-92bb-4938-8fd7-8203f1efe7c8' height='480px'/>  |
    
### 3) 게시물
#### 산책메이트, 돌보미
| 게시물 목록 페이지 | 게시물 상세 페이지 | 게시물 작성 페이지 |
| :---: | :---: | :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/b0108255-9f03-4636-be94-d84022e73463' height='380px'/>  <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/1f8f88ce-be23-4c24-b0e8-50912210e2ab' height='380px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/8d528176-c57c-410f-a31c-e155f6de16af' height='380px'/> <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/87e0f66c-97e9-4482-94da-1604adfb4ee2' height='380px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/d58df0c3-b183-435b-9557-7786b8b23b24' height='380px'/> <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/7023499a-0934-4d26-b5e0-15d8d9798ae0' height='380px'/> |

| 게시물 수정 페이지 | 게시물 삭제 |
| :---: | :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/3c9b35ec-84fd-4060-a2e5-cea3a34c4f98' height='480px'/>  | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/55b292fc-b191-4359-aa42-94cda84f7e2c' height='480px'/> |

 | 좋아요 기능 | 댓글 작성, 삭제 기능 | 댓글 신고 |
| :---: | :---: | :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/81c86621-ba94-4029-a3e9-960a8e9b99b2' height='480px'/> |  <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/dd0a9211-8289-4f9f-81bc-46c6d97d1d79' height='480px'/> | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/5a54379a-7129-4f5c-96f1-d827bfc21cfe' height='480px'/> |

### 4) 채팅
| 채팅 목록 페이지 | 채팅방 페이지 | 수정 필요 |
| :---: | :---: | :---: |
| gif | gif | <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/8cc5f724-92e2-49e8-8e98-9a9e93a1ae06' height='480px'/> |

### 5) 프로필
| 프로필 페이지 | 프로필 수정 페이지 | 팔로워/팔로잉 페이지 |
| :---: | :---: | :---: |
|  <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/352cf1bb-efe5-4d9f-ace9-23b6446994da' height='480px'/> |  <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/63a9ddb7-5bfe-44f3-a080-3e843d79fa24' height='480px'/> |  <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/c070f835-f0ba-4316-9b2e-1f9a8c553cd9' height='480px'/> |

| 로그아웃 기능 |
| :---: |
| <img src='https://github.com/Petpal-frontend/petpal-frontend/assets/73383923/6a5f7d79-9f04-484b-96b8-c80259de1a51' height='480px'/> |

<br/>
<br/>

## 9. 상세 담당 업무
### 공통
디자인
  - 설명

화면 개발
  - 설명

기능 개발
  - 초기 폴더구조 세팅 및 환경설정
  - 각 페이지 라우터 연결

기타.. (프로젝트 총괄 및 문서화, 컴포넌트 리팩토링 및 중복 제거 등..)
  - 설명

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
  - 채팅
      - 채팅 리스트 데이터 렌더링 구현
      - 채팅 룸 사용자 입력 텍스트 및 이미지 렌더링 구현
<br/>

### 최지완

화면 개발
- 홈 페이지
- 스플래시 페이지
- 피드 페이지
- 공통컴포넌트UI(modal, alert..)

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
<summary>더보기</summary>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
자세한 내용은 더보기 버튼으로 가려둘 수 있음

</details>

<br/>
<br/>

## 11. 트러블 슈팅
<details>
<summary>더보기</summary>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
자세한 내용은 더보기 버튼으로 가려둘 수 있음

</details>

<br/>
<br/>

## 12. 리팩토링 목표
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
<br/>

## 13. 프로젝트 관련 문서
#### 👉 [Notion](https://www.notion.so/1-6beb92665ec04f3d87bc385de664104f)
#### 👉 [기능 명세서](https://www.notion.so/44dffa0cf42348fc80a5312a5c165e6c)
#### 👉 [Figma](https://www.figma.com/files/team/1294159315441165760)
