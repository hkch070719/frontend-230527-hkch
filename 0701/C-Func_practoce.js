function isLeapYear(year) {
    return (year %4 ===0) && (year% 100 !==0) || (year %400==0)
 }

 console.log('2020년은 윤년일까? ===${isLeapYear(2020)} ');
 console.log('2010년은 윤년일까? ===${isLeapYear(2010)} ');

 function sumAll(a,b) {
    let output = 0;
    for(let i=a; i <=b ; i++) {
        output+=i;

    }
    return output;
 }

 function min(array) {
    let output = array[0]; [2,0,1,5,7]
    for(const item of array) {
        if(output >item) {
            output=item
        }
    }
    return output;
 }
 console testArray=[52,114,46,24325,6456,34,3]
 console.log($(testArray))