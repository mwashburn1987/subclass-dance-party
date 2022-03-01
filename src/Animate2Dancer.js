//Animate2Dancer
var Animate2Dancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
};

Animate2Dancer.prototype = Object.create(MakeDancer.prototype);
Animate2Dancer.prototype.constructor = Animate1Dancer;

Animate2Dancer.prototype.step = function() {
  //css file
  MakeDancer.prototype.step.call(this);
};