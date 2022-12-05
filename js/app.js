document.querySelector('.wrapper').style.display = "none"

window.addEventListener("load", ()=>{
    setTimeout(()=>{
        document.querySelector('.preloader').style.display = "none"
        document.querySelector('.wrapper').style.display = "block"
    }, 3000)
})
