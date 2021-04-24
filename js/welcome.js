var welcome = function (obj) {
    var expanded = false
    window.inwork = false
    function nav_expander() {
        if (!window.inwork) {
            if (expanded) {
                expanded=false
                window.inwork = true
                document.querySelector(".nav_button").classList.remove("nav_active")
                setTimeout(() => { document.querySelector("#nav_window_closer").style.display = "none"
                    window.inwork=false
                }, 1000)
                document.querySelector("#nav_window_closer").style.backgroundColor = "rgba(0, 0, 0, 0)"
                if(innerWidth<779.99)
                    document.querySelector("#nav_window").style.width = "0px"
                else
                    document.querySelector("#nav_window").style.width = "4px"
                unblur("#content")
            }
            else {
                window.inwork = true
                expanded=true
                document.querySelector(".nav_button").classList.add("nav_active")
                document.querySelector("#nav_window").style.width = "240px"
                document.querySelector("#nav_window").style.cursor = "default"
                document.querySelector("#nav_window_closer").style.display = "block"
                blur("#content", ["#nav_window", "#nav_container"])
                setTimeout(() => { document.querySelector("#nav_window_closer").style.backgroundColor = "rgba(0, 0, 0, 0.5)" }, 2)
                setTimeout(()=>{window.inwork=false},995)
            }
        }
    }
    obj.holder.innerHTML = parse_data.propname(obj.holder.innerHTML, { name: localStorage.getItem("user_name") })
    setTimeout(() => {
        document.querySelector("#user").style.transition = "font-size 3s"
        document.querySelector("#user").style.fontSize = "0px"
    }, 1500)
    var nav_button = document.createElement("div")
    nav_button.innerHTML='<hr><hr><hr>'
    nav_button.setAttribute("class", "button button_hover nav_button")
    nav_button.addEventListener("click", () => {
        nav_expander()
    })
    document.getElementById("nav_container").appendChild(nav_button)
    document.querySelector("#nav_window").addEventListener("mouseover", () => {
        if (!expanded) {
            nav_expander()
        }
    })
    document.querySelector("#nav_window_closer").addEventListener("click", () => {
        nav_expander()
    })
}