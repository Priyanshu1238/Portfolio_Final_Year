//toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}



//scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top= window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
    let header = document.querySelector('header');

    header.classList.toggle('sticky',window.scrollY > 100);
}

document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('nav-menu');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('show');
  });
});

document.querySelectorAll('.projects__gallery img').forEach(img => {
  img.addEventListener('click', () => {
    const modal = document.getElementById('lightbox-modal');
    const modalImg = document.getElementById('lightbox-img');
    modalImg.src = img.src;
    modal.style.display = 'flex';
  });
});

document.querySelectorAll('#lightbox-modal, .close').forEach(el => {
  el.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox-modal' || e.target.classList.contains('close')) {
      document.getElementById('lightbox-modal').style.display = 'none';
    }
  });
});

