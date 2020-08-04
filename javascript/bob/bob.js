/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  if (typeof message === 'undefined') message = '';
  message = message.trim();

  if (message === '') return 'Fine. Be that way!';
  if (message.toUpperCase() === message && /[A-Z]/.test(message)) {
    if (/\?$/.test(message)) return 'Calm down, I know what I\'m doing!';
    return 'Whoa, chill out!';
  }
  if (/\?$/.test(message)) return 'Sure.';

  return 'Whatever.';
};
