// function loader(_success) {
//   const obj = document.querySelector('.preloader'),
//       inner = document.querySelector('.preloader_inner'),
//       page = document.querySelector('.page'),
//       body = document.body;

//   body.style.overflow = 'hidden';

//   obj.classList.add('show');
//   page.classList.remove('show');
//   let w = 0;
//   let t = setInterval(function() {
//     if (w < 100) {
//       w++;
//       inner.textContent = w + '%';
//     } else {
//       clearInterval(t);
//       setTimeout(function() {
//         obj.classList.remove('show');
//       }, 1000); 
//       page.classList.add('show');

//       body.style.overflow = '';
//       if (_success) _success();
//     }

//     if (w >= 80) {
//       clearInterval(t);
//       t = setInterval(function() {
//         if (w < 100) {
//           w++;
//           inner.textContent = w + '%';
//         } else {
//           clearInterval(t);
//             obj.classList.remove('show');
//           body.style.overflow = '';
//           if (_success) _success();
//         }
//       }, 130); 
//     }
//   }, 40); 
// }

// loader();




const container = document.querySelector('.center');

for (let i = 1; i <= 300; i++) {
  const div = document.createElement('div');
  div.setAttribute('class', 'particle');
  div.setAttribute('style', `--index: ${i}`);
  container.append(div);
}


let languageStorage = localStorage.getItem('language');
if (!languageStorage) {
    languageStorage = "en";
}
let language = languageStorage === "ua" ? "ua" : "en";


//workShowcase 
const cardsArray = [
  {
    cardImg: './img/slider/hypicons.webp',
    cardTitle: 'HYPICONS',
    cardText: 'Dive into icon pack sales website for a mesmerizing experience with neon colors and captivating animations.',
    cardTextUa: 'Зануртеся на сайт з продажу пакетів іконок, щоб насолодитися неоновими кольорами та захоплюючою анімацією.',
    buttonTextUa: 'Перейти',
    cardLink: 'https://roserinn.github.io/'
  },
  {
    cardImg: './img/slider/nft.webp',
    cardTitle: 'NFT',
    cardText: 'Explore the revolutionary NFT art gallery where digital masterpieces merge with blockchain technology.',
    cardTextUa: 'Досліджуйте революційну галерею мистецтва NFT, де цифрові шедеври поєднуються з технологією блокчейну',
    buttonTextUa: 'Перейти',
    cardLink: 'https://nft-page.pages.dev/'
  },
  {
    cardImg: './img/slider/upstate.webp',
    cardTitle: 'UPSTATE',
    cardText: 'Experience effortless laundry solutions at our state-of-the-art hub, designed for your convenience.',
    cardTextUa: 'Пориньте в комфорт у цьому сучасному центрі прання, призначеному для вашої зручності.',
    buttonTextUa: 'Перейти',
    cardLink: 'https://upstate.pages.dev/'
  },
  {
    cardImg: './img/slider/wildsouls.webp',
    cardTitle: 'WILD SOULS',
    cardText: 'Discover wholesome nutrition essentials at this online store, empowering your wellness journey.',
    cardTextUa: 'Відкрийте для себе здорове харчування в цьому інтернет-магазині, що допоможе вам підтримувати здоровий спосіб життя.',
    buttonTextUa: 'Перейти',
    cardLink: 'https://wild-souls.pages.dev/'
  },
  {
    cardImg: './img/slider/perfluence.webp',
    cardTitle: 'PERFLUENCE',
    cardText: 'Connect with top bloggers for targeted advertising campaigns on this platform.',
    cardTextUa: "Зв'яжіться з провідними блогерами для проведення таргетованих рекламних кампаній на цій платформі.",
    buttonTextUa: 'Перейти',
    cardLink: 'https://perfluence-yz1.pages.dev/#whoAreWe'
  },
  {
    cardImg: './img/slider/cake.webp',
    cardTitle: 'PASTRY COURSE',
    cardText: 'Take your baking skills to the next level with this beautyfull comprehensive online pastry courses.',
    cardTextUa: 'Підніміть свої навички випічки на новий рівень за допомогою цього чудового комплексного онлайн-курсу з кондитерської справи".',
    buttonTextUa: 'Перейти',
    cardLink: 'https://pastry-course.pages.dev/'
  },
];


const cardRow = document.querySelector('.showcase__cont__cards');
document.addEventListener('DOMContentLoaded', () => {
  createCards(cardsArray, cardRow);
});

