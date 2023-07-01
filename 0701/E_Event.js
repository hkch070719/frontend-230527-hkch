//자바스크립트 키보드와 마우스 이벤트

//키보트 이벤트

//keydown: 키를 누를떄 발생
//keyup:키를 떄먼 발생
//ketpress:키를 누르는 동안 발생

//addEventLister 매서드를 사용하여 키보드 이벤트 핸들러를 등록

//마우스 이벤트

//click:마우스 버튼을 클릭할 댸 발생
//dblclick:마우스 버튼을 바르게 두번 클릭할 때 발생







window.addEventListener('click'function(envent) {
    console.log('마우스를 클릭:'+ event.clientX +','+ event.clientY);
})

let form=document.getElementById('myForm');

form.addEventListener('submit',function(event)) {
    crossOriginIsolated.log('품이 제출되었습니다.')
}