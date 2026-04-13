// Active nav highlight based on current page
const page = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === page) a.classList.add('active');
});

// Stagger blog row animations
document.querySelectorAll('.blog-row').forEach((row, i) => {
  row.style.opacity = '0';
  row.style.transform = 'translateY(12px)';
  row.style.transition = `opacity 0.4s ease ${i * 0.08}s, transform 0.4s ease ${i * 0.08}s`;
  requestAnimationFrame(() => {
    row.style.opacity = '1';
    row.style.transform = 'translateY(0)';
  });
});
