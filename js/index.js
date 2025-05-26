const navItems = document.querySelectorAll('.nav-item');
const chordFinderContent = document.getElementById('chord-finder-content');
const aboutChordContent = document.getElementById('about-chord-content');
const contactUsContent = document.getElementById('contact-us-content');

function handleNavClick(e, targetContent) {
    e.preventDefault();

    [chordFinderContent, aboutChordContent, contactUsContent].forEach(el => {
        el.style.display = el === targetContent ? 'block' : 'none';
    });

    navItems.forEach(item => {
        item.classList.toggle('active', item === e.currentTarget);
    });
}

document.getElementById('chord-finder').addEventListener('click', (e) => {
    handleNavClick(e, chordFinderContent);
});

document.getElementById('about-chord').addEventListener('click', (e) => {
    handleNavClick(e, aboutChordContent);
});

document.getElementById('contact-us').addEventListener('click', (e) => {
    handleNavClick(e, contactUsContent);
});