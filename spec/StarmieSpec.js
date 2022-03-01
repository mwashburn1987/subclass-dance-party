//Animate2DancerSpec.js

describe('starmie', function() {

  var starmie, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    starmie = new Starmie(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(starmie.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate2', function() {
    sinon.spy(starmie.$node, 'spin');
    starmie.step();
    expect(starmie.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(starmie, 'step');
      expect(starmie.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);


      expect(starmie.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(starmie.step.callCount).to.be.equal(2);
    });
  });
});
