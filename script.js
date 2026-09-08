const revealItems = document.querySelectorAll('.reveal');
const heartsLayer = document.querySelector('.floating-hearts');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.14 });

revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 90, 360)}ms`;
  revealObserver.observe(item);
});

function createFloatingHeart() {
  const heart = document.createElement('span');
  heart.className = 'floating-heart';
  heart.textContent = Math.random() > 0.35 ? '♥' : '♡';
  heart.style.left = `${Math.random() * 100}%`;
  heart.style.fontSize = `${12 + Math.random() * 14}px`;
  heart.style.animationDuration = `${4.5 + Math.random() * 3}s`;
  heartsLayer.appendChild(heart);
  heart.addEventListener('animationend', () => heart.remove());
}

setInterval(createFloatingHeart, 1900);
