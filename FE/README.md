# FinTo Front (React + Vite)

## 1️⃣ 최우선 원칙 (프론트 운영 철학)

1. **재사용성 극대화**: 페이지 전용 UI/로직을 최소화. 페이지는 조립자(Composer) 역할만 수행.
2. **페이지/API 수 절감**: 목적 기준으로 설계. 불필요한 분기/상태 제거.
3. **병렬 작업 보장**: 기능 단일 책임 페이지, 에지 케이스 최소화.
4. **역할 분리**: API 명세, 컴포넌트/페이지 명세, 훅/상태/스타일 레이어 분리.
5. **최소 변경 원칙**: 비즈니스 로직은 **백엔드 API**로만 표현. 프론트는 상태/행위/보안/라우팅/에지 처리에 집중.
6. **동작 우선, 꾸미기 나중**: 로직 → 테스트 → 스타일 순.
7. **프론트 비즈니스 로직 금지**: 계산/검증/정책은 API 계약으로 위임.

---

## 2️⃣ 디렉토리 구조 명세

```
src/
 ├─ assets/             # 정적 자원
 │   └─ imgs/
 │       ├─ icons/
 │       ├─ profiles/
 │       └─ system/
 ├─ components/         # 공통 컴포넌트
 │   ├─ topBar.jsx/
 │   ├─ box.jsx/
 │   └─ 추가예정/
 ├─ pages/              # 페이지
 │   └─ page
 ├─ router/             # 경로
 │   └─ index.jsx
 └─ store/
```

---

## 3️⃣ 깃 전략 명세

### 이슈 규칙

1. **title**: 요약
2. **contents**
   - **카테고리 선택**: `feature | fix | refactor | chore | docs | style`
   - **Todo**: 할 일

### 브랜치 명

- `main` : 배포 브랜치
- `develop` : 통합 브랜치
- `feat/<issue#>` : 기능
- `fix/<issue#>` : 버그 수정
- `refactor/<issue#>` : 리팩터
- `chore/<issue#>` : 빌드/툴/환경
- `docs/<issue#>` : 문서
- `style/<issue#>` : 스타일 수정

> **예)** `feat/#1`, `fix/#3`, `docs/#5`

### 커밋 컨벤션 (Conventional Commits)

- **type**: `feat | fix | refactor | chore | docs | style`
- **subject**: 이슈번호 `#123`
- **body**: 한글/영문 OK, 명령형, 50자 내외

> **예)** `feat/#24 : 기간 필터와 무한스크롤 추가`

### PR 규칙

- 최소 이슈, 최소 PR
- 사전 협의 없는 변경 금지 (디자인/스키마/계약/공통 컴포넌트)
- 헷갈리는 비즈니스 로직 발견 시 개발 중단 → 명세 먼저
- PR 리뷰 다 같이(최소 1명 이상)
- PR 템플릿 (변경내용, 체크리스트, 스크린샷, 기타 참고 사항)
