const cards = document.querySelector('.cards')

const nameInput = document.getElementById('name')
const descriptionInput = document.getElementById('description')
const imageInput = document.getElementById('image')
const priceInput = document.getElementById('price')

const sidebarText = document.querySelectorAll('.sidebar_item_text')
const btn = document.querySelector('.sidebar_btn')

const randomId = () => {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15)
}

const normalPrice = (str) => {
    return String(str).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ')
}

const render = () => {
    cards.textContent = ''

    data.forEach((el, index) => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.setAttribute('data-id', randomId())
        card.insertAdjacentHTML('afterbegin', `
             <img class="card_picture" src="${el.image}" alt="img">
             <div class="card_content">
                 <h4 class="card_content_title">${el.name}</h4>
                 <p class="card_content_text">
                     ${el.description}
                 </p>
                 <h3 class="card_content_price">${el.price}<span class="rub">руб.</span></h3>
             </div>
        `)
        cards.appendChild(card)

        const deleteBtn = document.createElement('div')
        deleteBtn.classList.add('card_delete')
        deleteBtn.insertAdjacentHTML('afterbegin', `<img src="./images/delete.png" alt="">`)
        card.appendChild(deleteBtn)
        deleteBtn.addEventListener('click', (e) => remove(e, index))
     })
}

render()

const remove = (e, index) => {
    data.splice(index, 1)
    render()
}

// https://i.postimg.cc/Y2nBd8RZ/image.png
// https://i.postimg.cc/BZMWxZ7c/image.png

btn.addEventListener('click', (e) => {
    e.preventDefault()
    if(nameInput.value.length && priceInput.value.length && imageInput.value.length !== 0) {
        data.push({
            id: (data.length + 1).toString(),
            name: nameInput.value,
            description: descriptionInput.value,
            price: normalPrice(priceInput.value),
            image: imageInput.value
        })
        nameInput.value = ""
        descriptionInput.value = ""
        imageInput.value = ""
        priceInput.value = ""
        btn.classList.remove('green')
        render()
    } else 
        sidebarText.forEach(text => {
            if(text.value.length === 0) {
                text.parentElement.classList.add("error");
            }
        })
})

sidebarText.forEach(text => {
    text.addEventListener('input', function(e) {
        if(e.target.value !== 0) {
            text.parentElement.classList.remove("error");
        }
        if(nameInput.value.length && priceInput.value.length && imageInput.value.length !== 0) {
            btn.classList.add('green')
            btn.disabled = false
        } else {
            btn.classList.remove('green')
        }
    })
    
})
