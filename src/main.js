// SwiperJS
function initSwiper(el, paginationElement) {
  const swiperImgOptions = {
    pagination: {
      el: paginationElement,
      clickable: true,
    },

    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    spaceBetween: 20,
    slideToClickedSlide: true,
    //autoHeight: true,

    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 2,
        spaceBetween: 50,
      },
    },
  };
  const swiperIMG = new Swiper(el, swiperImgOptions);
}

const mySwiper = document.querySelector(".swiper");
const swiperPagination = mySwiper.querySelector(".swiper-pagination");

initSwiper(mySwiper, swiperPagination);

// stop Audio when clicking on collapse
const audioToggler = document.querySelector(".audio-toggler");
audioToggler.addEventListener("click", () => {
  const audioElement =
    audioToggler.parentNode.querySelector(".collapsing audio");
  audioElement.pause();
});

// youtube iframe

const iframeElement = document.querySelector("iframe");
const yt_url = iframeElement.dataset.src;

let src = yt_url;
if (
  window.location.hostname !== "127.0.0.1" &&
  window.location.hostname !== "localhost"
) {
  src = yt_url + "&origin=" + window.location.origin;
}

iframeElement.setAttribute("src", src);
