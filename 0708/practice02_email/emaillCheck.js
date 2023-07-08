//웹페이지에서 입력된 값이 이메일 형식인자 확인하는 js 코드

//1.페이지가 로드되면(DDNContentLoaded 이벤트 발생 시), 이 코드 작동

//input,p테그의 요소를 가지고 와서
const isEmail =(value) => {
    return (value.indexOf('@')>1)
        && (value.split('@')[1].indexOf('.')>1)
}
//input 태그에 글자 입력 양식의 keyup이밴트리스너 추가

//
