//자바 스크립트의 이밴트//

//이밴트 웹 페이지에서 발생하는 대부분의 일(사건)
//사용자가 버튼을 클릭.웹 페이지가 로드 ,이풋 필드에 입력 등

//이밴트 핸들링
//특정 이밴트에 반응하면 특정 돈장을 실행하는것을 의미
//이밴트 핸들러(토는 이밴트 리스너)는 특정 이밴트가 발생했을떄 호출되는 함수

//이밴트 핸들러 등록방법

//1.html 이밴트 핸들러 속성:html요소에 직적 on키워드()를 사용해서 속성에 함수를 할당해서 이밴트를 연결

//2.Don 프로머티에 할당:자바스크립트에서 html요소우ㅢ 이밴트 핸들러 프로파티에 함수를 할당하는 방법

//3.포준 이밴트 모델.한 요소에 여러 개의 이벤트 핸들러 등록 가능 
//don 요소에 이밴트 리스너를 추가하는데 사용
//첫 번쩨 매기번수로 이벤트 유형(),두 번쨰 매기변수로 이벤트 핸들러 함수를 받는다

//element,addEventListenener('clicj,fuction()) {
    //이밴트 핸들링 코드
//}

let btn = document.getElementById('myBtn');

btn.addEventListener('click',function() {
    alert('버튼이 클릭되었습니다.')
})

//이벤트 버블링

//특정 요소에서 이벤트가 발생했을 때, 그 이벤트가 상위요소들로 전달되는 현상

//이벤트 켑쳐링

//이벤트 버블링과 반대 방향으로 이밴트가 전달되는 현상
//최상위요소에서 시작-> 이벤트가 발생한 요소까지 이벤트를 전달(외부->내부)

//envent
let parent = document.getElementById('parent');
let child = document.getElementById('child');

parent.addEventListener('click',function(event) {
    this.alert('부모 요소 출력');
    event.stopPropagation();
});


child.addEventListener('parent',function(event) {
    this.alert('자식 요소 출력');
    event.stopPropagation();
});