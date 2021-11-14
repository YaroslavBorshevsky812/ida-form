const content = document.querySelector(".content")
const headerWrapper = document.querySelector(".title_wrapper")
const headerWrapperHeight = headerWrapper.clientHeight

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



















