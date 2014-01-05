
/**
 * Module dependencies.
 */

try {
  var Emitter = require('emitter');
  if ('function' != typeof Emitter) throw new Error;
} catch (err) {
  var Emitter = require('events').EventEmitter;
}

try {
  var inherit = require('inherit');
  if ('function' != typeof inherit) throw new Error;
} catch (err) {
  inherit = require('util').inherits;
}

/**
 * Expose `History`.
 */

module.exports = History;

/**
 * A browser history imitation.
 *
 * @return {History}
 * @api public
 */

function History(){
  if (!(this instanceof History)) return new History();
  this.steps = [];
  this.idx = -1;
}

inherit(History, Emitter);

/**
 * Go to `step`.
 *
 * @param {Object} step
 * @return {History}
 * @api public
 */

History.prototype.go = function(step){
  if (this.idx > -1) this.steps.length = this.idx + 1;
  this.steps.push(step);
  this.idx++;
  this.emit('go', step);
  return this;
};

/**
 * Go back.
 *
 * @return {History}
 * @api public
 */

History.prototype.back = function(){
  if (this.idx <= 0) return this;
  this.idx--;
  this.emit('go', this.current());
  return this;
};

/**
 * Go forward.
 *
 * @return {History}
 * @api public
 */

History.prototype.forward = function(){
  if (this.idx == this.steps.length - 1) return this;
  this.idx++;
  this.emit('go', this.current());
  return this;
};

/**
 * Get current `step`.
 *
 * @return {Object}
 * @api public
 */

History.prototype.current = function(){
  return this.steps[this.idx];
};

