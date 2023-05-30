// Отримайте всі елементи, на які ви хочете застосувати плавний скрол
const links = document.querySelectorAll('a[href^="#"]');

// Додайте обробник події для кожного посилання
links.forEach(link => {
  link.addEventListener('click', smoothScroll);
});

// Функція, яка здійснює плавний скрол
function smoothScroll(e) {
  e.preventDefault();

  // Отримайте цільовий елемент, до якого потрібно прокрутити сторінку
  const targetId = this.getAttribute('href');
  const targetElement = document.querySelector(targetId);

  // Використовуйте window.scrollTo або Element.scrollIntoView для прокручування до цільового елемента з анімацією
  targetElement.scrollIntoView({
    behavior: 'smooth',
  });
}