const arrColors = ["0","1","2","3","4","5","6","7","8","9","A","B","C", "D", "E", "F"]

document.getElementById("button-id").addEventListener("click", function(){
    const arrHexNum = []
    let num = arrColors.length
    for (let i = 0; i < 6; i++) {
        let ranNum = Math.floor(Math.random() * num)
        arrHexNum.push(arrColors[ranNum])
    }
    const newHex = arrHexNum.reduce((before,after) => before += after)
    document.getElementById("main-background").style.backgroundColor = `#${newHex}`
    console.log(`#${newHex}`)
})