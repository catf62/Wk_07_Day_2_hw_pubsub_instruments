const InstrumentFamilies = require('./models/instrument_families.js');
const SelectView = require('./views/select_view.js');
const ResultView = require('./views/result_view.js');

document.addEventListener('DOMContentLoaded', () => {
  console.log('app.js: JavaScript Loaded');

  const selectView = new SelectView(document.getElementById("instrument-families"));
  selectView.bindEvents();

  const instrumentFamilies = new InstrumentFamilies();
  instrumentFamilies.bindEvents();

  const resultView = new ResultView(document.getElementById("selected-instrument"));
  resultView.bindEvents();
});
