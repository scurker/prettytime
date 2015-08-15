'use strict';

var assert = require('assert')
  , prettytime = require('../index.js');

describe('prettytime', function() {

  it('should be a function', function() {
    assert.equal(typeof prettytime, 'function');
  });

  it('should return null with invalid input', function() {
    assert.equal(prettytime(undefined), null);
    assert.equal(prettytime(null), null);
    assert.equal(prettytime(true), null);
    assert.equal(prettytime(false), null);
    assert.equal(prettytime(function(){}), null);
    assert.equal(prettytime({}), null);
  });

  it('should prettify years', function() {
    assert.equal(prettytime(31536000000), '1 year');
    assert.equal(prettytime(63072000000), '2 years');
    assert.equal(prettytime(78840000000), '2.5 years');
  });

  it('should prettify months', function() {
    assert.equal(prettytime(2592000000), '1 month');
    assert.equal(prettytime(5184000000), '2 months');
    assert.equal(prettytime(6480000000), '2.5 months');
  });

  it('should prettify days', function() {
    assert.equal(prettytime(86400000), '1 day');
    assert.equal(prettytime(172800000), '2 days');
    assert.equal(prettytime(216000000), '2.5 days');
  });

  it('should prettify hours', function() {
    assert.equal(prettytime(3600000), '1 hour');
    assert.equal(prettytime(7200000), '2 hours');
    assert.equal(prettytime(9000000), '2.5 hours');
  });

  it('should prettify minutes', function() {
    assert.equal(prettytime(60000), '1 minute');
    assert.equal(prettytime(120000), '2 minutes');
    assert.equal(prettytime(150000), '2.5 minutes');
  });

  it('should prettify seconds', function() {
    assert.equal(prettytime(1000), '1 second');
    assert.equal(prettytime(2000), '2 seconds');
    assert.equal(prettytime(2500), '2.5 seconds');
  });

  it('should prettify millis', function() {
    assert.equal(prettytime(0), '0 ms');
    assert.equal(prettytime(1), '1 ms');
    assert.equal(prettytime(2), '2 ms');
  });

  it('should positify negative numbers', function() {
    assert.equal(prettytime(-0), '0 ms');
    assert.equal(prettytime(-1), '1 ms');
    assert.equal(prettytime(-2), '2 ms');
  });

});

describe('formatting', function() {

  it('should format with short strings', function() {
    assert.equal(prettytime(31536000000, { short: true }), '1 y');
    assert.equal(prettytime(2592000000, { short: true }), '1 mo');
    assert.equal(prettytime(86400000, { short: true }), '1 d');
    assert.equal(prettytime(3600000, { short: true }), '1 h');
    assert.equal(prettytime(60000, { short: true }), '1 m');
    assert.equal(prettytime(1000, { short: true }), '1 s');
    assert.equal(prettytime(1, { short: true }), '1 ms');
  });

  it('should format with decimals', function() {
    assert.equal(prettytime(1499, { decimals: 0 }), '1 second');
    assert.equal(prettytime(1500, { decimals: 0 }), '2 seconds');
    assert.equal(prettytime(1499, { decimals: 1 }), '1.5 seconds');
    assert.equal(prettytime(1500, { decimals: 1 }), '1.5 seconds');
    assert.equal(prettytime(1491, { decimals: 2 }), '1.49 seconds');
    assert.equal(prettytime(1500, { decimals: 2 }), '1.5 seconds');
  });

});