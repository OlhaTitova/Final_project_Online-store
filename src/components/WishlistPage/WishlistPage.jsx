import React from 'react'
import { connect } from 'react-redux';
import { WishlistBox, StyledEmpty } from './StylesWishlistPage';
import { addProductToWishlist, removeProductFromWishlist } from '../../store/wishlist/middleware'
import { selectWishlistItems } from '../../store/wishlist/reducer'
import { ProductCard } from '../ProductCard/ProductCard'
import Heading from '../common/Heading/Heading';
import { Container } from '../common/Container';

const mapStateToProps = (state) => ({ wishlist: selectWishlistItems(state) })

const Wishlist = connect(mapStateToProps, {
  addProductToWishlist,
  removeProductFromWishlist
})(({
  wishlist,
}) => {
  const items = wishlist.map((item) => <ProductCard key={item.itemNo} productInfo={item} />)

  return (
    <Container>
      <Heading>
        My wishlist
      </Heading>
      <WishlistBox>
        {items.length ? items : <StyledEmpty description="No items have been added." />}
      </WishlistBox>
    </Container>
    
  )
})
export default Wishlist