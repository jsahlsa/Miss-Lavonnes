const headDiv = document.querySelector('.content');
const miss = document.querySelectorAll('.head');
const icons = document.querySelectorAll('i');
const resetButton = document.getElementById('color-reset-button');
const animateBtn = document.querySelector('.animations');
const colors = [
  'hsla(53, 98%, 65%, 1)',
  'hsla(209, 85%, 67%, 1)',
  'hsla(145, 71%, 47%, 1)',
  'hsla(0, 100%, 41%, 1)',
];

let animationToggle = false;
let lastColor;

console.log(animateBtn);

// select radio buttons
const radioStyles = document.querySelectorAll('.style-buttons');

const random = (min, max) => Math.random() * (max - min) + min;

function missEntry(e) {
  this.style.transform = `rotate(${random(
    random(-95, -25),
    random(25, 95)
  )}deg)`;
  e.preventDefault();
}

function randomColor(colors) {
  const idx = Math.floor(random(0, colors.length));
  const currentColor = colors[idx];
  if (currentColor === lastColor) {
    return randomColor(colors);
  }
  lastColor = currentColor;
  return currentColor;
}

function missLeave(e) {
  this.style.transform = `rotate(${random(random(-10, -5), random(5, 10))}deg)`;
  e.preventDefault();
}

function radioStyleChange() {
  if (this.dataset.color === 'red') {
    document.body.style.backgroundColor = `hsla(0, 100%, 41%, 1)`;

    miss.forEach((letter) => (letter.style.color = randomColor(colors)));
    icons.forEach(
      (icon) =>
        (icon.style.color = colors[Math.floor(random(0, colors.length))])
    );
  }
  if (this.dataset.color === 'blue') {
    document.body.style.backgroundColor = `hsla(209, 85%, 67%, 1)`;
    miss.forEach((letter) => (letter.style.color = randomColor(colors)));
    icons.forEach(
      (icon) =>
        (icon.style.color = colors[Math.floor(random(0, colors.length))])
    );
  }
  if (this.dataset.color === 'yellow') {
    document.body.style.backgroundColor = `hsla(53, 98%, 65%, 1)`;
    miss.forEach((letter) => (letter.style.color = randomColor(colors)));
    icons.forEach(
      (icon) =>
        (icon.style.color = colors[Math.floor(random(0, colors.length))])
    );
  }
}

miss.forEach((letter) => letter.addEventListener('mouseenter', missEntry));
miss.forEach((letter) => letter.addEventListener('mouseout', missLeave));

// touch screens
miss.forEach((letter) => letter.addEventListener('touchstart', missEntry));
miss.forEach((letter) => letter.addEventListener('touchend', missLeave));

// event for radio buttons
radioStyles.forEach((button) =>
  button.addEventListener('click', radioStyleChange)
);

animateBtn.addEventListener('click', function (e) {
  if (!animationToggle) {
    e.preventDefault();
    icons.forEach((icon) => (icon.style.opacity = '0.5'));
    animationToggle = !animationToggle;
    console.log(animationToggle);
  } else {
    e.preventDefault();
    icons.forEach((icon) => (icon.style.opacity = '0'));
    animationToggle = !animationToggle;
    console.log(animationToggle);
  }
});
