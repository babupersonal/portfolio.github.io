var threeswiper = new Swiper(".threeswiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
var muswiper = new Swiper(".muswiper", {
  direction: "vertical",
  slidesPerView: 1,
  spaceBetween: 30,
  mousewheel: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

/*
var sound = document.querySelector('.portfolio .music .circle');
var audios = document.querySelectorAll('.song');

// 遍历 NodeList 中的每个元素
audios.forEach(function(audio) {
  audio.addEventListener('play', function() {
    sound.style.animation = 'rotate 8s linear infinite';
  });

  audio.addEventListener('pause', function() {
    sound.style.animation = 'none';
  });
});
*/

var soundPlates = document.querySelectorAll('.music .circle');
var audios = document.querySelectorAll('.song');

for (var x = 0; x < audios.length; x++) {
  (function(index) {
    audios[index].addEventListener('play', function() {
      soundPlates[index].style.animation = 'rotate 8s linear infinite';
    });

    audios[index].addEventListener('pause', function() {
      soundPlates[index].style.animation = 'none';
    });
  })(x);
}

