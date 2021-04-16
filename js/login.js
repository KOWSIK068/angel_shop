function login_script(){
    var login_bar=new floating_bar("#login_bar")
    document.getElementById("login_button").addEventListener("click",()=>{
        login_bar.show("auto","auto")
    })
    document.getElementById("google_button").addEventListener("click",()=>{
        login_bar.mark_done()
    })
}
