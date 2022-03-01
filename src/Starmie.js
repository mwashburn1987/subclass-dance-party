//Animate2Dancer
var Starmie = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

Starmie.prototype = Object.create(MakeDancer.prototype);
Starmie.prototype.constructor = Starmie;

Starmie.prototype.step = function() {
  //css file
  Starmie.prototype.step.call(this);
};

// APPEND TO HTML