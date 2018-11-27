document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js: JavaScript Loaded');

  const selectView = new SelectView();
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const resultView = new ResultView();
  resultView.bindEvents();
});
