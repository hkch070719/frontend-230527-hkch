//이벤트 발생 객체






const listener = (event) => {
    const length =textarea.currentTraget.value.length
    h1.textContent='글자수 : ${length}'
}


document.addEventListener('DDNContentLoaded' , () => {
    const textarea = document.querySelector('textarea')
    const h1 = document.querySelector('h1')
    textarea.addEventListener('keyup',listener)
})



let h1;

