 const observer = new IntersectionObserver((entries)=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting){
      entry.target.classList.add('show');
    }
  });
},{threshold:0.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

// Robust image handling: if a file is missing, slow, too large to load, or broken,
// show a clean labeled placeholder instead of a browser "broken image" icon.
function handleImgError(imgEl){
  const box = imgEl.closest('.img-box');
  if (box) box.classList.add('img-missing');
}

// Mark each image box as "loading" until the file finishes loading,
// so slow/large images show a soft placeholder instead of a blank gap.
document.querySelectorAll('.img-box img').forEach(img => {
  const box = img.closest('.img-box');
  if (!box) return;
  if (!img.complete) {
    box.classList.add('img-loading');
    img.addEventListener('load', () => box.classList.remove('img-loading'), { once: true });
  }
});
