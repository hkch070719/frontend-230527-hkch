//타임스크립트 함수

//1.함수의 선언 및 호출
{
    function greet(name:string): string {
        return 'Hello, ${name}';
    }

    const.log(greet("seungah"));
}
//2.함수 타입 정의

{
    let greet: (name:string) => string;

    greet= function (name) {
        return 'Hello, ${name}';
    }

    console.log(greet("dokyung"));
}

//3.선텍적 매기변수, 기본매기변수
//선텍적 메기변수는 반듯이 필수 매기변수 뒤
{
    function greet(name?:string): string {
        if(name) {
            return "hello , ${name}";
        }
        else {
            return "hello";
        }

    }
    console.log(greet("Junkuk"));
    console.log(greet());
}

// {
//     function greet(name:string,greeting?:string): string {
//         if(!greeting) {
//             greeting="Hello";
//         }
//         return '${greeting},${name}';

//     }
//     console.log(greet("Junkuk"));
//     console.log(greet("seungah","Hi"));
// }

// Rest 매개변수
//:0개 이사의 매개변수를 배열로 전달받는 것을 가능하게 함.
//:개수가 확정되지 않은 매개변수를 함수에 전달 가능

//기본형태
//매개변수 이름 앞에 ...를 표기:배열 타입으로 지정

{
    function sum(...nums: number[]): number {
        return nums.reduce((a,b) => a+b ,0);
    }
}



//함수 오버로딩
//1.함수는 하나 이상의 타입 시그니처를 획득 가능
//2. 함수는 '단 하나의 구현'을 가질 수 있다.
//: 여러 형태의 함수 타입을 정의 가능
// 단,구현은 한 번ㄴ만 가능(여러 형태에 대한 구현은 함수 본문 내에서 동작)

function doubleString(str:string): string {
    return '${str}${str}';
}
function doubleNumber(num:number): number {
    return (num*2); 
}

function doubleBoolean(arr:boolean[]): boolean[] {
    return arr.concat(arr);
}

{
    function double(str:string):string;
    function double(num:number):number;
    function double(num:boolean[]):booleam[];

    function double(argument:any) {
        if(typeof argument === 'string') {
            return '${str}${str}';
        }
        else if (typeof argument === 'number') {
            return argument*2;
        }
        else if (Array.isArray(argument)) {
            return argument.concat(argument);
        }
    }


    const str = double('abc');
    const num = double(5);
    const arr = double([true,false]);

    console.log(str);
    console.log(num);
    console.log(arr);
}

//This 타입
//:함수의 타입 시그니쳐(타입 정의)에서ㅏ 매개변수 가장 앞에 this를 추가
//:타입 시스템에서만 인시고디는 '가짜' 매개뱐수

interface HTMLElement {
    //tagName이라는 문자열 타입의 속성을 지정
    tagName:string;

}

interface Handler {
    (this:HTMLElement,event:Event,callback:()=>void):void;
}

const onClick:Handler=function(event,cb) {
    console.log(this.tagName);
    cb();
}

//this 타입을 void 로 명시할 시  함수내부에서 this에 접근하는걸 방지

interface NoThis {
    (this:void): void;
}

const niThis = function() {
    //this를 void로 선언해서 함수내부에서 this 접근 불가
}