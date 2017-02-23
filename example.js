/** @module example */

import { compose } from 'ramda';

/**
 * This works
 * @param {number} a first number
 * @returns {number} result
 */
export function thisWorks(a) {
  return ((a*2) +2) -1;
}

/**
 * This also works
 * @function
 * @param {number} b first number
 * @returns {number} result
 */
export const thisAlsoWorks = b => ((b*2) +2) -1;

function firstOp(num) {
  return num*2;
}

function secondOp(num) {
  return num+2;
}

function thirdOp(num) {
  return num-1;
}

/** 
 * This doesn't work
 * @function
 * @param {number} c first number
 * @returns {number} result
 */
export const thisDoesNot = compose(
  thirdOp,
  secondOp,
  firstOp,
);