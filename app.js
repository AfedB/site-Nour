const ulSlide = () => {
    const burger = document.querySelector('.burger');
    const ul = document.querySelector('.subheader ul');
    const subheaderli = document.querySelectorAll('.subheader li');



    burger.addEventListener('click', () => {
        //Toggle Nav
        ul.classList.toggle('subheader-active');

        //Animate Links
        subheaderli.forEach(link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `link.style.animation = `ulfade 0.5s ease forwards ${index / 7 }s`; 
            }
        });
    });

}

    ulSlide();
        
        