var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']
function addElementToBeginningOfArray (array, n) {
 var chocolateBars2 = [n, ...chocolateBars]
  return chocolateBars2
}

function destructivelyAddElementToBeginningOfArray (chocolateBars, n) {
  chocolateBars.push(n)
  return chocolateBars
}

function accessElementInArray (chocolateBars, n) {
  return chocolateBars[n]
}

function destructivelyRemoveElementFromBeginningOfArray (chocolateBars) {
  chocolateBars.shift()
  chocolateBars
}

function removeElementFromBeginningOfArray (chocolateBars) {
 chochocolateBars = chochocolateBars.slice(1)
}

function destructivelyRemoveElementFromEndOfArray (chocolateBars) {
  chocolateBars.pop()
  return chocolateBars
}
