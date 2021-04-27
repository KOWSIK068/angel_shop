document.addEventListener("DOMContentLoaded", function () {
    var user_name= localStorage.getItem("user_name")
    if (user_name) {
        var name_page=new Page_loader('welcome')
        name_page.load(welcome)
    }
    else{
        var login_page = new Page_loader('login')
        login_page.load(login_script)
    }
})