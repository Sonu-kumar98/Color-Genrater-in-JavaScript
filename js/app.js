const getColor =() => {
    // Hex Color
    const randomNumber=Math.floor(Math.random()*1677215)
    const  randmCode= "#" + randomNumber.toString(16);
    document.body.style.background = randmCode;
    document.getElementById("colorCode").innerText =randmCode;
    navigator.clipboard.writeText(randmCode)

}

// event call
document.getElementById("clickMeButton").addEventListener(
    "click", getColor
)

// init call
getColor();