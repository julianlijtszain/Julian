(function (){

    window.onload = function(){
         var  slides = document.getElementsByClassName("slide")
         var i = 1
         slides[0].className = "slide active"
          window.setInterval(function()  {

            console.log(i-1%slides.length)
            slides[(i-1)%slides.length].className = "slide"
            slides[i++%slides.length].className = "slide active"

        }, 2500)

    }

})();