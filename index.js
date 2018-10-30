// Code your solution in this file
function findMatching (drivers, string) {
  return drivers.filter(d => d.toLowerCase() === string.toLowerCase())
}

function fuzzyMatch(drivers, string) {
  return drivers.filter(d => d[0] === string[0] )
}

function matchName (drivers, string) {
  return drivers.filter(d => d.name === string)
}