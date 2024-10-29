<script>
    // Dein vorhandenes JavaScript
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides(slideIndex += n);
    }

    window.onresize = function(){
      location.reload();
    };

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        var w = window.innerWidth;

        if (w < 1200) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
            for (i = slideIndex - 1; i < slideIndex; i++) {
                if (i < slides.length) slides[i].style.display = "block";
            }
        } else if (w < 1800) {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
            for (i = slideIndex - 1; i < slideIndex + 1; i++) {
                if (i < slides.length) slides[i].style.display = "block";
            }
        } else {
            if (n > slides.length) slideIndex = 1;
            if (n < 1) slideIndex = slides.length;

            for (i = 0; i < slides.length; i++) slides[i].style.display = "none";
            for (i = slideIndex - 1; i < slideIndex + 2; i++) {
                if (i < slides.length) slides[i].style.display = "block";
            }
        }    
    }

    document.addEventListener("DOMContentLoaded", function() {
        // Menü-Toggle
        const menuToggle = document.querySelector('.hamburger');
        const menu = document.querySelector('.menu');

        if (menuToggle) {
            menuToggle.addEventListener('click', function() {
                menu.classList.toggle('open');
            });
        }

        // Funktion für das Ein- und Ausklappen
        function toggleDetails(event) {
            event.preventDefault();  // Verhindert das Springen nach oben
            const details = event.target.nextElementSibling;  // Greift auf das nächste Element zu
            
            if (details.style.display === "none" || details.style.display === "") {
                details.style.display = "block"; // Zeigt den Inhalt an
            } else {
                details.style.display = "none"; // Verbirgt den Inhalt
            }
        }

        // Event-Listener für alle expand-toggle-Links hinzufügen
        const toggleLinks = document.querySelectorAll('.expand-toggle');
        toggleLinks.forEach(link => {
            link.addEventListener('click', toggleDetails);
        });
    });
</script>
