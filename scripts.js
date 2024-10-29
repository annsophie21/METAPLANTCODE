<script>
    // Dein vorhandenes JavaScript
    let slideIndex = 1;
    showSlides(slideIndex);
  
    function plusSlides(n) {
      showSlides(slideIndex += n);
    };
  
    window.onresize = function(){
      location.reload();
    };
  
    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        var w = window.innerWidth;
  
        if (w < 1200) {
            if (n > slides.length) {
                slideIndex = 1;
            }
  
            if (n < 1) {
                slideIndex = slides.length;
            }
  
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
  
            for (i = slideIndex - 1; i < slideIndex; i++) {
                if (i < slides.length) {
                    slides[i].style.display = "block";
                }
            }
        } else if (w < 1800) {
            if (n > slides.length) {
                slideIndex = 1;
            }
  
            if (n < 1) {
                slideIndex = slides.length;
            }
  
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
  
            for (i = slideIndex - 1; i < slideIndex + 1; i++) {
                if (i < slides.length) {
                    slides[i].style.display = "block";
                }
            }
        } else {
            if (n > slides.length) {
                slideIndex = 1;
            }
  
            if (n < 1) {
                slideIndex = slides.length;
            }
  
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
  
            for (i = slideIndex - 1; i < slideIndex + 2; i++) {
                if (i < slides.length) {
                    slides[i].style.display = "block";
                }
            }
        }    
    };

// Code für das ausklappbare Menü hinzufügen
document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.querySelector('.hamburger');
    const menu = document.querySelector('.menu');

    menuToggle.addEventListener('click', function() {
        menu.classList.toggle('open'); // Menü ein- oder ausblenden
    });
});

/* Versteckter Bereich bei den Workpackages*/
function toggleDetails(event) {
    event.preventDefault(); // Verhindert das Standardverhalten des Links
    const details = event.target.nextElementSibling;
    
    if (details.style.display === "none" || details.style.display === "") {
        details.style.display = "block";
        event.target.textContent = "▼ Details verbergen"; // Text ändern, wenn geöffnet
    } else {
        details.style.display = "none";
        event.target.textContent = "▶ Details anzeigen"; // Text zurücksetzen, wenn geschlossen
    }
}

</script>
