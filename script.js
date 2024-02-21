console.clear();

// Get the canvas element from the DOM
const canvas = document.querySelector('#scene');
canvas.width = canvas.clientWidth;
canvas.height = canvas.clientHeight;
// Store the 2D context
const ctx = canvas.getContext('2d');

if (window.devicePixelRatio > 1) {
  canvas.width = canvas.clientWidth * 2;
  canvas.height = canvas.clientHeight * 2;
  ctx.scale(2, 2);
}

/* ====================== */
/* ====== VARIABLES ===== */
/* ====================== */
let width = canvas.clientWidth; // Width of the canvas
let height = canvas.clientHeight; // Height of the canvas
let rotation = 0; // Rotation of the globe
let dots = []; // Every dots in an array

/* ====================== */
/* ====== CONSTANTS ===== */
/* ====================== */
/* Some of those constants may change if the user resizes their screen but I still strongly believe they belong to the Constants part of the variables */
const DOTS_AMOUNT = 1000; // Amount of dots on the screen
const DOT_RADIUS = 4; // Radius of the dots
let GLOBE_RADIUS = width * 0.7; // Radius of the globe
let GLOBE_CENTER_Z = -GLOBE_RADIUS; // Z value of the globe center
let PROJECTION_CENTER_X = width / 2; // X center of the canvas HTML
let PROJECTION_CENTER_Y = height / 2; // Y center of the canvas HTML
let FIELD_OF_VIEW = width * 0.8;

class Dot {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    
    this.xProject = 0;
    this.yProject = 0;
    this.sizeProjection = 0;
  }
  // Do some math to project the 3D position into the 2D canvas
  project(sin, cos) {
    const rotX = cos * this.x + sin * (this.z - GLOBE_CENTER_Z);
    const rotZ = -sin * this.x + cos * (this.z - GLOBE_CENTER_Z) + GLOBE_CENTER_Z;
    this.sizeProjection = FIELD_OF_VIEW / (FIELD_OF_VIEW - rotZ);
    this.xProject = (rotX * this.sizeProjection) + PROJECTION_CENTER_X;
    this.yProject = (this.y * this.sizeProjection) + PROJECTION_CENTER_Y;
  }
  // Draw the dot on the canvas
  draw(sin, cos) {
    this.project(sin, cos);
    // ctx.fillRect(this.xProject - DOT_RADIUS, this.yProject - DOT_RADIUS, DOT_RADIUS * 2 * this.sizeProjection, DOT_RADIUS * 2 * this.sizeProjection);
    ctx.beginPath();
    ctx.arc(this.xProject, this.yProject, DOT_RADIUS * this.sizeProjection, 0, Math.PI * 2);
    ctx.closePath();
    ctx.fill();
  }
}

function createDots() {
  // Empty the array of dots
  dots.length = 0;
  
  // Create a new dot based on the amount needed
  for (let i = 0; i < DOTS_AMOUNT; i++) {
    const theta = Math.random() * 2 * Math.PI; // Random value between [0, 2PI]
    const phi = Math.acos((Math.random() * 2) - 1); // Random value between [-1, 1]
    
    // Calculate the [x, y, z] coordinates of the dot along the globe
    const x = GLOBE_RADIUS * Math.sin(phi) * Math.cos(theta);
    const y = GLOBE_RADIUS * Math.sin(phi) * Math.sin(theta);
    const z = (GLOBE_RADIUS * Math.cos(phi)) + GLOBE_CENTER_Z;
    dots.push(new Dot(x, y, z));
  }
}

/* ====================== */
/* ======== RENDER ====== */
/* ====================== */
function render(a) {
  // Clear the scene
  ctx.clearRect(0, 0, width, height);
  
  // Increase the globe rotation
  rotation = a * 0.0003;
  
  const sineRotation = Math.sin(rotation); // Sine of the rotation
  const cosineRotation = Math.cos(rotation); // Cosine of the rotation
  
  // Loop through the dots array and draw every dot
  for (var i = 0; i < dots.length; i++) {
    dots[i].draw(sineRotation, cosineRotation);
  }
  
  window.requestAnimationFrame(render);
}


// Function called after the user resized its screen
function afterResize () {
  width = canvas.offsetWidth;
  height = canvas.offsetHeight;
  if (window.devicePixelRatio > 1) {
    canvas.width = canvas.clientWidth * 2;
    canvas.height = canvas.clientHeight * 2;
    ctx.scale(2, 2);
  } else {
    canvas.width = width;
    canvas.height = height;
  }
  GLOBE_RADIUS = width * 0.7;
  GLOBE_CENTER_Z = -GLOBE_RADIUS;
  PROJECTION_CENTER_X = width / 2;
  PROJECTION_CENTER_Y = height / 2;
  FIELD_OF_VIEW = width * 0.8;
  
  createDots(); // Reset all dots
}

