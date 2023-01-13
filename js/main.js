const swiper = new Swiper(".swiper", {
  loop: true,
  navigation: {
    nextEl: ".swiper-button-left",
    prevEl: ".swiper-button-right",
  },
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    960: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  },
});

let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23408999090203, lng: -8.624070405898483 },
    zoom: 14,
    styles: [
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
        ],
      },
      {
        featureType: "administrative.province",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 65,
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: "50",
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: "-100",
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "all",
        stylers: [
          {
            lightness: "30",
          },
        ],
      },
      {
        featureType: "road.local",
        elementType: "all",
        stylers: [
          {
            lightness: "40",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [
          {
            hue: "#ffff00",
          },
          {
            lightness: -25,
          },
          {
            saturation: -97,
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [
          {
            lightness: -25,
          },
          {
            saturation: -100,
          },
        ],
      },
    ],
  });
}
37.23408999090203, -8.624070405898483;
window.initMap = initMap;

//Blog slider more text

const html = document.documentElement;
const moreBtn = document.querySelectorAll(".blog__btn-more");

function showMore() {
  const paragraphEl = this.previousSibling.previousSibling;
  const childParagraphEl = paragraphEl.childNodes;
  const dots = childParagraphEl[1];
  const more = childParagraphEl[2];
  if (dots.style.display === "none") {
    dots.style.display = "inline";
    more.style.display = "none";
    this.textContent = "Читати далі...";
  } else {
    dots.style.display = "none";
    more.style.display = "inline";
    this.textContent = "Згорнути";
  }
}

moreBtn.forEach((button) => button.addEventListener("click", showMore));

//#link

const links = document.querySelectorAll('a[href*="#"]');

function scrollByElem(event) {
  event.preventDefault();
  const blockId = this.getAttribute("href");
  document.querySelector("" + blockId).scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

links.forEach((link) => link.addEventListener("click", scrollByElem));

//burder

const burger = document.querySelector(".burger__menu");
const popup = document.querySelector(".popup");
const burderItem = document.querySelectorAll(".burger__item");
const logo = document.querySelector(".logo");

function showPopup() {
  popup.classList.toggle("popup-active");

  burderItem.forEach((item, ind) =>
    item.classList.toggle(`burger__item-${ind}-active`)
  );
}

function exitPopup(event) {
  const el = event.target.closest(".poopup__list-link");
  if (!el) return;
  showPopup();
}

logo.addEventListener("click", () => {
  popup.classList.remove("popup-active");

  burderItem.forEach((item, ind) =>
    item.classList.remove(`burger__item-${ind}-active`)
  );
});

popup.addEventListener("click", exitPopup);
burger.addEventListener("click", showPopup);
