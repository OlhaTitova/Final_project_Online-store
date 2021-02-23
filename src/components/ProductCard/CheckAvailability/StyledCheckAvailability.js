import { PhoneFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { forDesktop } from '../../../styles/mediaBrakepoints';

const StyledCheckAvailabilityWrapper = styled.div`
  display: flex;
  align-items: center;

  margin-bottom: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    margin-bottom: 10px;
  }
`

export const StyledCheckAvailabilityIcon = styled(PhoneFilled)`
  color: #fff;
  font-size: 4px;

  background-color: #C94D3F;
  border-radius: 100%;

  padding: 3px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 6px;
  }
`

export const StyledCheckAvailabilityText = styled.span`
  color: #C94D3F;
  font-size: 10px;
  text-transform: lowercase;

  margin-left: 5px;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export default StyledCheckAvailabilityWrapper;