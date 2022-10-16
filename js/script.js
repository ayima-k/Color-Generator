const $submit = document.querySelector('.submit');
const $colors = document.querySelectorAll('.color');
const $p = document.querySelectorAll('p');
function generationColor(){
    return `#${Math.floor(Math.random() * 1670772346).toString(16)}`
}
window.addEventListener('load', () => {
    $colors.forEach(item => item.style.backgroundColor = generationColor())
    $p.forEach(item => item.innerHTML = generationColor())
})
$submit.addEventListener('click', e => {
    e.preventDefault()
    $colors.forEach(item => item.style.backgroundColor = generationColor())
    $p.forEach(item => item.innerHTML = generationColor())
})