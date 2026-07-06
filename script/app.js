const classes = function (classes) {
  return document.querySelector(classes);
};

const nav = classes('.nav'),
  lines = classes('.header__line'),
  closePopUp = classes('.mark'),
  overlay = classes('.overlay'),
  addActive = classes('.fixed__item'),
  openPopUp = document.querySelectorAll('.btn4'),
  closeMark = classes('.closemark'),
  svg = classes('.svg'),
  svg1 = classes('.svg1'),
  header_show = classes('.section__1__flex');

lines.addEventListener('click', () => {
  nav.classList.remove('active');
});
closeMark.addEventListener('click', () => {
  nav.classList.add('active');
});

openPopUp.forEach((btn) => {
  btn.addEventListener('click', () => {
    addActive.classList.remove('active');
    overlay.classList.remove('hidden');
  });
});

function RemoveActive() {
  addActive.classList.add('active');
  overlay.classList.add('hidden');
}
window.addEventListener('keyup', (e) => {
  if (e.key === 'Escape') {
    RemoveActive();
  }
});
function alertInfor() {
  confirm(
    'this page was made only for laptops and desktop only the page is not responsive ',
  );
}

alertInfor()
closePopUp.addEventListener('click', RemoveActive);
overlay.addEventListener('click', RemoveActive);