// Variable used to store a timeout when user resized its screen
let resizeTimeout;
// Function called right after user resized its screen
function onResize () {
  // Clear the timeout variable
  resizeTimeout = window.clearTimeout(resizeTimeout);
  // Store a new timeout to avoid calling afterResize for every resize event
  resizeTimeout = window.setTimeout(afterResize, 500);
}
window.addEventListener('resize', onResize);

// Populate the dots array with random dots
createDots();

// Render the scene
window.requestAnimationFrame(render);


//workShowcase 

const cardsArray = [
  {
    cardImg: './img/slider/hypicons.png',
    cardTitle: 'HYPICONS',
    cardText: 'Dive into icon pack sales website for a mesmerizing experience with neon colors and captivating animations.'
  },
  {
    cardImg: './img/slider/nft.png',
    cardTitle: 'NFT',
    cardText: 'Explore the revolutionary NFT art gallery where digital masterpieces merge with blockchain technology.'
  },
  {
    cardImg: './img/slider/upstate.png',
    cardTitle: 'UPSTATE',
    cardText: 'Experience effortless laundry solutions at our state-of-the-art hub, designed for your convenience.'
  },
  {
    cardImg: './img/slider/wildsouls.png',
    cardTitle: 'WILD SOULS',
    cardText: 'Discover wholesome nutrition essentials at this online store, empowering your wellness journey.'
  },
  {
    cardImg: './img/slider/perfluence.png',
    cardTitle: 'PERFLUENCE',
    cardText: 'Connect with top bloggers for targeted advertising campaigns on this platform.'
  },
  {
    cardImg: './img/slider/cake.png',
    cardTitle: 'PASTRY COURSE',
    cardText: 'Take your baking skills to the next level with this beautyfull comprehensive online pastry courses.'
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const cardRow = document.querySelector('.showcase__cont__cards');

  cardsArray.forEach(card => {
    const cardElement = document.createElement('div');
    cardElement.classList.add('showcase__cont__cards__card');

    const cardImg = document.createElement('img');
    cardImg.classList.add('showcase__cont__cards__card__img');
    cardImg.src = card.cardImg;
    cardImg.alt = card.cardTitle;

    const cardInfo = document.createElement('div');
    cardInfo.classList.add('showcase__cont__cards__card__info');

    const div = document.createElement('div'); // Create a div element

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































// var camera, scene, renderer, particles, control;
// const assetPath = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/2666677/';

// init(); 

// function init() {
// const section = document.querySelector('.mainSection');

//     clock = new THREE.Clock();

//     renderer = new THREE.WebGLRenderer();
//     renderer.setSize( window.innerWidth, window.innerHeight );
//     section.appendChild( renderer.domElement );
 
//     scene = new THREE.Scene();
 
//     camera = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 1, 100 );
//     camera.position.z = 5;
//     scene.add( camera );

//     light = new THREE.DirectionalLight(0xffffff, 1.0);
//     light.position.set(-1,0,1);
//     scene.add(light);
  
//     control = new THREE.OrbitControls( camera, renderer.domElement );
  
//     const tex = new THREE.TextureLoader()
//       .setPath(assetPath)
//       .load('smoke_01.png');
//     const material = new THREE.MeshLambertMaterial({
//       color: 0xffffff, 
//       depthWrite: false,
//       map: tex, 
//       transparent: true
//     });
//     const geometry = new THREE.PlaneGeometry(5,5);
//     particles = [];

//     const size = 5;
  
//     for (let i=0; i<40; i++) {
//         const particle = new THREE.Mesh(geometry, material);
//         particle.position.set(
//           ( Math.random()-0.5) * size, 
//           ( Math.random()-0.5) * size, 
//           ( Math.random()-0.5) * size);
//         particle.rotation.z = Math.random() * Math.PI * 2;
//         scene.add(particle);
//         particles.push(particle);
//     }
 
//     renderer.setAnimationLoop( update );
// }
 
// function update() { 
//     const dt = clock.getDelta();
//     if (particles){
//       particles.forEach( particle => {
//         const z = particle.rotation.z;
//         particle.lookAt( camera.position );
//         particle.rotation.z = z + dt * 0.1;
//       });
//     }
//     renderer.render( scene, camera );
// }
 

