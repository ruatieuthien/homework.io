
const btnSeach = document.querySelector('#search-btn')
const input = document.querySelector('#search')

const content = document.querySelector('.text__content')
const data = document.querySelector('.data')
const warning = document.querySelector('.warning')
const keywordNumber = document.querySelector('.keyword__number')

input.oninput = (e) => {
    keywordNumber.innerText = ''
    warning.innerText = ''

}

btnSeach.onclick = () =>{
    let value = input.value.trim()
    let numberKeySearch = 0

    const lengthValue = value.length
    
    const keyStart = content.innerText.toLowerCase().indexOf(value)
    const text = content.innerText.slice(keyStart,keyStart + lengthValue)
    if(keyStart === - 1 || value === ''){
        warning.innerText = 'Không tìm thấy nội dung'
    }else{
        let a = new RegExp(`${value}`, 'ig')
        const newContent = content.innerText.replaceAll(a,(item)=>{
            numberKeySearch++
            return `<span>${text}</span>`
        })


        keywordNumber.innerText = `Số lượng từ khóa: ${numberKeySearch}`
        
        data.innerHTML = `<p>${newContent}</p>`
    }

}