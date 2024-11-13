# HTML
## HTML 기초
* `title` 제목태그
* `meta` 문서정보태그
* `Markup` HTML을 의미적으로 작성한다 == 마크업
* `Debugging` HTML 포함 프로그램 언어들의 오류를 검사하여 정상코드로 만든다
## VS code 주요 단축키
* `Ctrl+/` 한 줄 주석
* `Shift+Alt+A` 블록 주석
* `Shift+Alt+방향키` 해당 방향으로 복제
## HTML 기본 작성법
* `<시작태그></닫기태그>`
* `<시작태그 속생="값" 속성="값"></닫기태그>`
* `<빈태그>`
## 타이틀 작성법
* 웹페이지 특성에 따라 title을 작성해야 한다.
* 메인페이지일 경우 : 사이트명
* 서브페이지일 경우 : 페이지명 | 사이트명
## HTML 공부 시 주의사항
* HTML 의미적 구조, CSS 디자인 역할에 따라 HTML 공부 시 시각적 형태로 공부해선 안되고 의미적인 뜻으로만 공부해야 한다.
* 예) H1은 글자가 크고 굵다 X / H1은 대제목이란 뜻으로 가장 중요한 역할을 하는 대상에 적용한다 O
## HTML 문장 태그
* `h1~h6` 제목태그 (block), 1~3 레벨 위주로 사용하는 것이 좋다.
* `p` 단락태그(한 단락씩 묶어준다.) (block)
* `br` 줄바꿈태그(블록 태그 내에서만 사용해야 한다.) (inline)
* `strong` 경고 등 심각성이 있는 강조표시태그(블록 내 사용, 제목(h)에 사용X) (inline)
* `em` 문맥 내 강조표시태그(블록 내 사용, 제목(h)에 사용 X) (inline)
* `blockquote` 장문의 인용문을 삽입할 때 사용, blockquote 자체가 단락이기 때문에 `p`는 따로 사용하지 않는다. (block)
* `q` 짧은 인용문을 삽입할 때 사용 (inline)
* `blockquote, q의 cite 속성` 
* `sup` 위첨자 `sub` 아래첨자
* `code`
* `mark`
* `&lt;`, `&gt;`, `&copy;`
* `hr`
* `address`
* `del`, `s`
## 하이퍼링크태그 <a>
* `<a href="#" target="_blank"></a>`
* `targer="_blank"` 속성은 링크를 새창으로 띄울 때만 작성한다.
* 새창의 기준은 외부 사이트로 이동 시로 결정된다.
* 예) 네이버 메인 > 네이버 카페 이동 시는 같은 페이지에서 변경
* 예) 네이버 메인 > 구글 메인 이동 시는 다른 페이지이므로 새창으로 변경