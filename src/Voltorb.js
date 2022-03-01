//Animate1Dancer
var Voltorb = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
}
Voltorb.prototype = Object.create(MakeDancer.prototype);
Voltorb.prototype.constructor = Voltorb;
Voltorb.prototype.step = function() {
  MakeDancer.prototype.step.call(this);
};

//APPEND TO HTML FILE