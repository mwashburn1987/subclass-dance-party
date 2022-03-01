//Animate1Dancer
var Voltorb = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img src="assets/voltorb.png" id="voltorb" alt="voltorb">');
  this.$node.append(this.$img);
}
Voltorb.prototype = Object.create(MakeDancer.prototype);
Voltorb.prototype.constructor = Voltorb;
Voltorb.prototype.step = function() {
  // function on this.$node to shake
  MakeDancer.prototype.step.call(this);
};

//APPEND TO HTML FILE