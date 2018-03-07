const average = number => {
  if (!number || !number.length) {
    return 0;
  }
  var total = 0, i;
  for (i = 0; i < number.length; i++) {
    if (Number.isInteger(number[i])) {
      total += number[i]
    } else {
      return 'input must be a number'
    }
  }
  return total / number.length;
}

console.log(average([1,2,3,4,5,6]))
