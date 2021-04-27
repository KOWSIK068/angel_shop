class Page_loader{
    constructor(page,element){
        if (!element) {
            this.holder=document.body
        }
        else{
            this.holder=document.querySelector(element)
        }
        if (page=='login') {
            this.url="snippets/login_page.html"
        }
        else if (page=='welcome') {
            this.url="snippets/welcome_user.html"
        }
    }
    sload(method){
        parse_data.xml(this.url, (data) => {
            this.holder.innerHTML += data
            if(method)
                setTimeout(()=>{method(this)},20)
        })
    }
    load(method){
        parse_data.xml(this.url, (data) => {
            this.prev_data=this.holder.innerHTML
            this.holder.innerHTML = data
            if(method)
                setTimeout(()=>{method(this)},20)
        })
    }
    close(){
        this.holder.innerHTML=this.prev_data
    }
}