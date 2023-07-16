//객체
//객처타입 지정 (!=오브젝트 리터럴)
//1.콜론의 우변에는 값 대신 해당 속성의 타입이 지정
//2.구분자로 콤마,세미콜론
//3.객체의 값과 동일한 속성명,원시 타입을 가짐



const seungah: {
    name: string
    height:number;
} = {
    name:'이름',
    height:170,
}
//객체 속성에 접근하는 방법
//(value.맴버,value['맴버'])
console.log(seungah.name);
console.log(seungah['height']);

//객체 타입 선언

let teacher: {
    born: number,
    name:string,
}

teacher = {
    born: 1234,
    name:"영어이름",
}

//별칭 객체 타입

type Singer= {
    born:number,
    name:string,
}

let roes: Singer ={
    born:1111,
    name:'Roes',
}
let jenny: Singer = {
    born:2222,
    name:'Jenny',
}

//선택 속성(프로퍼티)
//속성명 뒤에 (?)을 붙쳐서 해당 속성이 없다는걸 표현
//(공백시 에러)


const userUnkwonHeigth: {
    name:string;
    height?:number;

} = {
    name:"이름"
}
console.log(userUnkwonHeigth.name);
console.log(userUnkwonHeigth.height); //undefined

//읽기 전용 속성
//속성명 앞에 readonly 키워드를 붙여 해당 속성의 재활당을 막는다
//:readonly 키워드를 붙은 속성 = const 속성 이용한 변수 정의

{
    const User: {
        name:string,
        height:number,
    }={
        name:"이름",
        height:170,
    }

    User.height=158
}


//구조적 타이핑
//:특정 타입의 구조만을 충족시 같은타입으로 간주

type WithFirstName = {
    firstName:string;
}

type WithLastName = {
    lastName:string;
}

const hasBoth = {
    firstName: "름",
    lastName:"이",
}

let withFirstName:WithFirstName=hasBoth;
let withLirstName:WithLastName=hasBoth;

console.log(withFirstName);
console.log(withLirstName);



type Poem = {
    autor: {
        firstName: string;
        lastName: string;
    };
    naem:string;
}

const poem:Poem = {
    autor: {
        firstName: "름"
        lastName: "이"
    };
    name:"flower"
}
console.log(poem);

type Pages= {
    name:string;
    pages:number;
}

type Flag = {
    name: string;
    flag: boolean;
}

type Poem = Pages | Flag ;

const poem:Poem = Math.random() > 0.5 ? {name:"름",
pages:10} : {name:"Dokyung",flag:true};

poem.naem;




{
    type Artwork = {
        genre: string;
        name:string;
    }

    type Writing = {
        pages: number;
        name:string;
    }

    type WrittenArt=Artwork & Writing;
    type User= {name:string} & ({nickname:string; message:"hello";} | {height:number; message:"hi"});

    const seunaAh:User = {
        name:"이름",
        height:170,
        message:"hi",
    }

    const junLck:User = {
        name:"이준국",
        nickname:"leroro",
        message:"hello",
    }
}

//인덱스 서명
//객체의 속성에 동적으로 접근 가능한 기능
//객체의 속성명과 타입을 사전에 정의하지 않고도 동적으로 속성 추가 가능

//기본형테
//:객체 타입 정의 시 대괄호[]를 사용하여 선언

//[orioertyName: indexType ]:valueType;
//propertyName:인덱스 서명에 대한 속성명(보통 문자열,숫자 타입)
//indexTyoe:인덱스 타입
//valieType:해당 인덱스에 접근할 떄 반환되는 값의 타입

//1,문자형 인텍스 서명

type Car ={
    brand: string;//필수
    [propertyName:string]: any;//문자열 인덱스 서명
    //예) Car타입을 부여받는 객체는 모든 이름의 추가 프로퍼티를 가질 수 있다.
}

const myCar = {
    beand:" BNW",
    color:"blue",
    year:2023,
}

//2. 수자 인덱스 사명
type NumberArray= {
    [index:number]: number;

}

const nyArray:NumberArray=[12,3,4,5];