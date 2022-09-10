(function () {
  const colors = ["blue", "green", "orange", "yellow", "pink", "aquamareen", "black", "brown", "grey" , "red"]
  document.getElementById("btn-main").addEventListener("click", function(){
    let x = Math.floor(Math.random() * colors.length)
    document.getElementById("background-container").style.backgroundColor = colors[x]
  })
})()