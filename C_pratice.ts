function addNumbers(num1:number,num2:number):munber {
    return num1+num2;
}
console.log(addNumbers(10,20));

function greeting(message:string,name:string='guest'):string {

}

console.log(greeting('Hello'));
console.log(greeting('Hello','Jun Kuk'));


function combine(a:string,b:string): string;
function combine(a:number,b:number): number;

function combine(a:string|number,b:string|number): string|number {
    if(typeof a=== 'string'&& typeof b=== 'number') {
        return a+b;
    }
    else if(typeof)
}
console.log(combine('hi','hello'));
console.log(combine(1,2));



const double = (num:number):
