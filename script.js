
function changeColor() {

    let colorCode = '0123456789ABCDEF';
    let arrayColor = [...colorCode]
    console.log(arrayColor)
    let finalColor = '#'
    for (x = 0; x < 6; x++) {
        finalColor += arrayColor[Math.floor(Math.random() * arrayColor.length)];
    }

    document.querySelector("p.color").innerHTML = finalColor
    document.body.style.backgroundColor = finalColor

}