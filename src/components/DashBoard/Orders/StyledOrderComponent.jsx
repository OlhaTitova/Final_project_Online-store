import styled from 'styled-components';
import {
  Menu
} from 'antd';
import { forTablet } from '../../../styles/mediaBreakPoints'

export const ContainerOrder = styled.div`
  border-top: 1px solid rgba(0,0,0,0.1);
  .ant-descriptions-item-label {
    padding: 8px 13px 0px 13px!important;
  }
`;
export const ShowListStyled = styled.span`
  text-decoration-line: underline;
  color: #0156FF;
  cursor: pointer;
`;
export const StyledMenu = styled(Menu)`
  .ant-dropdown-menu {
    width: 90% !important;
  }
  .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
    white-space: pre-wrap;
  }
  @media(max-width: ${forTablet.minWidth}px) {

  }
  @media(max-width: 800px) {
    .ant-dropdown-menu-item, .ant-dropdown-menu-submenu-title {
     font-size: 12px;
     padding: 5px !important;
   }
  }
`;