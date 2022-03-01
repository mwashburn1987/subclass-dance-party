var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<img class="mew" src="assets/mew.png" />');
};
makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  MakeDancer.prototype.step.call(this);
};
