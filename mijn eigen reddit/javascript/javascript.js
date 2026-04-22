const toggles = [
  ['gamesonreddit', 'p1'],
  ['customfeeds', 'p2'],
  ['recent', 'p3'],
  ['communitys', 'p4'],
  ['sources', 'p5']
];
toggles.forEach(([buttonId, targetId]) => {
  document.getElementById(buttonId).addEventListener('click', () => {
    document.getElementById(targetId).classList.toggle('hide');
  });
});