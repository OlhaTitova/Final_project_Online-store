import styled from 'styled-components';
import { CheckCircleFilled } from '@ant-design/icons';
import { forDesktop } from '../../../styles/mediaBreakPoints';

const StyledInStockeWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    margin-bottom: 10px;
  }
`

export const StyledInStockeIcon = styled(CheckCircleFilled)`
  color: #78A962;
  font-size: 10px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export const StyledInStockeText = styled.span`
  color: #78A962;
  font-size: 10px;
  text-transform: lowercase;

  margin-left: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export default StyledInStockeWrapper;