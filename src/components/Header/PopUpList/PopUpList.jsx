import React from 'react';
import PropTypes from 'prop-types';
import vector from '../../../images/header/Vector.png';
import {
  PopUpContainer, HeaderOfPopUp, Line,
  RightOutlinedStyled, Logo, CloseOutlinedStyled
} from './PopUpListStyled';

import StyledButton from '../../common/Buttons/StyledButton';

const PopUpList = ({

  openSlide, isOpen, openCloseMenu, setIsOpen, hideList
}) => (

  <PopUpContainer hideList={hideList} setIsOpen={setIsOpen} isOpen={isOpen} variants={openSlide} initial={false} animate={isOpen ? 'show' : 'hidden'}>
    <HeaderOfPopUp>
      <Logo
        src={vector}
        alt="icon"
      />
      <CloseOutlinedStyled onClick={(e) => { openCloseMenu(e) }} />
      <Line />
    </HeaderOfPopUp>
    <ul>
      <li>
        <h5>Laptops</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Desktop PCs</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Networking</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Printers & Scanners</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>PC Parts</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>All Other Products</h5>
        <RightOutlinedStyled />
      </li>
      <li>
        <h5>Repairs</h5>
        <RightOutlinedStyled />
      </li>
      <li style={{marginBottom: '20px'}}>
        <StyledButton color="borderBlue" size="xs" shape="round">Our Deals</StyledButton>
      </li>
    </ul>
  </PopUpContainer>
)
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
  openSlide: PropTypes.shape({
    show: PropTypes.shape({
      clipPath: PropTypes.string.isRequired,
      transition: PropTypes.shape({
        type: PropTypes.string.isRequired,
        stiffness: PropTypes.number.isRequired,
        restDelta: PropTypes.number.isRequired
      })
    }),
    hidden: PropTypes.shape({
      clipPath: PropTypes.string.isRequired,
      transition: PropTypes.shape({
        delay: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        stiffness: PropTypes.number.isRequired,
        damping: PropTypes.number.isRequired
      })
    })
  }).isRequired,
}
export default PopUpList;
