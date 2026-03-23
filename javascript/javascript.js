var p = document.getElementById("p");

function show() {
  p.classList.toggle('hideP');
}

document.getElementById('sources').addEventListener('click', show);