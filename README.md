## FinTo

### 외국인을 위한 금융 멘토링 플랫폼

FinTo는 한국에서 생활하는 외국인이 금융 정보를 보다 쉽게 이해하고,
자신에게 맞는 멘토와 연결되어 금융 관련 도움을 받을 수 있도록 만든 금융 멘토링 서비스입니다.

**Financial Mentoring**의 의미와 함께,
**Fin(끝)** 에서 **To(새로운 시작)** 로 향하는 여정이라는 의미를 담고 있습니다.

<img width="2666" height="1500" alt="finto(드래그함)" src="https://github.com/user-attachments/assets/3f200167-fc4f-488f-b0dc-46bc8a690a6f" />


### 프로젝트 소개
---

재한 외국인이 증가하면서 국내에서의 금융 활동 역시 확대되고 있지만,
언어 장벽과 낯선 금융 환경으로 인해 금융 서비스를 이용하는 데 어려움을 겪을 수 있습니다.

FinTo는 이러한 문제에 주목해 외국인과 금융 멘토를 연결하는 1:1 금융 멘토링 서비스를 기획했습니다.

멘토의 국가·언어·전문 분야 등을 확인하고 자신에게 맞는 멘토를 찾을 수 있으며,
멘토링을 통해 필요한 금융 정보를 직접 묻고 소통할 수 있도록 구성했습니다.

<br/>

### 주요 기능
---

#### 1. 멘토 검색 및 탐색

사용자가 자신에게 적합한 금융 멘토를 찾을 수 있도록 멘토 목록과 검색 기능을 제공합니다.

* 멘토 목록 조회
* 국가 / 언어 / 전문 분야 기반 필터링
* 멘토 프로필 및 평점 확인
* 페이지네이션을 통한 멘토 목록 탐색

<img width="2666" height="1500" alt="image2" src="https://github.com/user-attachments/assets/493e1819-9204-469c-9d72-2c496d59c2e9" />
<br/>

#### 2. 멘토 상세 정보 및 리뷰

멘토를 선택하면 상세 정보를 확인하고,
다른 사용자의 리뷰를 참고해 자신에게 적합한 멘토인지 판단할 수 있습니다.

* 멘토 상세 정보 조회
* 멘토 전문 분야 확인
* 리뷰 및 평점 조회
* 멘토링 신청으로 연결

<br/>

#### 3. 1:1 금융 멘토링

사용자가 선택한 멘토와 직접 소통하며 금융 관련 궁금증을 해결할 수 있도록
1:1 멘토링 경험을 제공합니다.

<img width="2666" height="1500" alt="image3" src="https://github.com/user-attachments/assets/0694c705-315e-49b2-8c67-3ea2542e0ae0" />

<br/>

#### 4. 멘토 신청

금융 지식을 가진 사용자가 직접 멘토로 참여할 수 있도록
멘토 신청 기능을 제공합니다.

* 프로필 이미지 등록
* 사용 가능 언어 선택
* 자기소개 작성
* 약관 동의 및 멘토 신청

<img width="2666" height="1500" alt="image4" src="https://github.com/user-attachments/assets/908a1379-9067-4442-add0-ae4e3811bc8a" />

<br/>

### Tech Stack
---

#### Frontend

* React 19
* Vite
* React Router
* Axios
* Tailwind CSS
* HeroUI
* Framer Motion

#### Collaboration

* Git
* GitHub

<br/>

### 담당 기능
---

#### Frontend

멘토 탐색 과정에 필요한 **멘토 검색·카드·상세·리뷰·페이지네이션 기능**을 담당했습니다.

#### 1. 멘토 검색 및 목록
- API를 연동하여 멘토 목록 데이터 조회
- 멘토 정보를 카드 UI로 구성
- 검색 조건에 따른 멘토 목록 제공

#### 2. 멘토 상세
- 선택한 멘토의 상세 정보 조회
- 목록에서 멘토 상세 페이지로 이어지는 사용자 흐름 구현

#### 3. 리뷰
- 멘토별 리뷰 및 평점 정보 조회
- 멘토 상세 화면에서 리뷰를 확인할 수 있도록 구현

#### 4. 페이지네이션
- 멘토 목록 페이지네이션 구현
- 페이지 변경에 따른 목록 데이터 갱신
<br/>

### 개발 과정

#### 제한된 시간 안에서 핵심 기능 우선 구현

2박 3일의 해커톤으로 진행되어 모든 아이디어를 구현하기보다
서비스의 핵심 사용자 흐름을 먼저 완성하는 것을 목표로 했습니다.

팀원들과 기능의 우선순위를 논의하고,
**멘토 탐색 → 상세 정보 및 리뷰 확인 → 멘토링**으로 이어지는
핵심 시나리오를 기준으로 구현 범위를 조정했습니다.

이를 통해 제한된 개발 시간 안에 주요 기능을 완성하고
실제 서비스 흐름을 시연할 수 있었습니다.

<br/>

### Project Structure

```text
src/
├── api/                    # API 요청
│   ├── member/             # 회원 관련 API
│   ├── mentor/             # 멘토 관련 API
│   └── mentoring/          # 멘토링 관련 API
│
├── assets/
│   └── imgs/               # 이미지 리소스
│
├── Chatting/               # 채팅 관련 기능
│   ├── Components/         # 채팅 UI 컴포넌트
│   └── icon/               # 채팅 관련 아이콘
│
├── components/
│   └── layout/             # 공통 레이아웃 컴포넌트
│
├── constants/              # 공통 상수
│
├── pages/                  # 페이지 단위 컴포넌트
│   ├── auth/               # 인증 관련 페이지
│   ├── calendar/           # 일정 관련 페이지
│   ├── mentoring/          # 멘토링 관련 페이지
│   └── settings/           # 설정 관련 페이지
│
├── router/                 # 라우팅 설정
├── App.jsx
├── index.css
└── main.jsx
```

<br/>

### Project Result

**2박 3일 해커톤 장려상**

- 제한된 시간 안에서 핵심 기능을 선정하고 서비스의 주요 사용자 흐름 구현
- 사용자 흐름 정리 및 시연 영상·발표 자료 제작 참여

<br/>

### Team

| Role | Responsibilities |
| --- | --- |
| Frontend | 화면 구현, API 연동, 사용자 인터랙션 |
| Backend | API 및 서버 비즈니스 로직 구현 |

<br/>

### Getting Started

```bash
# Repository clone
git clone https://github.com/yurissssss/FinTo_FE.git

# Install dependencies
npm install

# Run development server
npm run dev
```
