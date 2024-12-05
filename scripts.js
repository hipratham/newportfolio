// Typing Animation for Dynamic Description
const descriptions = [
    "Student",
    "Software Developer",
    "Tech Enthusiast",
    "Gamer",
];
let index = 0;
let charIndex = 0;
const dynamicDescription = document.getElementById('dynamic-description');

function typeText() {
    if (charIndex < descriptions[index].length) {
        dynamicDescription.textContent += descriptions[index].charAt(charIndex);
        charIndex++;
        setTimeout(typeText, 100);
    } else {
        setTimeout(eraseText, 2000); // Wait before erasing
    }
}

function eraseText() {
    if (charIndex > 0) {
        dynamicDescription.textContent = descriptions[index].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseText, 50);
    } else {
        index = (index + 1) % descriptions.length; // Move to next description
        setTimeout(typeText, 500);
    }
}

typeText();

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
        });
    });
});

// Back-to-Top Button
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'block';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Skill Progress Animation
const skillSections = document.querySelectorAll('.progress-bar span');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progress = entry.target.getAttribute('style');
            entry.target.style.width = progress;
        }
    });
}, { threshold: 0.5 });

skillSections.forEach(skill => observer.observe(skill));

// Interactive Graphics for Hover Effects
document.querySelectorAll('.contact-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = '#3498db';
        item.style.color = '#ffffff';
    });
    item.addEventListener('mouseout', () => {
        item.style.backgroundColor = '#f9f9f9';
        item.style.color = '#555';
    });
});

// Floating Particles Effect
document.addEventListener("mousemove", (e) => {
    const particle = document.createElement("div");
    particle.className = "particle";
    document.body.appendChild(particle);

    particle.style.left = `${e.pageX}px`;
    particle.style.top = `${e.pageY}px`;

    setTimeout(() => {
        particle.remove();
    }, 1000);
});

// Reveal on Scroll
const revealElements = document.querySelectorAll('.reveal');

const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;

    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top + scrollY;
        const revealPoint = 150; // Trigger point

        if (scrollY + windowHeight > elementTop + revealPoint) {
            element.classList.add('active');
        }
    });
};

window.addEventListener('scroll', handleScroll);
handleScroll(); // Initial check
