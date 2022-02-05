const navSlider = ()=>{
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', ()=>{
        nav.classList.toggle('nav-active');

        navLinks.forEach((item, index)=>{
            if(item.style.animation){
                item.style.animation = '';
            }else{
                item.style.animation = `navLinksAnim 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
        burger.classList.toggle('change')
    });
}

navSlider()

