/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
export const checkFormValues = (values) => {
  const result = {...values};

  for (const item in result) {
    if (!result[item] || result[item].length === 0) {
      result.minPrice = result.minPrice || 1
      result.maxPrice = result.maxPrice || 10000000
      if (!result[item] || result[item].length === 0) delete result[item]
    }
  }

  return result;
}

export default checkFormValues