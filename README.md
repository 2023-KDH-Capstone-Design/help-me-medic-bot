# Help me! Medic bot!

## 백엔드 디렉토리 구조

- backend/controller
  - REST API 요청 및 응답을 처리하는 Controller

- backend/domain
  - /comment
    - 댓글 관련 엔티티 및 서비스
  - /login
    - 로그인 관련 서비스
  - /member
    - 회원 관련 엔티티 및 서비스
  - /post
    - 게시글 관련 엔티티 및 서비스

## 프론트엔드 디렉토리 구조

- frontend/public
  - 공통적으로 사용되는 요소, 설정 (favicon, logo, app title 등)
  - api import (index.html)

- frontend/src
  - /assets
    - /images
      - 프로필 이미지 (서버 처리로 수정, 삭제 예정)
  - /components
    - /chat
      - 챗봇 작동에 사용되는 입력, 챗로그(+ 요청 챗버블, 응답 챗버블) 컴포넌트
    - /forum
      - 포럼에서 사용되는 댓글, 게시글, 작성 컴포넌트
    - /modal
      - 병원 정보(소개, 지도 등등)를 띄우는 모달 컴포넌트 (chat쪽으로 합쳐질 예정)
    - /ui
      - /ads
        - 광고 컴포넌트 (Carbonads)
      - /drawer
        - 반응형 측면 메뉴 컴포넌트
      - /navbar
        - 네비게이션 바 컴포넌트
  - /pages
    - React router로 제어되는 페이지 컴포넌트
  - /styles
    - tailwind 설정과 기타 커스텀 스타일 시트
  - /setupProxy.js
    - Cross Origin 오류 방지를 위한 proxy 설정 (API 접근 시 사용)
