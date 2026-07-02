# SEUL-POLICE v5.0

기존 단일 `index.html`을 아래 4개 파일로 분리한 버전입니다.

- `index.html` : 앱 실행용 기본 HTML
- `styles.css` : 기본 CSS
- `firebase.js` : Firebase 연결
- `app.js` : React 앱/근무표 로직

## 반영 내용

- v4.9 기능 포함
  - 오늘 날짜 자동 스크롤 제거
  - 오늘 날짜 강조 유지
  - C반 1·2발전 N근무 기록 `🚔(1)`, 소내 `🚔(2)` 표시
- 앱 버전: `5.0`
- 브라우저 제목: `SEUL-POLICE`

## GitHub 업로드 방법

기존 저장소의 `index.html` 하나만 덮어쓰는 방식이 아니라, 이 폴더 안의 파일 4개를 모두 같은 위치에 올려야 합니다.

```
index.html
styles.css
firebase.js
app.js
```

Netlify는 그대로 작동합니다.
