const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain( email ) {
  let arr = email.match(/@[^\.]+.+/gi)[0].split('');
  let newArr = arr.shift();

  return arr.join('');
}

module.exports = {
  getEmailDomain
};
