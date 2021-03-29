import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  PopUpContainer, HeaderOfPopUp, Line,
  RightOutlinedStyled, CloseOutlinedStyled,
  Listnavigation, ExceptionLi, TechTag
} from './PopUpListStyled';
import LogoBurger from '../Utils/LogoDesktop';

const PopUpList = ({
  openSlide, isOpen, openCloseMenu, setIsOpen,
  hideList, checkForLinkOpen,
  hideInput
}) => (

  <PopUpContainer
    hideInput={hideInput}
    hideList={hideList}
    setIsOpen={setIsOpen}
    isOpen={isOpen}
    variants={openSlide}
    initial={false}
    animate={isOpen ? 'show' : 'hidden'}
  >
    <HeaderOfPopUp>
      <TechTag>Tech Store</TechTag>
      <LogoBurger />
      <CloseOutlinedStyled onClick={(e) => { openCloseMenu(e) }} />
      <Line />
    </HeaderOfPopUp>
    <Listnavigation onClick={(e) => checkForLinkOpen(e)}>
      <ExceptionLi>
        <NavLink
          to="/catalog?categories=desctops"
        >
          <h5>Desctops</h5>
        </NavLink>
        <RightOutlinedStyled />
      </ExceptionLi>
      <li>
        
        <NavLink
          to="/catalog?categories=gamingMonitors"
        >
          <h5>Gaming Monitors</h5>
        </NavLink>
        <RightOutlinedStyled />
      </li>
      <li>
        
        <NavLink
          to="/catalog?categories=laptops"
        >
          <h5>Laptops</h5>
        </NavLink>
       
        <RightOutlinedStyled />
      </li>
      <li>
        <NavLink
          to="/catalog?categories=tablets"
        >
          <h5>
            Tablets
          </h5>
        </NavLink>
        <RightOutlinedStyled />
      </li>
      <li>
        <NavLink
          to="/catalog"
        >
          <h5>Catalog</h5>
        </NavLink>
        <RightOutlinedStyled />
      </li>
    </Listnavigation>
  </PopUpContainer>
)
PopUpList.propTypes = {
  hideList: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  openCloseMenu: PropTypes.func.isRequired,
  checkForLinkOpen: PropTypes.func.isRequired,
  openSlide: PropTypes.instanceOf(Object).isRequired,
  hideInput: PropTypes.bool.isRequired
}
export default PopUpList;
