// Code your solution in this file
/*
function findMatching(d, s) {
  return d.filter(z=>z==s);
}
*/

function findMatching(d, s) {
  return d.filter(z=>z.toLowerCase() == s.toLowerCase())
}


function fuzzyMatch(d, s) {
  return d.filter(z=>z.startsWith(s));
}

/*
function fuzzyMatch(d, s) {
  return d.filter(z=>z.toLowerCase().startsWith(s.toLowerCase()));
}
*/

function matchName(d, s) {
  return d.filter(z=>z.name==s)
}