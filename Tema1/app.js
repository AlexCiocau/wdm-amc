 const navSlide = () => {
    const burger = document.querySelectorAll('.burger');
    const nav = document.querySelectorAll('.nav-links');

   burger.addEventListener('click', () => {
         nav.classList.toggle('nav-active');
     });
 }

 navSlide();
