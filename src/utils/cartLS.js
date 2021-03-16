/* eslint-disable no-underscore-dangle */
export const addCartToLS = (product, quantity) => {
  const cartLS = JSON.parse(localStorage.getItem('cart')) || [];
  let updatedCartLS = []
  const containsInCartLS = cartLS ? cartLS.find((item) => item.product._id === product._id) : null
    
  if (containsInCartLS) {
    updatedCartLS = cartLS.map((item) => {
      if (item.product._id === containsInCartLS.product._id) {
        return {
          ...item,
          cartQuantity: item.cartQuantity + quantity
        }
      }
      return item
    })
  } else {
    updatedCartLS = [
      ...cartLS,
      {
        product,
        cartQuantity: quantity,
      }
    ]
  }
  localStorage.setItem('cart', JSON.stringify(updatedCartLS))
}

export const getCartLS = () => JSON.parse(localStorage.getItem('cart')) || []

export default addCartToLS