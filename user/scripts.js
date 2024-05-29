document.addEventListener('DOMContentLoaded', () => {
  const list = new Array(15).fill(0);
  const animatedContent = document.querySelector('.animated-content');
  list.forEach((_, index) => {
    const span = document.createElement('span');
    span.className = `span${index}`;
    animatedContent.appendChild(span);
  });

  // Initialize the cartoon figure image
  const cartoonFigure = document.getElementById('cartoonFigure');
  if (cartoonFigure) {
    cartoonFigure.src = './laugh.png';
  }
});
