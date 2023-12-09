function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  function handleScrollAnimation() {
    const bookItems = document.querySelectorAll('.book-item');
    
    bookItems.forEach(book => {
      if (isInViewport(book)) {
        book.classList.add('book-show');
      }
    });
  }
  window.addEventListener('scroll', handleScrollAnimation);
  document.addEventListener('DOMContentLoaded', handleScrollAnimation);
  