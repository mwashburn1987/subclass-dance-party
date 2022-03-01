var makeBlinkyDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img src="assets/mew.png" id="mew" alt="mew">');
  this.$node.append(this.$img);
};
makeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
makeBlinkyDancer.prototype.constructor = makeBlinkyDancer;
makeBlinkyDancer.prototype.step = function() {
  this.$node.toggle();
  MakeDancer.prototype.step.call(this);
};
