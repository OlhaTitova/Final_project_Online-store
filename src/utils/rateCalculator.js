/* eslint-disable no-param-reassign */
/* eslint-disable prefer-destructuring */
const rateCalculator = (reviewsArray) => {
  const checked = reviewsArray.filter((el) => Number.isInteger(el) && el <= 5 && el > 0)
  const reviewsSum = checked.reduce((acc, el) => acc += el, 0)
  const reviewsQuantiny = checked.length
  
  return {
    reviews: reviewsQuantiny,
    rating: Math.round(reviewsSum / reviewsQuantiny) || 0
  }
}
export default rateCalculator