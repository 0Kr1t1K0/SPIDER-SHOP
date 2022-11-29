let box = document.querySelector('.abody a');

box.addEventListener("click", function() {
  box.classList.add('zoomOut');
});

// Отслеживаем окончание анимации
box.addEventListener("animationend", AnimationHandler, false);

function AnimationHandler () {
  // Удаляем класс с анимацией
  box.classList.remove('zoomOut');
}