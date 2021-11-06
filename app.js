const content = document.querySelector(".content")
const headerWrapper = document.querySelector(".header_wrapper")
const headerWrapperHeight = headerWrapper.clientHeight

const sidebarBtn = document.querySelector('.sidebar_btn')
const sidebarItems = document.querySelectorAll('.sidebar_item')
const sidebarText = document.querySelectorAll('.sidebar_item_text')

let empty = true
window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset
    if(window.innerWidth > 600) {
        if(scrollTop >= headerWrapper.clientHeight) {
            content.classList.add("fixed")
        }
        if(scrollTop < headerWrapper.clientHeight) {
            content.classList.remove("fixed")
        }
    }
    
});

sidebarBtn.addEventListener('click', function(event) {
    event.preventDefault()
    sidebarText.forEach(text => {
        if(text.value.length === 0) {
            text.parentElement.classList.add("error");
            empty = true
        } else {
            empty = false
        }
    })
    if(!empty) {
        sidebarBtn.classList.add("clear")
    }
})

sidebarText.forEach(text => {
    text.addEventListener('input', function(e) {
        if(e.target.value !== 0) {
            text.parentElement.classList.remove("error");
        }
    })
})

















