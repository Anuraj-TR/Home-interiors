$(".blog-cards").slick({
  dots: true,
  infinite: true,
  speed: 600,
  slidesToShow: 5.6,
  slidesToScroll: 1,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4.5,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3.3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.3,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});



//Hamburger menu


const hamgberger = document.querySelector(".isl-header__hangberger");
const nav = document.querySelector(".isl-header__nav");

if (hamgberger) {

  hamgberger.addEventListener("click", function () {
    nav.classList.toggle("isl-header__nav--active");
    hamgberger.classList.toggle("isl-header__hangberger--active");
  });
  
}


const popularCards = document.querySelectorAll("#popular-work .isl-popular__card");

if (popularCards) {

  function showCards() {
  
    if (window.innerWidth <= 764) {
      // console.log(window.innerWidth);
      popularCards.forEach(function (card, index) {
        if (index > 2) {
          card.style.display = "none";
        }
      })
    } else if (window.innerWidth > 764) {
      popularCards.forEach(function (card, index) {
        card.style.display = "block";
      });
    }
  }

  
  
  window.addEventListener("resize", () => {
    showCards();
  });
  
  window.addEventListener("load", () => {
    showCards();
  
  });

}

const navWrapper = document.querySelector(".isl-header__nav-wrapper");
  
if (navWrapper) {

  function onNavScroll(e) {
    if (e.target.scrollingElement.scrollTop > 0) {
      navWrapper.classList.add("isl-header__nav-wrapper--scrolled");
    } else {
      navWrapper.classList.remove("isl-header__nav-wrapper--scrolled");
    }
  }

  window.addEventListener("scroll", (e) => {
    onNavScroll(e);
  });


}

  //cart - script

const cards = document.querySelector(".isl_card");

if (cards) {
  
  const share = document.querySelector(".isl_card__right-share");
  const social = document.querySelector(".isl_card__right-share-container");
  
  const images = document.querySelectorAll(".isl_card__left-image");
  const thumpnails = document.querySelectorAll(".thumbnail__item-img");
  
  const mail = document.querySelector(".form-controll");
  const mail_button = document.querySelector(".email-button");
  
  const neg = document.querySelector(".item-count-neg");
  const pos = document.querySelector(".item-count-pos");
  const item_count = document.querySelector("#item-count");
  
  window.addEventListener("load", () => {
    images[0].classList.add("isl_card__left-image--active");
  });
  
  
  share.addEventListener("click", () => {
    social.classList.toggle("active-social");
  });
  
  mail_button.addEventListener("click", () => {
    if (mail.value == "") {
      alert("please enter valid email address");
    } else {
      console.log(mail.value);
      mail.value = "";
    }
  });
  
  thumpnails.forEach((thumbnail, index) => {
    thumbnail.addEventListener("click", () => {
      images.forEach((image, index) => {
        image.classList.remove("isl_card__left-image--active");
        thumpnails[index].classList.remove("thumbnail__item-img--active");
      });
      if (!thumbnail.classList.contains("thumbnail__item-img--active")) {
        thumbnail.classList.add("thumbnail__item-img--active");
        images[index].classList.add("isl_card__left-image--active");
      } else {
        thumbnail.classList.remove("thumbnail__item-img--active");
        images[index].classList.remove("isl_card__left-image--active");
      }
    });
  });
  
  neg.addEventListener("click", () => {
    if (item_count.value > 1) {
      item_count.value = parseInt(item_count.value) - 1;
    }
  });
  pos.addEventListener("click", () => {
    if (item_count.value >= 0) {
      item_count.value = parseInt(item_count.value) + 1;
    }
  });
  
  $(".isl_card__left-images").slick({
    responsive: [
      {
        breakpoint: 9999,
        settings: "unslick",
      },
      {
        breakpoint: 764,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
          button: false,
        },
      },
    ],
  });
}






