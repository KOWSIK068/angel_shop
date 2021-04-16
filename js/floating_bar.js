class floating_bar {
    constructor(bar) {
        this.bar = document.querySelector(bar)
        this.back = document.createElement("div")
        this.back.setAttribute("class", "blured_background")
        document.body.insertBefore(this.back, this.bar)
        var style_tag = document.createElement("style")
        style_tag.textContent = bar + `{
        margin: auto;
        position: absolute;
        border: 1.2px solid rgb(156, 156, 156);
        border-radius: 5px;
        background-color: white;
        padding: 13px;
        display: none;
        text-align: center;
    }
    ` + ".blured_background" + `{
        background-color: #0000003d;
        position: absolute;
        top: 0px;
        left: 0px;
        display: none;
    }`
        document.head.appendChild(style_tag)
        this.back.addEventListener("click", () => {
            this.dismiss()
        })
        this.tick_mark=document.createElement("video")
        this.tick_mark.style.width="30px"
        this.tick_mark.style.height="30px"
        this.tick_mark.style.display="none"
        this.tick_mark.innerHTML='<source src="img/tick_mark.mp4" type="video/mp4">'
        this.bar.appendChild(this.tick_mark)
    }
    show(width, height, background_str, blur_value) {
        if (background_str) {
            this.bar.style.backgroundColor = background_str
        }
        blur_value = blur_value || 0.6
        this.back.style.display = "block"
        this.back.style.width = innerWidth + "px"
        this.back.style.height = innerHeight + "px"
        var i
        for (i = 0; i < document.querySelector("body").childElementCount - 2; i++) {
            document.querySelector("body").children[i].style.filter = "blur(" + blur_value + "px)"
        }
        this.bar.style.display = "block"
        this.bar.style.width = width
        this.bar.style.height = height
        this.bar.style.width = this.bar.offsetWidth+1+"px"
        this.bar.style.height = this.bar.offsetHeight+"px"
        this.bar.style.top = innerHeight / 2 - this.bar.offsetHeight / 2 + "px"
        this.bar.style.left = innerWidth / 2 - this.bar.offsetWidth / 2 + "px"
    }

    mark_done(){
        for (let i = 0; i < this.bar.childElementCount; i++) {
            this.bar.children[i].style.display = "none"
        }
        this.tick_mark.style.display="block"
        this.tick_mark.style.margin="auto"
        this.tick_mark.style.marginTop=this.bar.clientHeight/2-30+"px"
        this.tick_mark.style.marginBottom=this.bar.clientHeight/2-30+"px"
        this.tick_mark.play()
        setTimeout(()=>{
            this.dismiss()
            this.tick_mark.pause()
            this.tick_mark.style.display="none"
            for (let i = 0; i < this.bar.childElementCount-1; i++) {
                this.bar.children[i].style.display = "block"
            }
        },1900)
    }

    dismiss() {
        this.back.style.display = "none"
        this.bar.style.display = "none"
        for (var i = 0; i < document.querySelector("body").childElementCount - 2; i++) {
            document.querySelector("body").children[i].style.filter = "blur(0px)"
        }
    }
}