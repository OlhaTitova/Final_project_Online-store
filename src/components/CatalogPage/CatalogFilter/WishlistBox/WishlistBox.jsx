import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { WishList, NoWishItem, WishItem } from './StylesWishlistBox'
import { selectWishlistLength } from '../../../../store/wishlist/reducer'

const mapStateToProps = (state) => ({ wishlistLength: selectWishlistLength(state) })

const WishlistBox = connect(mapStateToProps, null)(({ wishlistLength }) => (
  <WishList>
    <Link to="/wishlist" onClick={() => window.scrollTo(0, 0)}>
      <h5>My Wish List</h5>
    </Link>
    {wishlistLength > 0 ? (
      <WishItem>
        <p>
          You have
          {' '}
          {wishlistLength}
          {' '}
          items in your wish list.
        </p>
      </WishItem>
    ) : (
      <NoWishItem>
        <p>You have no items in your wish list.</p>
      </NoWishItem>
    )}
  </WishList>
))
export default WishlistBox