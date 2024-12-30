window.onload = () => {
  document.querySelector(".loading-wrapper").classList.add("hidden");
  document.body.classList.remove("overflow-x-hidden");
};

const menu = document.querySelector("#menu");
const navBar = document.querySelector("#nav-bar");
const navLinks = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  navBar.classList.toggle("left-[0]");
  menu.classList.toggle("ri-close-large-line");
});

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navBar.classList.toggle("left-[0]");
    menu.classList.toggle("ri-close-large-line");
  });
});

new Swiper(".swiper", {
  loop: true,
  speed: 1300,
  spaceBetween: 30,
  autoplay: {
    delay: 2300,
    disableOnIntraction: false,
  },

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  grabCursor: true,

  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    760: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
    // 1024: {
    //   slidesPerView: 4,
    // },
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const numbers = document.querySelectorAll(".number");

  const options = {
    root: null,
    threshold: 0.1,
  };

  const animateNumbers = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const numberElement = entry.target;
        const endValue = parseInt(numberElement.dataset.number, 10);
        const isPercentage = numberElement.dataset.percentage === "true";
        let startValue = 0;

        const duration = 2000;
        const increment = endValue / (duration / 16);

        const updateNumber = () => {
          if (startValue < endValue) {
            startValue += increment;
            numberElement.textContent = isPercentage
              ? `${Math.ceil(startValue)}%`
              : Math.ceil(startValue).toLocaleString();
            requestAnimationFrame(updateNumber);
          } else {
            numberElement.textContent = isPercentage
              ? `${endValue}%`
              : endValue.toLocaleString();
          }
        };

        requestAnimationFrame(updateNumber);
      } else {
        const numberElement = entry.target;
        numberElement.textContent = isPercentage ? "0%" : "0";
      }
    });
  };

  const observer = new IntersectionObserver(animateNumbers, options);

  numbers.forEach((number) => observer.observe(number));
});

if (window.innerWidth >= 760) {
  const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 1500,
    delay: 300,
    reset: true,
  });

  sr.reveal(".nav_data", { delay: 700 });
  sr.reveal(".head_scale_data", { scale: 1.5 });
  sr.reveal(".scale_data", { scale: 0.5, delay: 700 });

  sr.reveal(".left_data", { distance: "300px", origin: "left", delay: 900 });
  sr.reveal(".right_data", { distance: "300px", origin: "right", delay: 900 });

  sr.reveal(".footer", { distance: "300px", origin: "bottom" });
}