function createCards(array, parent) {
  array.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('showcase__cont__cards__card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('showcase__cont__cards__card__img');
    cardImg.src = card.cardImg;
    cardImg.alt = card.cardTitle;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('showcase__cont__cards__card__info');

    const div = document.createElement('div');

    const cardTitle = document.createElement('h3');
    cardTitle.innerText = card.cardTitle;

    const cardText = document.createElement('p');
    cardText.innerText = language === 'ua' ? card.cardTextUa : card.cardText;

    const cardLink = document.createElement('a');
    cardLink.innerText = language === 'ua' ? card.buttonTextUa : 'OPEN';
    cardLink.href = card.cardLink;
    cardLink.target = '_blank';
    div.appendChild(cardTitle);
    div.appendChild(cardText);

    cardInfo.appendChild(div);
    cardInfo.appendChild(cardLink);

    cardElement.appendChild(cardImg);
    cardElement.appendChild(cardInfo);

    parent.appendChild(cardElement);
  });
}


// Cursor
const $bigBall = document.querySelector(".cursor__ball--big");
const $smallBall = document.querySelector(".cursor__ball--small");
const $hoverables = document.querySelectorAll(".hoverable");

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


//parallax effect
var scene = document.querySelectorAll('.scene');
scene.forEach(item => {
  new Parallax(item);
})


//main section elements animation 
function animateElements(selector, options = {}) {
  gsap.from(selector, { ...options, ease: "back" }); 
}

// animateElements(".mainSection__bg", { delay: 6.6, opacity: 0, duration: 1 });
// animateElements(".mainSection__layerRight", {delay: 6.8, x: -300, duration: 2 });
// animateElements(".mainSection__layerLeft", {delay: 6.8, x: 300, duration: 2 });
// animateElements(".mainSection__toplayerthird", { delay: 7, y: -300, duration: 2 });
// animateElements(".mainSection__bottomlayerthird", { delay: 7, y: 300, duration: 2 });
// animateElements(".mainSection__cloudRight", { delay: 7.5, x: -300, duration: 2 });
// animateElements(".mainSection__cloudLeft", { delay: 7.5, x: 300, duration: 2 });
// animateElements(".sixth", { delay: 7.6, opacity: 0, duration: 2, stagger: 0.2 });
// animateElements(".mainSection__cont__title", { delay: 8.8, opacity: 0, duration: 2.5, x: 300 });
// animateElements(".mainSection__cont__subtitle", { delay: 8.8, opacity: 0, duration: 2.5, x: -300 });
// animateElements(".header__cont", { delay: 9.2, opacity: 0, duration: 2, y: -50, });

//about me section 
ScrollTrigger.create({
  trigger: ".aboutMe__cont",
  start: 'top 100%',
  end: 'bottom 100%',
  onEnter: () => {
    animateElements(".aboutMe__cont__img", { delay: .7, opacity: 0, duration: 1, y: 100, ease: "back" });
    animateElements(".aboutMe__cont__info", { delay: .7, opacity: 0, duration: 1, x: 100, ease: "back"});
  },
});


//devMagic section
ScrollTrigger.create({
  trigger: ".devMagic",
  start: 'top 100%',
  end: 'bottom 100%',
  onEnter: () => {
    animateElements(".devMagic__cont__img", { delay: .7, opacity: 0, duration: 1, y: -100, ease: "back" });
    animateElements(".devMagic__cont__info", { delay: .7, opacity: 0, duration: 1, x: -100, ease: "back"});
  },
});


//work showcase section 
ScrollTrigger.create({
  trigger: ".showcase",
  start: 'top 100%',
  end: 'bottom 100%',
  onEnter: () => {
    animateElements(".showcase__cont", { delay: .5, opacity: 0, duration: 1, y: 100 });
  },
});


//contactMe section 
ScrollTrigger.create({
  trigger: ".messageMe",
  start: 'top 70%',
  end: 'bottom 100%',
  onEnter: () => {
    animateElements(".messageMe__cont", { delay: .5, opacity: 0, duration: 1, y: 100, ease: "back" });
    animateElements(".btn", { delay: 1.5, opacity: 0, duration: 1}); 
    
  },
});


