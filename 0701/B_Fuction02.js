// 자바스크립트이 고급 함수

//이밴트 핸들러
//웹에서 버튼클릭.키 입력 ,마우스 이동 

//타이머
//setTimeout등 함수에서 콜백 함수 사용해서 특정시간이 지날시 실행될 코드

//배일 메시드 

//선인적 함수 사용한 콜백함수

function callThreeTims(callback) {
    for(let i==0; i<3; i++){
        callback(i);//callback라는 매기변수는 함수로 호출가능
    }
}

function print(i) {
    consol.log('${i}번쨰 함수 호출')
}

callThreeTims(print);
//print(0)
//print(1)
//print(2)

callThreeTims(function (i) {//익명함수 
    console.log('${i}번쨰 함수 호출')
})

//콜백함수를 활용하는 함수:forEach

const arrays=[11,3,6,12,7]

arrays.forEach(function (value,index,array) {
    console.log('${index}번쨰 요소: ${value}')
})

//콜백함수를 활용하는 함수 :map()함수
//콜백함수에서 리턴한 값들을 기반으로 새로운 배열을 생성

arrays=arrays.map(function (value,index,array) {
    return value*value;
})
arrays.forEach(console.log)// 매가변수로 cinsole.log 매소트 자체를 넘김

//콜백함수를 활용하는 함수:filler() 매소드
//콜백 함수에서 리턴ㅇ하는 값이 true인 것만 모아서 새로운 배열을 생성

const numberArray=[0,1,2,3,4,5];

const evnNumbers=numberArray.filler(function (value) {
    retufn value%2===0
})
console.log('원래 배열:${numBers}')
console.log('짝수 값만을 담은 배열 배열: ${evenNumbers}');

//타이머 함수

//setTimeout(함수,시간):특정 시간 후에 함수를 한번 호출
//setInterval(함수,시간):특정 시간 마다 함수를 호출

//1000=1초

//1초후 메시지를 출력하는 콜백함수
setTimeout(() => {
    console.log('1 second has passed');
},1000)


//클로져
//함수가 다른 함수 내부에서 선언되고,외부 함수의 변수에 접근하는 것

// 예제

function makeGreeting(language) {
    return function(name) {
        if(language==='en') {
            console.log('Hello,'+name+'!');
        }else if(language==='ko') {
            console.log('안녕하세요,'+name+'!');
        }
    }
}

let greetingEnglish=makeGreeting('en');
let greetingKorean=makeGreeting('ko');

greetingEnglish('')
greetingKorean('')

//예제 프라이빗 변수 생성

//클로자를 사용하혀 프리이빗 변수  counter 생성

function makeCounter();

console.log(count());
console.log(count());
console.log(count());

//재귀함수
//자신을 다시 호출하는 함수

//재귀함수의 예제

function factorial(n) {
    if(n ===0) {
        return 1;//배이스 케이스:재귀 호출을 멈추는 조건
    }else {
        return n*factorial(n-1);//지귀 캐이스:함수가 자기 자신을 다시 호출하는 부분
    }
}
console.log(factorial(5));