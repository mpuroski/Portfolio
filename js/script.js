const resumeBtns = document.querySelectorAll('.resume-btn');

resumeBtns.forEach((btn, idx) => { // Hier wird der Index des Buttons übergeben
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');
        
        // Entferne 'active' von allen Buttons
        resumeBtns.forEach(bth => {
            bth.classList.remove('active');
        });
        
        // Füge 'active' zum geklickten Button hinzu
        btn.classList.add('active');

        // Entferne 'active' von allen Detail-Inhalten
        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });

        // Füge 'active' dem Detail-Inhalt des entsprechenden Buttons hinzu
        resumeDetails[idx].classList.add('active');
    });
});
