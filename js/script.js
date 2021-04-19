document.addEventListener("DOMContentLoaded", function () {
    var login_page = new Page_loader('login')
    setTimeout(()=>{
        document.getElementById("loader").style.display="none"
    },2000)
    document.getElementById("nav_container").addEventListener("click",()=>{
        login_page.load(login_script)
    })
})