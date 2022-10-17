let pizarra = document.querySelector('section')
let paper;
let button = document.getElementById('erase')



button.addEventListener('click', function(){
    paper.forEach(function(erase) {
        erase.classList.remove("draw")
    })
})

function getPizarra() {
    for (let i = 0; i < 256; i ++) {
        let div = document.createElement('div')
        pizarra.appendChild(div)
    }
    paper = document.querySelectorAll('div');
    paper.forEach(function(draw){
        draw.addEventListener('mouseover', function(){
            draw.classList.add("draw")
        })
    })
}

getPizarra()