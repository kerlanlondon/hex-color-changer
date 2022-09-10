(function(){
let totalVal = 0
function colorNum(){
  if(totalVal < 0) {
    document.getElementById("number").style.color = "var(--main-red)"
  } else if (totalVal > 0) {
    document.getElementById("number").style.color = "var(--main-green)"
  } else {
    document.getElementById("number").style.color = "var(--main-grey)"
  }
  document.getElementById("number").textContent = totalVal
}

document.getElementById("btn-low").addEventListener("click", function(){
  totalVal--
  colorNum()
})
document.getElementById("btn-add").addEventListener("click", function(){
  totalVal++
 colorNum()
})

})()