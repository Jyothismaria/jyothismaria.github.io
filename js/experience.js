let activeId = 'wayfair';

function toggle(id) {
  if (id === activeId) return;
  document.getElementById('body-' + activeId).classList.remove('open');
  document.querySelectorAll('[data-id="' + activeId + '"]').forEach(d => d.classList.remove('active'));
  document.getElementById('body-' + id).classList.add('open');
  document.querySelectorAll('[data-id="' + id + '"]').forEach(d => d.classList.add('active'));
  activeId = id;
}

document.querySelectorAll('.vt-card, .vt-dot').forEach(el => {
  el.addEventListener('click', () => {
    const id = el.dataset.id;
    if (id) toggle(id);
  });
});
