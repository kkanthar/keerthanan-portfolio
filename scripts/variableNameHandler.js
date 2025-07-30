
const nameSpan = document.getElementById('name');
if (nameSpan){
    nameSpan.innerHTML = nameSpan.innerHTML
    .split("")
    .map((letter) => {
        return `<span>${letter}</span>`
    })
    .join("")

}



const spans = nameSpan.querySelectorAll('span');
document.addEventListener("mousemove", (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY; 

    spans.forEach((span) => {
        const bounds = span.getBoundingClientRect();
        const spanX = bounds.left + bounds.width / 2;
        const spanY = bounds.top + bounds.height / 2;

        const diffX = mouseX - spanX; 
        const diffY = mouseY - spanY;

        const distance = Math.sqrt(diffX * diffX + diffY * diffY);

        const normalizedDistance = distance / 150;


        const weight = 1000 - 400 * (normalizedDistance);
        span.style.fontVariationSettings = `'wght' ${weight}`;


    })


})