//typed text animation
function isElementInViewport(el) {
  if (!el) return false; 
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function startTypedWhenVisible(typedElement, text) {
  if (!typedElement || !isElementInViewport(typedElement) || typedElement._typedInitialized) return;

  const typed = new Typed(typedElement, {
    strings: [text],
    typeSpeed: 20,
  });

  typedElement._typedInitialized = true; 

  window.removeEventListener('scroll', checkVisibility);
}

function checkVisibility(language) {
  const typedElement1 = document.querySelector('.digitalPlayground__cont__text');
  const typedElement2 = document.querySelector('.code__cont__text');
  
  const text1 = (language === 'ua') ? 'Ласкаво просимо на цифровий майданчик веб-віртуоза! Пориньте у вражаючу колекцію проектів, які перетворюють звичайне на надзвичайне.' : 'Welcome to the digital playground of a web virtuoso! \n Dive into a spectacular collection of projects that transform the ordinary into extraordinary.';
  
  const text2 = (language === 'ua') ? '// Мій код - це не просто рядки, а живі організми, що оживають завдяки майстерності. //' : '// My code is not just strings, but living organisms brought to life by craftsmanship. //';

  startTypedWhenVisible(typedElement1, text1);
  startTypedWhenVisible(typedElement2, text2);
}

window.addEventListener('scroll', function() {
  requestAnimationFrame(() => {
    checkVisibility('ua'); 
  });
});

checkVisibility('en'); 

//language switcher
document.querySelector('.header__cont__lang__ua').addEventListener('click', () => {
  language = 'ua';
  localStorage.setItem('language', language);
  changeText();
  checkVisibility('ua');
  //Туть
  createCards(cardsArray, cardRow);
});

document.querySelector('.header__cont__lang__en').addEventListener('click', () => {
  language = 'en';
  localStorage.setItem('language', language); 
  changeText();
  checkVisibility('en');
  //Туть
  createCards(cardsArray, cardRow);
});


const ua = {
  mainSectionTitle: 'Гармонія коду <br> та дизайну',
  mainSectionSubtitle: 'Зустрічайте майстра кодування, <br> який перетворює каву на чудові веб-сайти',
  aboutMeTitle: 'Трохи Байтів про Мене',
  aboutMeFirstSentence: 'Я Ріна, веб-майстер, який працює у високому темпі! Моя пристрасть полягає у створенні захоплюючих веб-сайтів за допомогою майстерності програмування.',
  aboutMeSecondSentence: 'Глибоко занурена у світ цифрових технологій, я не маю більшого задоволення, ніж виходити за межі звичного синтаксису і створювати приголомшливі результати.',
  aboutMeThirdSentence: 'Я вмію втілювати ваші ідеї в життя, додаючи фантазію, інновації та досвід, щоб кожен піксель був на рахунку.',
  devMagicTitle: 'Магія Веб-Програмування',
  devMagicFirstSentence: 'Мої навички у веб-програмуванні дають мені змогу створювати унікальні та функціональні веб-сайти з нуля.',
  devMagicSecondSentence: 'Я також володію мистецтвом анімації, де кожен піксель рухається в гармонії, що надає сайтам динамічності та привабливості.',
  devMagicThirdSentence: 'А коли все готово, я з легкістю підключу ваш сайт на хостинг, щоб він був доступний для всього світу.',
  showcaseTitle: 'Мої Роботи',
  messageMeFirstSentence: 'Отже, ви готові перетворити свою ідею на привабливий та інноваційний веб-сайт?',
  messageMeSecondSentence: 'Давайте створимо щось дивовижне разом!',
  messageMeButton: 'Напишіть мені!',
  footerCopyright: '© 2024 Всі права захищені',
 footerAuthorship: 'дизайн: Roserinn <br><br> код: Roserinn',
};

const en = {
  mainSectionTitle: 'Harmony of <br> Code and Design',
  mainSectionSubtitle: 'Meet the coding wizard who turns<br> coffee into great websites',
  aboutMeTitle: 'A Little Byte about Me ',
  aboutMeFirstSentence: "I'm Rina, a web wizard who works at a high pace! My passion lies in creating mesmerizing websites through the wizardry of programming",
  aboutMeSecondSentence: 'Deeply immersed in the world of digital technology, I have no greater pleasure than to go beyond the usual syntax and produce stunning results.',
  aboutMeThirdSentence: 'I have a knack for bringing your ideas to life, adding imagination, innovation and experience to make every pixel count.',
  devMagicTitle: 'Web Development Magic ',
  devMagicFirstSentence: 'My web programming skills allow me to create unique and functional websites from scratch.',
  devMagicSecondSentence: 'I am also skilled in the art of animation where every pixel moves in harmony giving websites a dynamic and eye-catching look.',
  devMagicThirdSentence: 'And when everything is ready, I will easily connect your website to hosting so that it is accessible to the world.',
  showcaseTitle: 'Work Showcase',
  messageMeFirstSentence: ' So, are you ready to turn your idea into an attractive and innovative websites?',
  messageMeSecondSentence: "Let's create something amazing together!",
  messageMeButton: 'Message Me',
  footerCopyright: '© 2024 All rights reserved',
  footerAuthorship: 'design by Roserinn <br><br> code by Roserinn',
};
changeText();

function changeText() {
  document.querySelectorAll('[text]').forEach(el => {
    const cuurLang = language === 'ua'? ua : en;
    el.innerHTML = cuurLang[el.getAttribute('text')];
  });
};

