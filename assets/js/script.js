document.addEventListener('DOMContentLoaded', function () {

// Open menu
    document.addEventListener('click', documentClick);
    function documentClick(e) {
        const targetItem = e.target;
        if(targetItem.closest('.icon-menu')){
            document.documentElement.classList.toggle('menu-open');
        }
    }

    // Scroll
    window.onscroll = function() {
      var el = document.getElementsByTagName('header')[0];
      var className = 'small';
      if (el.classList) {
        if (window.scrollY > 10)
          el.classList.add(className);
        else
          el.classList.remove(className);
      }
    };

// Click on the button, opening a hidden block.
    const button = document.getElementById("button-our-projects-more");
    const blocks = document.querySelectorAll(".block-container");
    button.addEventListener("click", function () {
      blocks.forEach((block) => {
        // Проверяем текущее состояние блока
        if (block.style.display === "none" || block.style.display === "") {
          block.style.display = "flex"; // Если скрыт или не определен, показываем блок
        } else {
          block.style.display = "none"; // Если отображается, скрываем блок
        }
      });
    });


// Нахождения блока по ID и переместить пользователя к нему туда
    // header__quantity
    document.getElementById('cart-header__quantity').addEventListener('click', function() {
        var block = document.querySelector('.section-wrapper__projects');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 100); // Remove the outlined effect after 1 second (1000 milliseconds)
    });

    // Проекты
    document.getElementById('cart-header__text').addEventListener('click', function() {
        var block = document.querySelector('.section-wrapper__projects');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    // Button in header
    document.getElementById('header__button').addEventListener('click', function() {
        var block = document.querySelector('.contact__wrapper');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });

    // Контакти Header
    document.getElementById('menu__contact').addEventListener('click', function() {
        var block = document.querySelector('.contact__wrapper');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 100); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    // Процес занять
    document.getElementById('menu__process').addEventListener('click', function() {
        var block = document.querySelector('.section__classes');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 200); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('cinemas__read-more1').addEventListener('click', function() {
        var block = document.querySelector('.block__projects1');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });document.getElementById('cinemas__read-more2').addEventListener('click', function() {
        var block = document.querySelector('.block__projects2');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });document.getElementById('cinemas__read-more3').addEventListener('click', function() {
        var block = document.querySelector('.block__projects3');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
            // Закрываем меню после прокрутки
            document.documentElement.classList.remove('menu-open');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });



// Default Container images
    document.getElementById('image-project1').addEventListener('click', function() {
        var block = document.querySelector('.block__projects1');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('image-project2').addEventListener('click', function() {
        var block = document.querySelector('.block__projects2');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('image-project3').addEventListener('click', function() {
        var block = document.querySelector('.block__projects3');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    document.getElementById('image-project4').addEventListener('click', function() {
        var block = document.querySelector('.block__projects4');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });
    // Button Default Container
    document.getElementById('default-container__button').addEventListener('click', function() {
        var block = document.querySelector('.section-wrapper__projects');
        block.classList.add('block-outlined');
        block.scrollIntoView({ behavior: 'smooth' });
        setTimeout(function() {
            block.classList.remove('block-outlined');
        }, 1000); // Remove the outlined effect after 1 second (1000 milliseconds)
    });



// Animation in Main section
    function fadeInOnScroll(elementId, duration) {
        var distance = window.innerWidth; // Начальное расстояние для анимации справа налево
        var op = 0; // Счетчик для каждой анимации
        var interval = 1; // Интервал в миллисекундах
        var increment = interval / duration;
        var element = document.getElementById(elementId);
        var isVisible = false;

        function fadeIn() {
            if (!isVisible && isElementInViewport(element)) {
                isVisible = true;
                var timer = setInterval(function() {
                    op += increment;
                    if (op >= 1) {
                        clearInterval(timer);
                    }
                    element.style.opacity = op;
                    distance -= increment * window.innerWidth; // Уменьшаем расстояние на ширину окна, чтобы анимация была справа налево
                    element.style.transform = `translateX(-${distance}px)`; // Применяем трансформацию для движения справа налево
                }, interval);
            }
        }

        function isElementInViewport(el) {
            var rect = el.getBoundingClientRect();
            return (
                rect.top >= 0 &&
                rect.left >= 0 &&
                rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
                rect.right <= (window.innerWidth || document.documentElement.clientWidth)
            );
        }

        window.addEventListener('scroll', fadeIn);
    }


// Animation in Default-container section
    window.onload = function() {
        fadeInOnScroll('default-container__p', 100); // Для элемента с id 'default-container__p'
        fadeInOnScroll('default-container__text', 300); // Для элемента с id 'default-container__text'
        fadeInOnScroll('classes', 100); // Для элемента с id 'classes'
        fadeInOnScroll('default-container__button', 100); // Для элемента с id 'default-container__button'
    };

});



    // ----------SLIDER-----------
  var radius = 440; // how big of the radius
  var autoRotate = true; // auto rotate or not
  var rotateSpeed = -70; // unit: seconds/360 degrees
  var imgWidth = 230; // width of images (unit: px)
  var imgHeight = 250; // height of images (unit: px)


  // ===================== start =======================
  // animation start after 1000 milliseconds
  setTimeout(init, 1000);

  var odrag = document.getElementById("slider__wrapp");
  var ospin = document.getElementById("spin-container");
  var aImg = ospin.getElementsByTagName("img");
  var aVid = ospin.getElementsByTagName("video");
  var aEle = [...aImg, ...aVid]; // combine 2 arrays

  // Size of images
  ospin.style.width = imgWidth + "px";
  ospin.style.height = imgHeight + "px";

  // Size of ground - depend on radius
  var ground = document.getElementById("ground");
  ground.style.width = radius * 3 + "px";
  ground.style.height = radius * 3 + "px";

  function init(delayTime) {
    for (var i = 0; i < aEle.length; i++) {
      aEle[i].style.transform =
        "rotateY(" +
        i * (360 / aEle.length) +
        "deg) translateZ(" +
        radius +
        "px)";
      aEle[i].style.transition = "transform 1s";
      aEle[i].style.transitionDelay = delayTime || (aEle.length - i) / 4 + "s";
    }
  }

  function applyTranform(obj) {
    // Constrain the angle of camera (between 0 and 180)
    if (tY > 180) tY = 180;
    if (tY < 0) tY = 0;

    // Apply the angle
    obj.style.transform = "rotateX(" + -tY + "deg) rotateY(" + tX + "deg)";
  }

  function playSpin(yes) {
    ospin.style.animationPlayState = yes ? "running" : "paused";
  }

  var sX, sY, nX, nY, desX = 0, desY = 0, tX = 0, tY = 10;

  // auto spin
  if (autoRotate) {
    var animationName = rotateSpeed > 0 ? "spin" : "spinRevert";
    ospin.style.animation = `${animationName} ${Math.abs(rotateSpeed)}s infinite linear`;
  }

  // setup events
  document.onpointerdown = function (e) {
    clearInterval(odrag.timer);
    e = e || window.event;
    var sX = e.clientX,
      sY = e.clientY;

    this.onpointermove = function (e) {
      e = e || window.event;
      var nX = e.clientX,
        nY = e.clientY;
      desX = nX - sX;
      desY = nY - sY;
      tX += desX * 0.1;
      tY += desY * 0.1;
      applyTranform(odrag);
      sX = nX;
      sY = nY;
    };

    this.onpointerup = function (e) {
      odrag.timer = setInterval(function () {
        desX *= 0.95;
        desY *= 0.95;
        tX += desX * 0.1;
        tY += desY * 0.1;
        applyTranform(odrag);
        playSpin(false);
        if (Math.abs(desX) < 0.5 && Math.abs(desY) < 0.5) {
          clearInterval(odrag.timer);
          playSpin(true);
        }
      }, 17);
      this.onpointermove = this.onpointerup = null;
    };

    return false;
  };

  document.onmousewheel = function (e) {
    e = e || window.event;
    var d = e.wheelDelta / 20 || -e.detail;
    radius += d;
    init(1);
  };
  // New JavaScript for enlarging image on click
document.addEventListener('DOMContentLoaded', () => {
  const enlargedSection = document.getElementById('enlarged-section');
  const enlargedImage = document.getElementById('enlarged-image');
  const closeButton = document.getElementById('close-button');
  const aImg = document.querySelectorAll('#spin-container img');

  Array.from(aImg).forEach(img => {
    img.addEventListener('click', (e) => {
      e.stopPropagation();
      playSpin(false); // Остановить анимацию
      enlargedImage.src = img.src; // Установить источник увеличенного изображения
      enlargedSection.style.display = 'flex'; // Показать увеличенную секцию
      setTimeout(() => {
        enlargedSection.classList.add('show'); // Добавить класс для плавного появления
      }, 10); // Небольшая задержка для запуска плавного перехода
    });
  });

  const closeEnlargedSection = () => {
    enlargedSection.classList.remove('show'); // Удалить класс для плавного исчезновения
    setTimeout(() => {
      enlargedSection.style.display = 'none'; // Скрыть увеличенную секцию после завершения анимации
      playSpin(true); // Возобновить анимацию
    }, 500); // Задержка совпадает с продолжительностью перехода
  };

  closeButton.addEventListener('click', (e) => {
    e.stopPropagation();
    closeEnlargedSection();
  });

  // Закрытие окна при нажатии на любое место на странице
  document.addEventListener('click', closeEnlargedSection);

  // Предотвращение закрытия окна при клике на само изображение или на enlargedSection
  enlargedSection.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  enlargedImage.addEventListener('click', (e) => {
    e.stopPropagation();
  });
});