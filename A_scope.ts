function alwaysThrow() {
    throw new Error("I am a wicked fimction!");
}


//함수 수준 스코프(Scope)
//모든 변수 선언이 함수 수준에서 이루어지는 것
//자바스크립트에서 코드 블록({...})은 새로운 스코프를 생성하지 않는다.

function scopeExample() {
    //함수 실행 시 작동할 동작:코드 블록
    var abc =123;
    if(true) {
        var abc=456;
    }
    console.log(abc);
}
scopeExample(); //456


function scopeExample2() {
    var abc = 123;
    function ber() {
        var abc = 456;
    }
    console.log(abc);
}

//호일스팀
//변수의 선언과 초기화가 동시에 이루어졌을 떄, 자바스크립트 인터프리터가 변수의 선을 함수 맨 위로 이동시키는 동작

function hoistingEx() {
    console.log(bar);
    var bar =123;
}

//블록 수준 스코프

//let
{
let goOut =true;
if (true) {
    let goOut =false; //let을 이용할 경우 []대괄호 블록과 if 블록 내에서의 선언은 해당 블록 안에서만 의미O
}
console.log(goOut); //true
goOut= false;
console.log(goOut); //false
}


//const
//const로 선언한 변수는 재할당이 불가능 =상수
//단,불변값은 x

const notAble =3;
const arr=[1,2];
arr.push(3);
console.log(arr);

const object