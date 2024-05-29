document.addEventListener('DOMContentLoaded', () => {
  const list = new Array(15).fill(0);
  const content = document.querySelector('.content');
  list.forEach((_, index) => {
    const span = document.createElement('span');
    span.className = `span${index}`;
    content.appendChild(span);
  });
});
