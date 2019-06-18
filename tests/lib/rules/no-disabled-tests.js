'use strict';

var RuleTester = require('eslint').RuleTester;

var rule = require('../../../lib/rules/no-disabled-tests');

var ruleTester = new RuleTester();

function invalidScenario (code) {
  return {
    code: code,
    parserOptions: { ecmaVersion: 6 },
    errors: [
      { message: 'Disabled test' }
    ]
  };
}

ruleTester.run('no-disabled-tests', rule, {
  valid: [
    'Scenario("this is cool", function () {});'
  ],
  invalid: [
      invalidScenario('xScenario("this is not", function () {});'),
      invalidScenario('Scenario.skip("nor is this", function () {});')
    ],
});
