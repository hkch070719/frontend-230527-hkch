function  multiply(a,b){
    return a*b
}
console.log(multiply(2,3))
console.log(multiply(4,5))

function calculateDistance(x1, y1,x2,y2){
    let dx=x2-x1;
    let dx=y2-y1;

    return Math.sqrt(dx*dx+dy*dy);

}

console.log(calculateDistance(1,2,3,4));

document.querySelector('button').addEventListener('click',function(){
    console.log('Button was  clicked!');
});

function greet() {
    console.log('Hello world!');
}
//함수표현식
let greet2=function() {
    console.log('Hello world!');
};
//화살표 함수
console grett3=()=>{
    console.log('Hello world!');
};

//함수이름();
greet();
greet2();

//함수호출= 인수&매기변수
//함수호출=()안에 인수(arguments)넣는다.해당 인수는 함수내부로 전달
//함수 내부에서는 매기변수(parameters)라는 이름


//파라미터 이규먼트 차이점

//1:함수정의
fuction addEventListener(a,b){//파라미터
    console.log(a+b);
}

add(3,5);//이규먼트

//2
function greeting(name) {//파라미터
    console.log('Hello, ${name} !');
};

greeting('Seungah');//이규먼트



function log(a){
    console.log(a);
}

log();//undefined
log(1);//1
log(0,1,2);//0

//변환값
//입력받은 처리한 결과를 '반환'
//return 키워드로 지정
//함수내에서 retufn 사용시 함수 실행 즉시 중단return 뒤에오는 값을 반환

function subtraction(a,b){
    return a-b;
}

let result=subtraction(10,7);
console.log(result);

//return값이 없을시 함수는 undefined 반환
function noReturnValue(){
    console.log("This functuon does not return anything");
}

let result2=noReturnValue();

//실습 예제 1:반환값이 있는 함수
//함수 square 작성해서 파리미터 x값을 받습니다.
//반환 값으로 x의 제곱을 반환합니다.
//반환 결과를 변수에 담아 그 변수를 콘솔창에 출력합니다.

function square(x){
    return x*x;
}
let squareResult=square(5);
console.log(squareResult);

//익명함수<함수 표현식 or 콜백함수
let myFunction=function myFunction(){
    console.log('This is an anonymous function!')
}
//화살표
//funcion대신 화살표(=>) 주로 사용
let myFunction2=()=> {
    console.log('This is an arrow function')
}
//익명함수,화살표함수 사용 예제

//배열의 map 매서드에 익명 함수를 사용
let add2= numbers.map(function(x) {
    return x+x;
});

console.log(add2);

//배열의 map 매서드에 화살표 함수를 사용
let add3=numvers.map(x => x+x);

console.log(add3);