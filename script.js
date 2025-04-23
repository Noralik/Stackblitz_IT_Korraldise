console.log('Hello!');
let number0fElem = 0;

const img = document.querySelector('img');

img.addEventListener('click', () => {
  /* alert("i love chocolate"); */
  const newImg = document.createElement('img');
  newImg.src =
    'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Illuminati-Logo.svg/1200px-Illuminati-Logo.svg.png';
  document.body.append(newImg);
  const sound = new Audio('shashki-rytp.mp3');
  sound.play();
});

setInterval(function () {
  if (number0fElem <= 99) {
    const newImg = document.createElement('img');
    newImg.src =
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Illuminati-Logo.svg/1200px-Illuminati-Logo.svg.png';
    document.body.append(newImg);
  }
  number0fElem++;
}, 30);
