var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (chocolateBars, n) {
  var chocolateBars2 = chocolateBars.unshift(n)
  return chocolateBars2
}
function destructivelyAddElementToBeginningOfArray (chocolateBars, n) {
  chocolateBars.unshift(n)
  chocolateBars = [n, ...chocolateBars]
  return chocolateBars
}
function addElementToEndOfArray (chocolateBars, n) {
  var chocolateBars2 = chocolateBars.push(n)
  return chocolateBars2
}
function destructivelyAddElementToEndOfArray (chocolateBars, n) {
  var chocolateBars2 = chocolateBars.push(n)
  chocolateBars = [n, ...chocolateBars]
  return chocolateBars
}
