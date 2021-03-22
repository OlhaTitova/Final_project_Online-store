import { PhoneFilled } from '@ant-design/icons';
import styled from 'styled-components';
import { forDesktop } from '../../../styles/mediaBreakPoints';

const StyledCheckAvailabilityWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const StyledCheckAvailabilityIcon = styled(PhoneFilled)`
  padding: 3px;
  font-size: 4px;
  border-radius: 100%;
  color: #fff;
  background-color: #C94D3F;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 6px;
  }
`

export const StyledCheckAvailabilityText = styled.span`
  margin-left: 5px;
  font-size: 10px;
  text-transform: lowercase;
  color: #C94D3F;

  @media(min-width: ${forDesktop.minWidth}px){
    font-size: 12px;
  }
`

export default StyledCheckAvailabilityWrapper;