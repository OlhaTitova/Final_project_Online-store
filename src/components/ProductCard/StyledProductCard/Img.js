import styled from 'styled-components';
import { forTablet } from '../../../styles/mediaBreakPoints'

export const StyledCardImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100px;
  width: 100px;

  margin: 0 auto;
  margin-bottom: 3px;

  @media(min-width: ${forTablet.minWidth}px){
    height: 150px;
    width: 150px;

    margin-bottom: 6px;
  }
`

export const StyledCardImg = styled.img`
  object-fit: cover;
  max-width: 100%;
  max-height: 100%;
`

export default StyledCardImgWrapper