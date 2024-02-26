

//workShowcase 
const cardsArray = [
  {
    cardImg: './img/slider/hypicons.webp',
    cardTitle: 'HYPICONS',
    cardText: 'Dive into icon pack sales website for a mesmerizing experience with neon colors and captivating animations.'
  },
  {
    cardImg: './img/slider/nft.webp',
    cardTitle: 'NFT',
    cardText: 'Explore the revolutionary NFT art gallery where digital masterpieces merge with blockchain technology.'
  },
  {
    cardImg: './img/slider/upstate.webp',
    cardTitle: 'UPSTATE',
    cardText: 'Experience effortless laundry solutions at our state-of-the-art hub, designed for your convenience.'
  },
  {
    cardImg: './img/slider/wildsouls.webp',
    cardTitle: 'WILD SOULS',
    cardText: 'Discover wholesome nutrition essentials at this online store, empowering your wellness journey.'
  },
  {
    cardImg: './img/slider/perfluence.webp',
    cardTitle: 'PERFLUENCE',
    cardText: 'Connect with top bloggers for targeted advertising campaigns on this platform.'
  },
  {
    cardImg: './img/slider/cake.webp',
    cardTitle: 'PASTRY COURSE',
    cardText: 'Take your baking skills to the next level with this beautyfull comprehensive online pastry courses.'
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const cardRow = document.querySelector('.showcase__cont__cards');

  cardsArray.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('showcase__cont__cards__card');
    cardElement.classList.add('hoverable');

    const cardImg = document.createElement('img');
    cardImg.classList.add('showcase__cont__cards__card__img');
    cardImg.src = card.cardImg;
    cardImg.alt = card.cardTitle;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('showcase__cont__cards__card__info');

    const div = document.createElement('div'); 
    // Create a div element

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = card.cardTitle;

    const cardText = document.createElement('p');
    cardText.innerText = card.cardText;

    const button = document.createElement('a');
    button.innerText = 'OPEN';

    div.appendChild(cardTitle); // Append h3 to div
    div.appendChild(cardText); // Append p to div

    cardInfo.appendChild(div); // Append div to cardInfo
    cardInfo.appendChild(button);

    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardInfo);

    cardRow.appendChild(cardElement);
  });
});


// import Typed from 'typed.js';

// var typed = new Typed('.firstSlide__cont__text', {
//   strings: ['&amp; Welcome to the digital playground of a web virtuoso! \n  Dive into a spectacular collection of projects that transform the ordinary into extraordinary.'],
//   typeSpeed: 50,
//   smartBackspace: true,
// });



  const $bigBall = document.querySelector(".cursor__ball--big");
  const $smallBall = document.querySelector(".cursor__ball--small");
  const $hoverables = document.querySelectorAll(".hoverable");

  // Listeners
  document.body.addEventListener("mousemove", onMouseMove);
  for (let i = 0; i < $hoverables.length; i++) {
    $hoverables[i].addEventListener("mouseenter", onMouseHover);
    $hoverables[i].addEventListener("mouseleave", onMouseHoverOut);
  }

  // Move the cursor
  function onMouseMove(e) {
    const scrollY = window.scrollY;

    gsap.to($bigBall, 0.4, {
      x: e.pageX - 15,
      y: e.pageY - 15 - scrollY
    });
    gsap.to($smallBall, 0.1, {
      x: e.pageX - 5,
      y: e.pageY - 7 - scrollY
    });
  }

  // Hover an element
  function onMouseHover() {
    gsap.to($bigBall, 0.3, {
      scale: 4
    });
  }
  function onMouseHoverOut() {
    gsap.to($bigBall, 0.3, {
      scale: 1
    });
  }

var scene = document.querySelectorAll('.scene');
scene.forEach(item => {
  new Parallax(item);
})

// //layers
//   let title = document.querySelectorAll('.title-paralax');
//   window.addEventListener('mousemove', function(e) {
//       let x = e.clientX / window.innerWidth;
//       let y = e.clientY / window.innerHeight;
//       for (let i = 0; i <  title.length; i++){
//         title[i].style.transform = 'translate(' + x * 30 + 'px, -' + y * 30 + 'px)';
//       }
//   });
//
//
// //smoke
//
// let layer = document.querySelectorAll('.layer');
// window.addEventListener('mousemove', function(e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     for (let i = 0; i <  layer.length; i++){
//       layer[i].style.transform = 'translate(-' + x * 20 + 'px, -' + y * 20 + 'px)';
//     }
// });
//
// //background
// let bg = document.querySelectorAll('.bg');
// window.addEventListener('mousemove', function(e) {
//     let x = e.clientX / window.innerWidth;
//     let y = e.clientY / window.innerHeight;
//     for (let i = 0; i <  bg.length; i++){
//       bg[i].style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
//     }
// });
