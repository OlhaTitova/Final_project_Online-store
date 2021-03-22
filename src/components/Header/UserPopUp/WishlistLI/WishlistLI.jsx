import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { selectWishlistLength } from '../../../../store/wishlist/reducer'

const mapStateToProps = (state) => ({wishlistLength: selectWishlistLength(state)})

const WishlistLI = connect(mapStateToProps, null)(({wishlistLength}) => (
  <Link to="/wishlist">
    <li>
      My Wish List (
      {wishlistLength}
      )
    </li>
  </Link>
))

export default WishlistLI