import { StarFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { forDesktop } from '../../styles/mediaBrakepoints'

export const StyledStarFilledIcon = styled(StarFilled)`
  color: ${(props) => props.color};
  font-size: 9px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 13px;
  }
`

export default StyledStarFilledIcon;