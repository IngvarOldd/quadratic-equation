module.exports = function solveEquation(equation) {
  // your implementation
  let strArr = equation.split(' * ');
  strArr[1] = strArr[1].replace('x^2 ', '');
  strArr[1] = strArr[1].replace(' ', '');
  strArr[2] = strArr[2].replace('x ', '');
  strArr[2] = strArr[2].replace(' ', '');
  for (let i = 0; i < strArr.length; i++) {
    strArr[i] = +(strArr[i]);
  }
  let D = Math.pow(strArr[1], 2) - 4 * strArr[0] * strArr[2];
  let answer = [];
  answer[0] = Math.round((-strArr[1] - Math.sqrt(D))/ (2 * strArr[0]));
  answer[1] = Math.round((-strArr[1] + Math.sqrt(D))/ (2 * strArr[0]));
  function compareNumbers(a, b) { return a - b;}
  answer.sort(compareNumbers);
  return answer;
}