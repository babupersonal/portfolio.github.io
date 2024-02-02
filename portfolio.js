var threeswiper = new Swiper(".threeswiper", {
  slidesPerView: 3,
  spaceBetween: 30,
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

let titlelist = ["KAIXUAN HUANG","「作」品集"];
let count=0;
setInterval(function() {
  document.title = titlelist[count % titlelist.length];
  count++;
},2000);

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

document.addEventListener('DOMContentLoaded', function () {
  var godown = document.querySelector(".godown");

  godown.addEventListener('click', function () {
      // 获取当前滚动位置
      var startY = window.scrollY;

      // 计算滚动的目标位置
      var targetY = startY + window.innerHeight;

      // 调用滚动动画函数
      smoothScroll(startY, targetY);
  });

  // 滚动动画函数
  function smoothScroll(startY, targetY) {
      var startTime = performance.now();
      var duration = 1000;

      function scroll() {
          var currentTime = performance.now();
          var timeElapsed = currentTime - startTime;

          // 使用缓动函数（这里使用简单的线性缓动）
          var easedProgress = easeInOutQuad(timeElapsed, 0, 1, duration);

          // 计算当前滚动位置
          var currentPosition = startY + (targetY - startY) * easedProgress;

          // 执行滚动
          window.scrollTo(0, currentPosition);

          // 如果动画未结束，继续调用 requestAnimationFrame
          if (timeElapsed < duration) {
              requestAnimationFrame(scroll);
          }
      }

      // 启动滚动动画
      requestAnimationFrame(scroll);
  }

  // 缓动函数（线性缓动）
  function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }
});



//第一部分
setTimeout(function () {
  var box = document.querySelector('.homepage');
  box.style.backgroundImage = 'url(img/first.jpg)';
  box.style.borderRadius = '0px';
  box.style.backgroundSize = 'cover';
}, 1700); 
setTimeout(function () {
  var hello = document.querySelector('.portfolio .homepage .hello');
  var music = document.querySelector('.music');
  hello.style.display = 'block';
  music.style.display = 'block';
}, 4000); 


//第二部分
document.addEventListener('DOMContentLoaded', function () {
  var fly1 = document.querySelector('.fadein1');
  var fly2 = document.querySelector('.fadein2');
  var fly3 = document.querySelector('.fadein3');
  var fly4 = document.querySelectorAll('.fadein4');
  var title_h2 = document.querySelector('.title h2');
  var title_p = document.querySelector('.title p');
  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;
      if (scrollPosition >= window.innerHeight * 0.8) {
        fly1.classList.add('top-visible-1');
        fly2.classList.add('top-visible-2');
        fly3.classList.add('top-visible-3');
        fly4.forEach(function (fly4) {
                fly4.classList.add('top-visible-4');
        });
        title_h2.classList.add('left-visible');
        title_p.classList.add('left-visible');
      }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  var helloContainer = document.querySelector('.portfolio .homepage .hello .content');

  window.addEventListener('scroll', function () {
      var scrollPosition = window.scrollY;

      // 根据滚动位置调整容器大小和位置
      var scale = Math.max(1 - scrollPosition / 500, 0.8); // 最小缩放到50%，可根据需要调整
      var width = 500 * scale;
      var height = 400 * scale;

      helloContainer.style.width = width + 'px';
      helloContainer.style.height = height + 'px';
      
      // 根据滚动方向调整容器位置
      var translateY = scrollPosition / 2; // 可根据需要调整滚动距离
      helloContainer.style.transform = 'translateY(' + translateY + 'px) scale(' + scale + ')';
  });
});




