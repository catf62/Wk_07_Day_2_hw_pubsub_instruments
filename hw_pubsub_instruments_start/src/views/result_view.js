const PubSub = require('../helpers/pub_sub.js');

const ResultView = function(container){
  this.container = container;
};

ResultView.prototype.bindEvents = function(){
  PubSub.subscribe('InstrumentFamilies:selected-family-ready', (evt) =>{
    const family = evt.detail;
    this.render(family);
  });
};

ResultView.prototype.render = function(family){
  const header = document.createElement('h2')
  header.textContent = `${family.name}`;
  const infoParagraph = document.createElement('p')
  infoParagraph.textContent = `${family.desciption}`;
  // const instrumentList = document.createElement('ul')
  // instrumentList.
  this.container.innerHTML = '';
  this.container.appendChild(infoParagraph);
};

module.exports = ResultView;
