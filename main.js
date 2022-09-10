(function(){
  const imgArr = ["https://js-beginners.github.io/background-image-slider-project/img/contBcg-0.jpeg","https://js-beginners.github.io/background-image-slider-project/img/contBcg-1.jpeg","https://js-beginners.github.io/background-image-slider-project/img/contBcg-2.jpeg","https://js-beginners.github.io/background-image-slider-project/img/contBcg-3.jpeg","https://js-beginners.github.io/background-image-slider-project/img/contBcg-4.jpeg"]
  let countPlus = 0
  document.getElementById("btn-l").addEventListener("click", function(){
    countPlus++
    if(countPlus < imgArr.length){
      document.getElementById("image-slider").style.backgroundImage = `url(${imgArr[countPlus]})`
    } else {
      countPlus = 0
      document.getElementById("image-slider").style.backgroundImage = `url(${imgArr[countPlus]})`

    }
  })
  /////////////
  document.getElementById("btn-r").addEventListener("click", function(){
    countPlus--
    if(countPlus < 0){
      countPlus = imgArr.length -1
      document.getElementById("image-slider").style.backgroundImage = `url(${imgArr[countPlus]})`
    } else {
      document.getElementById("image-slider").style.backgroundImage = `url(${imgArr[countPlus]})`
    }
    
  })
})()