function onceAgain() {
    const spans = document.querySelectorAll('.centered-text .span1');
    spans.forEach(span => {
      span.style.animation = 'none';
      span.offsetHeight; /* trigger reflow */
      span.style.animation = '';
    });
  }
  