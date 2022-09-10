(function() {
  document.getElementById("btn").addEventListener("click", function(event){
    let inputVal = document.getElementById("int-message").value 
    if (Boolean(inputVal) === false ) {
      document.getElementById("error").style.display = "inline-block"
      setTimeout(()=>{
        document.getElementById("error").style.display = "none"
      }, 2000)
    } else {
      document.getElementById("message").innerText = inputVal
      document.getElementById("int-message").value = ""

    }
    
    //console.log(document.getElementById("int-message").value)
  })
})()