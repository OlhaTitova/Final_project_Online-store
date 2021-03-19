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
  const updatedCartLS = cartLS.map((item) => {
    if (item.product._id === containsInCartLS.product._id) {
      // eslint-disable-next-line no-param-reassign
      item.cartQuantity += 1
    }
    return item
  })
  localStorage.setItem('cart', JSON.stringify(updatedCartLS))
  return updatedCartLS
}

export const decreaseQuantityLS = (productId) => {
  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  const containsInCartLS = cartLS.find((item) => item.product._id === productId)
  const updatedCartLS = cartLS.map((item) => {
    if (item.product._id === containsInCartLS.product._id) {
      // eslint-disable-next-line no-param-reassign
      item.cartQuantity -= 1
    }
    return item
  })
  localStorage.setItem('cart', JSON.stringify(updatedCartLS))
  return updatedCartLS
}

export const removeFromCartLS = (productId) => {
  if (!productId) return;
  const cartLS = JSON.parse(localStorage.getItem('cart')) || []
  const deleteItem = cartLS.filter((item) => item.product._id !== productId)
  console.log(deleteItem)
  localStorage.setItem('cart', JSON.stringify(deleteItem));
}
export default addCartToLS