function login_script(login_page){
    var login_bar=new floating_bar("#login_bar")
    document.getElementById("login_button").addEventListener("click",()=>{
        login_bar.show("auto","auto")
    })
    document.getElementById("google_button").addEventListener("click",()=>{
    })
    var new_registration=new floating_bar("#new_register_bar")
    document.getElementById("register_now").addEventListener("click",()=>{
        new_registration.show("auto","auto")
    })
    document.getElementById("create").addEventListener("click",()=>{
        var flag=false
        var inputs=document.querySelectorAll("#new_register_bar>*>input")
        for(let i=0;i<inputs.length;i++)
        {
            if (!inputs[i].value) {
                inputs[i].value="*fill here first"
                flag=true
            }
        }
        if(!flag)
        {
            localStorage.setItem("user_name",document.querySelector("#first_name_input").value)
            localStorage.setItem("user_mail_id",document.querySelector("#password_input").value)
            new_registration.mark_done(()=>{
                login_page.close()
                window.name_page=new Page_loader('welcome')
                name_page.load(welcome)
            })
        }
    })
}
