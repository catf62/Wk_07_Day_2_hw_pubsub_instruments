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
  const infoParagraph = document.createElement('p');
  const instrumentList = document.createElement('ul');


  header.textContent = `${family.name}`;
  infoParagraph.textContent = `${family.description}`;

  family.instruments.forEach(function(element){
    const instrumentListElement = document.createElement('li');
    instrumentListElement.textContent = `${element}`;
    instrumentList.appendChild(instrumentListElement);
  });


  // const instrumentList = document.createElement('ul')
  // instrumentList.
  // console.log(family);
  // let varbl = '<h2>'+family.name+'</h2><p>'+family.description+'</p>'+
  //   '<p><ol><li>beans</li></ol></p>';
  // forEach  {
  //   varbl += 'moooore';
  // }

  this.container.innerHTML = "";
  this.container.appendChild(header);
  this.container.appendChild(infoParagraph);
  this.container.appendChild(instrumentList);
};

module.exports = ResultView;
