const scores = [45, 80, 25, 90, 60, 35, 100, 70]

const sum = scores.reduce((acc, score) => {
  if (score >= 50) {
    return acc + score
  }
  return acc;
}, 0)

console.log(sum)
