//Animate2Dancer
var Starmie = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.$img = $('<img src="assets/starmie.png" id="starmie" alt="starmie">');
  this.$node.append(this.$img);
}
Starmie.prototype = Object.create(MakeDancer.prototype);
Starmie.prototype.constructor = Starmie;
Starmie.prototype.step = function() {
  // function on this.$node to spin
  MakeDancer.prototype.step.call(this);
  this.$node.css({
    'animation': 'spin 1s linear infinite'});

};
// APPEND TO HTML