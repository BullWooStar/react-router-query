## REACT ROUTER QUERY

REACT ROUTER QUERY를 연습해보기 위한 작업입니다

#### 요구사항
- GitHub api v3 중 아무 search API를 사용한다.
- local의 route는 /search로 고정한다.
- QS 쿼리스트링
	- q, page 는 고정되어도 된다.
	- 옵션, 셀렉트 > sort, order, per_page는 변경될 수 있다.
- QS가 변경이 되면 API를 다시 호출한다.
- QS도 변경되어야 한다.
	- 사용자가 특정 QS을 입력하고 들어오면 그것도 처리해준다.

#### 프로젝트 소개

<img width="1000" alt="스크린샷 2022-10-21 오후 2 51 26" src="https://user-images.githubusercontent.com/99630188/197122452-482a486b-0b5d-4969-957c-d93df11eb67b.png">

- github api는 github의 테트리스 레포지토리를 모두 찾는 api를 사용하였습니다.
- stars 많이 받은순/forks많이 받은순, 내림차순/오름차순, 10/20/30개씩 보기로 정렬이 가능하며 모두 각각의 api를 호출합니다
- 주소창에서 직접 쿼리스트링을 바꿔도 적용이 됩니다
