function countdown()    {
    var seconds = document.getElementById("seconds").value;

    function tick() {
        seconds = seconds - 1;  //countdown by 1 second at a time
        timer.innerHTML = seconds;
        setTimeout(tick, 1000); //pause for 1 second
    if(seconds == -1)   {
      var slideIndex = 1;
      var slideIndex = 0;
      showSlides();
      
      function showSlides() {
        var i;
        var slides = document.getElementsByClassName("mySlides"); //pull slides to play
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {slideIndex = 1}  //display next slide
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, 3000); // Change image every 3 seconds
      }

      }
          }
    tick();
}


