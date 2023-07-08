const object = {
    name: '자바 스크립트',
    price:18000,
    publosher:'코리아 it 아카데미'
}

//길다
if (object.name !== undefined) {
    console.log('name 속성이 있습니다')
} else {
    console.log('name 속성이 없습니다')
}

if (object.author !== undefined) {
    console.log('author 속성이 있습니다')
} else {
    console.log('author 속성이 없습니다')
}

//간단한
object.name || console.log('name 속성이 없습니다')
object.author || console.log('author 속성이 없습니다')


const object2 = {
    name: '자바 스크립트',
    price : 18000,
    publosher:'코리아 it 아카데미'
}

object2.name=object2.name !== undefined ? object2.name : '제목 미정'
object2.author=object2.author !== undefined ? object2.author : '제목 미정'

console.log(object2)


console.log(JSON.stringify(object2,null,2))
console.log("======================")



console.log(object2.name=object2.name || '제목 미정')
console.log(object2.author=object2.author || '제목 미정')







//다중 할당 기본구조
//[식별자,식별자....]
//a,b=변수
let [a,b]=[1,2];
console.log(a,b);

[a,b]=[b,a];
console.log([2,1]);


let arrayA=[1,2,3,4,5];
const [aa,bb,cc] =arrayA

console.log(aa,bb,cc);

//객체 속성을 꺼내서 다중 할당
//{속성이름,속성이름....}
//{식별자=속성 이름,식별자=속성 이름,,,,,,}

const object3 = {
    name: '자바 스크립트',
    price : 18000,
    publosher:'코리아 it 아카데미'
}

const {name , price} = object3;

console.log('속성이름 그대로 꺼내서 출력하기');
console.log(name,price);
console.log('')

const {aaa=name,bbb=price} = object3;

console.log('다른 이름으로 속성 꺼내서 출력하기');
console.log(aaa,bbb); 


//배열.객체는 할당시 앝은 복사가 이루어진다

const food1 =['우유','식빵'];
const food2=food1;
console.log(food2);
food2.push('고구마')
food2.push('토마토')

console.log(food1);// [우유 식빵 토마도 고구마]
console.log(food2); //[우유 식빵 토마도 고구마]


//깊은 복사(클론 복사)
//전개 연산자를 사용해서 깊은 복사를 할 수 있다.

//[...베열]

const food3=['milk','bread'];
const food4=[...food3];
food4.push('meet');
food4.push('fish');

console.log(food3);
console.log(food4);

const food5 =['두유','떡'];
const food6 =['과자', ...food5,'음료수'];

console.log(food5);
console.log(food6);


const array1=['우유','식빵'];
const array2=['두유','떡'];

console.log([...array1,...array2])
console.log([...array2,...array1])

//전개 연산자를 사용한 객체 복사
//{...객체}

//앑은 복사로 객체 복사하기

const cloud= {
    namd: '구름',
    age:3,
    breed:'푸들'
}
const star= {
    namd: '별',
    age:2,
    breed:'리트리버'
}

console.log(JSON.stringify(cloud));
console.log(JSON.stringify(star));
console.log('======================')

const cloud2= {
    namd: '구름',
    age:3,
    breed:'푸들'
}
const star2= {...cloud2};
star2.name="별"
star2.aga="2"
star2.breed="리트리버"


console.log(JSON.stringify(cloud2));
console.log(JSON.stringify(star2));



const cloud3= {
    namd: '구름',
    age:3,
    breed:'푸들'
}

const star3= {
    namd: '별',
    age:2,
    breed:'리트리버',
    vaccination:true,
    ...cloud3
}

console.log(JSON.stringify(cloud3));
console.log(JSON.stringify(star3));

const cloud4= {
    namd: '구름',
    age:3,
    breed:'푸들'
}

const star4= {
    namd: '별',
    age:2,
    breed:'리트리버',
    vaccination:true,
    ...cloud3
}


console.log(JSON.stringify(cloud4));
console.log(JSON.stringify(star4));

