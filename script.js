let divs = document.querySelectorAll('.teste')
let ps = document.querySelectorAll('p')
let input = document.querySelector('input')
console.log(input)

let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.25
}

let observer = new IntersectionObserver(callback, options)

observer.observe(input)

divs.forEach(div => {
    observer.observe(div)
})

ps.forEach(p => {
    observer.observe(p)
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


