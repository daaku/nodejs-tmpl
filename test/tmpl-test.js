var tmpl = require('../lib/tmpl')
  , assert = require('assert')

exports['basic name substitution'] = function() {
  assert.equal(
    tmpl('the answer is {answer}', { answer: 42 }),
    'the answer is 42')
}
