var welcome = function (obj) {
    obj.holder.innerHTML = parse_data.propname(obj.holder.innerHTML, user_info)
    setTimeout(() => {
        document.querySelector("#user").style.fontSize = "0px"
    }, 1000)
    document.querySelector("#nav_window").addEventListener("mouseover", () => {
        document.querySelector("#nav_window").style.width = "240px"
        document.querySelector("#nav_window").style.cursor = "default"
        document.querySelector("#nav_window_closer").style.display = "block"
        blur("#content", ["#nav_window", "#nav_container"])
        setTimeout(()=>{document.querySelector("#nav_window_closer").style.backgroundColor = "rgba(0, 0, 0, 0.5)"},10)
    })
    document.querySelector("#nav_window_closer").addEventListener("click", () => {
        setTimeout(()=> {document.querySelector("#nav_window_closer").style.display = "none"},2000)
        document.querySelector("#nav_window_closer").style.backgroundColor = "rgba(0, 0, 0, 0)"
        document.querySelector("#nav_window").style.width = "10px"
        unblur("#content") //break point
    })

}
