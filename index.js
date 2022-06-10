"use strict";
function add(a, b) {
  return a + b;
}
add(23, 23);

function subtract(a, b) {
  return a - b;
}
subtract(35, 747);

function divide(a, b) {
  return a / b;
}
divide(53526, 535);

function multiply(a, b) {
  return a * b;
}
multiply(538, 68);
function increment(n) {
  return (n += 1);
}
increment(34);
function decrement(n) {
  return (n -= 1);
}
decrement(12);
function makeInt(string) {
  return parseInt(string, 10);
}
makeInt();

function preserveDecimal(string) {
  return parseFloat(string);
}
