//Voltorb.js

describe('voltorb', function() {

  var voltorb, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    voltorb = new Voltorb(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(voltorb.$node).to.be.an.instanceof(jQuery);
  });

  it('should have a step function that makes its node animate2', function() {
    sinon.spy(voltorb.$node, 'INSERT ANIMATION HERE');
    voltorb.step();
    expect(voltorb.$node.toggle.called).to.be.true;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(voltorb, 'step');
      expect(voltorb.step.callCount).to.be.equal(0);
      // clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);


      expect(voltorb.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(voltorb.step.callCount).to.be.equal(2);
    });
  });
});
