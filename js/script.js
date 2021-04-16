document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        parse_data.xml("snippets/login_page.html", (data) => {
            document.getElementById("loader").style.display = "none"
            document.body.innerHTML = data
            login_script()
        })
    }, 4000)
})