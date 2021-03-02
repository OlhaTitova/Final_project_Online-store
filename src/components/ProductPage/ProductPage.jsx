import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { getOneProduct } from '../../store/products/middleware'
// import { getOneProduct } from '../../store/products/middleware'

const ProductPage = () => {
  const { productID } = useParams()
  useEffect(() => {
    getOneProduct(productID)()
  }, [productID])

  return <h1>Product page</h1>
}

export default ProductPage