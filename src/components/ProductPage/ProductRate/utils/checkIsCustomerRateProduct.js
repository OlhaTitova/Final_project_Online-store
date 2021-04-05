import { getCustomer, updateCustomer } from '../../../../store/customer/middleware'

export const checkIsCustomerRatedProduct = async (itemNo) => {
  const customer = await getCustomer()
  if (!customer || customer.status !== 200) return null
  const { ratedProducts } = customer.data

  const checkIsRatedBefore = Boolean(ratedProducts.find((productNo) => productNo === itemNo))
  if (checkIsRatedBefore) {
    return true
  }
  updateCustomer({ratedProducts: [...ratedProducts, itemNo]})
  return false
}
export default checkIsCustomerRatedProduct