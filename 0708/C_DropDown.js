//드롭다운 목록:select 태그로 구현

//드롭다운 목록을 선택했을 떄(값이 변경되었을 떄)
//어떤 것을 선택했는자 출력하는 예제


document.addEventListener('DOMContentLoaded', () => {
    const select =document.querySelector('select')
    const p =document.querySelector('p')

    select.addEventListener('change',(event) => {
        const options = event.currentTarget.options
        const index = event.currentTarget.options.selectedIndex

        p.textContent='선택: ${options[index].textContent}'
    })

})

document.addEventListener('DOMContentLoaded', () => {
    const select =document.querySelector('select')
    const p =document.querySelector('p')

    select.addEventListener('change',(event) => {
        const options = event.currentTarget.options
        const list =[]
        for(const option of options) {
            if(option.selected) {
                list.push(option.textContent)
            }
        }

        p.textContent='선택: ${options[index].textContent}'
    })

})