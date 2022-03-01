//Animate1Dancer
var Animate1Dancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}
Animate1Dancer.prototype = Object.create(MakeDancer.prototype);
Animate1Dancer.prototype.constructor = Animate1Dancer;
Animate1Dancer.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};