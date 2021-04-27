var itemcard = function (obj) {
    var item = document.createElement("div")
    item.classList.add("row_holder")
    item.classList.add("remove")
    item.innerHTML = parse_data.propname(`<div class="row" style="background-image: url(../img/items/{{img}});">
    <div class="circle"></div>
    <div class="item_name">{{name}}</div>
    <div class="buy button button_hover">&#8377;{{price}}</div>
    </div>`, obj)
    document.querySelector("#content").appendChild(item)
}

var home = function () {
    parse_data.json("data/content.json", (json) => {
        document.querySelector("#content").innerHTML=""
        for (let i = 0; i < json.length; i++) {
            itemcard(json[i])
        }
        if (innerWidth < 780)
            document.querySelector("#content").style.height = "93vh"
        else
            document.querySelector("#content").style.height = "90vh"
    })
}

var welcome = function (obj) {
    var expanded = false
    window.inwork = false
    function nav_expander() {
        if (!window.inwork) {
            if (expanded) {
                expanded = false
                window.inwork = true
                document.querySelector(".nav_button").classList.remove("nav_active")
                setTimeout(() => {
                    document.querySelector("#nav_window_closer").style.display = "none"
                    window.inwork = false
                }, 1000)
                document.querySelector("#nav_window_closer").style.backgroundColor = "rgba(0, 0, 0, 0)"
                document.querySelector("#nav_window").style.width = "0px"
                unblur("#content")
            }
            else {
                window.inwork = true
                expanded = true
                document.querySelector(".nav_button").classList.add("nav_active")
                document.querySelector("#nav_window").style.width = "240px"
                document.querySelector("#nav_window").style.cursor = "default"
                document.querySelector("#nav_window_closer").style.display = "block"
                blur("#content", ["#nav_window", "#nav_container"])
                setTimeout(() => { document.querySelector("#nav_window_closer").style.backgroundColor = "rgba(0, 0, 0, 0.5)" }, 2)
                setTimeout(() => { window.inwork = false }, 995)
            }
        }
    }
    obj.holder.innerHTML = parse_data.propname(obj.holder.innerHTML, { name: localStorage.getItem("user_name") })
    setTimeout(() => {
        document.querySelector("#user").style.transition = "font-size 3s"
        document.querySelector("#user").style.fontSize = "0px"
        setTimeout(()=>{home()},3000)
    }, 1500)
    var nav_button = document.createElement("div")
    nav_button.innerHTML = '<hr><hr><hr>'
    nav_button.setAttribute("class", "button button_hover nav_button")
    nav_button.addEventListener("click", () => {
        nav_expander()
    })
    document.getElementById("nav_container").appendChild(nav_button)
    document.querySelector("#nav_window_closer").addEventListener("click", () => {
        nav_expander()
    })
    document.querySelector("#home").addEventListener("click",()=>{
        document.querySelector("#content").style.transition="height 0s"
        document.querySelector("#content").style.height="0px"
        setTimeout(()=>{
            document.querySelector("#content").style.transition="height 2s"
            home()
        },1000)
        nav_expander()
    })
    document.querySelector("#about").addEventListener("click",()=>{
        document.querySelector("#content").style.transition="height 0s"
        document.querySelector("#content").style.height="0px"
        setTimeout(()=>{
            document.querySelector("#content").style.transition="height 2s"
            parse_data.xml("snippets/about.html", (data) => {
                document.querySelector("#content").innerHTML=data
                if (innerWidth < 780)
                    document.querySelector("#content").style.height = "93vh"
                else
                    document.querySelector("#content").style.height = "90vh"
            })
        },1000)
        nav_expander()
    })
}