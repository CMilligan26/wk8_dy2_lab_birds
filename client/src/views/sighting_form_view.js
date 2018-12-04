const PubSub = require('../helpers/pub_sub.js')

const SightingFormView = function (form) {
  this.form = form;
};

SightingFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt);
  });
};

SightingFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();
  const payload = this.makeBird(evt.target);
  PubSub.publish('SightingFormView:data-submitted', payload);
  evt.target.reset();
}

SightingFormView.prototype.makeBird = function (evt) {
  const newData = {
    species: evt.species.value,
    location: evt.location.value,
    date: evt.date.value
  }
  return newData;
};

module.exports = SightingFormView;
