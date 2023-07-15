console.log("Ts의 고급타입 : 유니언 타입");


let idol = Math.random() >0.5 ? undefined : "IVE";

let idol2: string | null =null;
if (Math.random()>0.5) {
   idol2 ='aespa';
}

//유니언 타입은 유니언으로 선언한 모든 가능한 타입에 존재하는 맴버 속성에만 접근 가능
let idol3 = Math.random() > 0.5 ? 123: "LE SSERAFIM"

// idol3.toUpperCass();
// idol3.toFixed();
idol3.toString();


actor=123;
AbortController.toFixed();

let actor2= Math.random() > 0.5 ? "Seo Kang Jun":29;

if(actor2 ==="Seo Kang Jun") {
    actor2.toUpperCase();

}
// actor2.toLocaleString(); :안됨

//typeof 검사를 통한 내로잉

if(typeof actor2==="string") {
    actor2.toFixed();
}
else {
    actor2.toUpperCase();
}

typeof actor2=== "string" ? actor2.toUpperCase() :actor2.toFixed();


//유니언 타입을 활용한 타입 별칭
type MyType = boolean | number | string | null | undefined;

let color1;
let color2;
let color3;