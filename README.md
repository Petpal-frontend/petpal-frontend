<div align="center">
  <h1>PetPal 🐾</h1>

  <img src="https://github.com/Petpal-frontend/petpal-frontend/blob/main/src/assets/image/tajaCat.gif" />

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
| 김소리 | 류경민 | 최지완 | 최현아 |
| :---: | :---: | :---: | :---: |
| <img src="https://github.com/Petpal-frontend/petpal-frontend/blob/main/src/assets/image/tajaCat.gif" /> | <img src="https://github.com/Petpal-frontend/petpal-frontend/blob/main/src/assets/image/tajaCat.gif" /> | <img src="https://github.com/Petpal-frontend/petpal-frontend/blob/main/src/assets/image/tajaCat.gif" /> | <img src="https://github.com/Petpal-frontend/petpal-frontend/blob/main/src/assets/image/tajaCat.gif" /> |
| [🔗 sorikikikim](https://github.com/sorikikikim) | [🔗 kmryuuu](https://github.com/kmryuuu)  | [🔗 jiwanchoi](https://github.com/jiwanchoi)   | [🔗 hhyunn](https://github.com/hhyunn)  |
| 담당 | 담당 | 담당 | 담당 |

<br/>
<br/>

## 3. 역할 분담
### 공통
디자인
  - 설명

화면 개발
  - 설명

기능 개발
  - 설명

기타.. (프로젝트 총괄 및 문서화, 컴포넌트 리팩토링 및 중복 제거 등..)
  - 설명

<br/>

### 김소리
## 화면 개발
- 헤더, 레이아웃, 유저 인포, 이미지 버튼 공통 컴포넌트 
- 산책메이트, 돌보미, 프로필 페이지 (리스트, 상세, 글쓰기) 

## 기능 개발
### 산책 메이트, 돌보미 
- 게시글 리스트, 상세, 작성, 수정 기능 구현
- 모든 데이터 중 펫팔 데이터만 필터링
- 게시글 중에서 산책메이트/돌보미로 구분하여 글 작성 및 불러오기
- 가입할 때 회원의 지역 정보를 저장해 그 지역만의 게시글을 보여주도록 필터링
- 게시글에 여러 개의 사진을 게시하도록 구현
- 게시글 좋아요 기능 구현

### 프로필
- 로그인된 사용자의 정보에 따라 사용자의 프로필을 보여주도록 구현
- 사용자의 판매중인 상품과 게시글 리스트 구현

### 회원가입
- 회원가입 시 이메일 유효성 체크

### 피드
- 게시글, 사용자 데이터 개수에 따른 무한 스크롤 여부 및 보여 줄 데이터 상태관리
  
### API
- API 사용을 위한 axios instances 생성
<br/>

### 류경민

<br/>

### 최지완

<br/>

### 최현아

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
## 프로젝트 Gitflow 전략
이 프로젝트는 Gitflow 전략을 따라 개발 및 관리됩니다. 
Gitflow는 Git을 사용한 협업 개발을 위한 전략으로, 팀 구성원 간의 업무 분담, 기능 개발, 버그 수정, 출시 및 유지 보수를 효과적으로 관리하기 위한 일련의 규칙과 프로세스를 제공합니다.

## Gitflow 개요
Gitflow 전략은 다음과 같은 주요 브랜치를 사용합니다:

- **main**: 안정적인 프로덕션 버전을 관리하는 브랜치입니다.
- **dev**: 다음 릴리스를 위한 개발 중인 기능을 통합하는 브랜치입니다.
- **feature/**: 새로운 기능 개발을 위한 브랜치입니다.

이번 개발 기간동안에는 사용하지 못했지만 리펙토링 기간에는 다음의 브랜치를 활성화 할 예정입니다.
- **bugfix/**: 버그 수정을 위한 브랜치입니다.
- **hotfix/**: 긴급한 버그 수정을 위한 브랜치입니다.



## 작업 흐름

1. 프로젝트에 참여하기 전, 개발자는 `dev` 브랜치로부터 새로운 `기능명` 브랜치를 생성합니다.
2. 기능 개발이 완료되면, `dev` 브랜치로 Pull Request를 생성하고 코드 리뷰를 진행합니다.
3. 코드 리뷰 및 변경 사항 반영 후, `dev` 브랜치로 병합합니다.
4. 주기적으로 프로젝트의 안정적인 상태를 유지하기 위해 `dev` 브랜치를 `main` 브랜치로 병합하여 새로운 프로덕션 버전을 배포합니다.

<br/>
<br/>

## 8. 주요 기능
### 1) 홈
| 스플래시 페이지 | 회원가입 페이지 | 로그인 페이지 |
| :---: | :---: | :---: |
| gif | gif | gif |

| 홈 페이지 | 검색 페이지 |
| :---: | :---: |
| gif | gif |

### 2) 피드
| 피드 페이지 |
| :---: |
| gif |
    
### 3) 게시물
| 게시물 목록 페이지 | 게시물 상세 페이지 | 게시물 작성 페이지 |
| :---: | :---: | :---: |
| gif | gif | gif |

| 게시물 수정 페이지 | 게시물, 댓글 삭제 | 좋아요, 댓글 기능 |
| :---: | :---: | :---: |
| gif | gif | gif |

| 댓글 신고 |
| :---: |
| gif |

### 4) 채팅
| 채팅 목록 페이지 | 채팅방 페이지 |
| :---: | :---: |
| gif | gif |

### 5) 프로필
| 프로필 페이지 | 프로필 수정 페이지 | 팔로워/팔로잉 페이지 |
| :---: | :---: | :---: |
| gif | gif | gif |

| 로그아웃 기능 |
| :---: |
| gif |

<br/>
<br/>

## 9. 핵심 코드
<details>
<summary>더보기</summary>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
자세한 내용은 더보기 버튼으로 가려둘 수 있음

</details>

<br/>
<br/>

## 10. 트러블 슈팅
<details>
<summary>더보기</summary>

<!--summary 아래 빈칸 공백 두고 내용을 적는공간-->
자세한 내용은 더보기 버튼으로 가려둘 수 있음

</details>

<br/>
<br/>

## 11. 리팩토링 목표
- 목표1

<br/>
<br/>

## 12. 프로젝트 관련 문서
#### 👉 [Notion](https://www.notion.so/1-6beb92665ec04f3d87bc385de664104f)
#### 👉 [기능 명세서](https://www.notion.so/44dffa0cf42348fc80a5312a5c165e6c)
#### 👉 [Figma](https://www.figma.com/files/team/1294159315441165760)
