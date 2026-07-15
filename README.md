# soulmate-shop 🧘

요가/웰니스 브랜드 **소울매트(Soulmate)**의 요가용품 쇼핑몰입니다.
React + Vite로 만들었으며, 백엔드 없이 **목업 데이터**로 화면을 구성했습니다.

## 기술 스택
- React 19
- Vite 8

## 주요 특징
- 헤더 / 히어로 / 상품 목록 / 브랜드 스토리 / 푸터
- 카테고리 필터 (전체 · 매트 · 요가복 · 소도구)
- 상품 카드: 할인가, 색상 옵션, 평점, 품절 처리
- **목업 데이터를 별도 파일로 분리** (`src/data/mockProducts.js`) → 나중에 백엔드 API로 한 줄만 교체 가능

## 실행 방법
```bash
npm install
npm run dev
```
→ http://localhost:5173

## 폴더 구조
```
src/
├── data/
│   └── mockProducts.js   # 상품 목업 데이터
├── components/
│   ├── Header.jsx        # 상단 헤더
│   ├── ProductList.jsx   # 상품 목록 + 카테고리 필터
│   └── ProductCard.jsx   # 상품 카드
├── App.jsx               # 전체 조립
├── App.css               # 컴포넌트 스타일
└── index.css             # 전역 스타일 & 디자인 토큰
```
