const toggles = [
  ['about-btn', 'p1', 'about'],
  ['projects-btn', 'p2', 'projects'],
];
toggles.forEach(([buttonId, targetId, secondtargetId]) => {
  document.getElementById(buttonId).addEventListener('click', () => {
    toggles.forEach(([, id, secondId]) => {
      document.getElementById(id).classList.add('hide');
      document.getElementById(secondId).classList.add('hide');
    });
    document.getElementById(targetId).classList.toggle('hide');
    document.getElementById(secondtargetId).classList.toggle('hide');
  });
});