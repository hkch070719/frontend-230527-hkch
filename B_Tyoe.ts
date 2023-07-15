


//타입 별칭 형태
//type NewType =Type;
//대문자로 시작

//타입 별칭을 갖게 될 타입(형테에서 type의 위치)의 자리에는 기본 타입을 포함한 모든 타입이 올 수 있다.

type UUID =string;
type Height = number;
type AnotherUUID =UUID;

type Animal = [];
type Animals = Animal[];
type User = {
    name: string;
    height: number;
}

function getUser(uuid: UUID) {
    return '${uuid.name},${uuid.height}';

}
//getUser(7); :"string"형식의 매개 변수에 할당될 수 없습니다.

let Seugnah: User = {
    name: 'Seugnah',
    height: 169
};
console.log(getUser(Seugnah));

function getUser2(uuid: UUID) {


}


console.log("할당 가능성")
//할당 가능성(티일 호환성)

type OddNuber =1;
const one: OddNuber=1;
const num: number =one;

type OneDigitOdd = 1 | 3 | 5 | 7 | 9 |
const three: oneDigitOdd =3;
num = three;



const four:number = 4;
num = four;
//const one2: OddNumber =four;


let phone;
phone = 'Galaxy';
phone.toUpperCase();

phone = 123;


