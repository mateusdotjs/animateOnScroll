let divs = document.querySelectorAll('.teste')

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
}

let observer = new IntersectionObserver(callback, options)

divs.forEach(div => {
    observer.observe(div)
})

function callback(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.replace('hide', 'show')
        } else {
            entry.target.classList.replace('show', 'hide')
        }
    });
}


