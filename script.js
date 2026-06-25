const observer = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('show');}})},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
const counters = document.querySelectorAll('[data-target]');
const animateCounter = (el) => { const target = +el.dataset.target; const duration = 1200; const start = performance.now();
const step = (now) => { const progress = Math.min((now - start) / duration, 1); el.textContent = Math.floor(progress * target); if (progress < 1) requestAnimationFrame(step); else el.textContent = target; }; requestAnimationFrame(step); };
const statObserver = new IntersectionObserver((entries)=>{entries.forEach(entry=>{if(entry.isIntersecting){const h3 = entry.target.querySelector('h3'); if(h3 && !h3.dataset.done){animateCounter(h3); h3.dataset.done='1';}}})},{threshold:0.4});
document.querySelectorAll('.stat-card').forEach(card=>statObserver.observe(card));