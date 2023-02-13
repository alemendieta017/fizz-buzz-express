function fizzBuzz(length) {
  let result = []
  for(let i = 1; i <= length; i++) {
    if(i % 2 === 0) {
      result.push(`${i} Soy Par!`)
    } else {
      result.push(`${i} Soy Impar!`)
    }
  }
  return result
}

module.exports = fizzBuzz