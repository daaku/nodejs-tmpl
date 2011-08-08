var tmpl = require('tmpl')
  , assert = require('assert')

exports['basic name substitution'] = function(beforeExit) {
  assert.equal(
    tmpl('the answer is {answer}', { answer: 42 }),
    'the answer is 42')
}
