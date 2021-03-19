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

export const increaseQuantityLS = (productId) => {
  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  const containsInCartLS = cartLS.find((item) => item.product._id === productId)
  console.log(containsInCartLS)
  const updatedCartLS = cartLS.map((item) => {
    let cartQuantityLS = 0
    if (item.product._id === containsInCartLS.product._id) {
      cartQuantityLS = item.cartQuantity + 1
    }
    console.log(cartQuantityLS)
    return cartQuantityLS
  })
  console.log(updatedCartLS)
  localStorage.setItem('cart', JSON.stringify(updatedCartLS))
  return updatedCartLS
}

export default addCartToLS