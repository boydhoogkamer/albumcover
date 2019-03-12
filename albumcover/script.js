let alleCovers  = document.querySelectorAll('.cover');

const up = (e) => {
  e.target.classList.remove('down');
  e.target.classList.add('up');
}

const down = (e) => {
  e.target.classList.remove('up');
  e.target.classList.add('down');
}

for(let i=0; i<alleCovers.length; i++){
  let album = alleCovers[i];
  album.addEventListener('mouseenter', up);
  album.addEventListener('mouseleave', down);
}
