const cellak = document.querySelectorAll('.cella');
cellak.forEach(cella => {
  cella.addEventListener('click', () => {
    if (cella.dataset.szin === 'sarga') {
      cella.dataset.szin = 'piros';
      cella.classList.add('piros');
    } else if (cella.dataset.szin === 'piros') {
      cella.dataset.szin = 'kek';
      cella.classList.remove('piros');
      cella.classList.add('kek');
    } else if (cella.dataset.szin === 'kek') {
      cella.dataset.szin = 'piros';
      cella.classList.remove('kek');
      cella.classList.add('piros');
    }
  })
})