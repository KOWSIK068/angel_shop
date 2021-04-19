function blur(element,exception) {
    for(let i=0;i<exception.length;i++)
    {
        exception[i]=document.querySelector(exception[i])
    }
    for (let i = 0; i < document.querySelector(element).childElementCount; i++) {
        if(!exception.includes(document.querySelector(element).children[i]))
            document.querySelector(element).children[i].style.filter = 'blur(0.6px)'
    }
}

function unblur(element) {
    for (let i = 0; i < document.querySelector(element).childElementCount; i++) {
        document.querySelector(element).children[i].style.filter = 'blur(0px)'
    }
}