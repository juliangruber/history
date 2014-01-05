var test = require('tape');
var History = require('..');

test('history', function(t){
  t.ok(History());
  t.ok(new History);
  t.end();
});

test('current', function(t){
  var h = History();
  t.notOk(h.current());
  h.go('one');
  t.equal(h.current(), 'one');
  t.end();
});

test('go', function(t){
  var h = History();
  t.equal(h, h.go('one'));
  h.go('two').back().go('three').back();
  t.equal(h.current(), 'one');
  h.forward();
  t.equal(h.current(), 'three');
  t.end();
});

test('back', function(t){
  var h = History();
  t.equal(h, h.back());
  t.notOk(h.current());
  h.go('one').go('two');
  h.once('go', function(step){
    t.equal(step, 'one');
    t.equal(h.current(), 'one');
    h.go('two');
    t.equal(h, h.back());
    t.equal(h.current(), 'one');
    t.end();
  });
  t.equal(h, h.back());
});

test('forward', function(t){
  var h = History();
  t.equal(h, h.forward());
  t.notOk(h.current());
  h.go('one').go('two').back();
  h.once('go', function(step){
    t.equal(step, 'two');
    t.equal(h, h.forward());
    t.equal(h.current(), 'two');
    t.end();
  });
  t.equal(h, h.forward());
});

