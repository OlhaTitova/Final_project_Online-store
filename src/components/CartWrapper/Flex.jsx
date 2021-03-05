import styled from 'styled-components';
import {forDesktop, forTablet} from '../../styles/mediaBreakPoints';

export const Row = styled.div`
    display:flex;
`;

export const AlignItemsCenter = styled(Row)`
    align-items:center;

    @media(min-width: ${forDesktop.minWidth}px){
        align-items: flex-start;
    }
`;

export const RowRevers = styled(Row)`
    display: block;

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        display:flex;
        flex-direction: row-reverse;
        margin-bottom:30px;

        @media(min-width: 481px) and (max-width: 767px) {
            display: block;
        }

    }
    @media(min-width: ${forDesktop.minWidth}px){
        display:flex;
        flex-direction: row-reverse;
        margin-bottom:70px;
    }
`;

export const RowColumn = styled(Row)`
    flex-direction: column;

    @media(min-width: ${forDesktop.minWidth}px){
        flex-direction: row;
    }
`;

export const RowBetween = styled(Row)`
    justify-content: space-between;
`;

export const ColumnRowBetween = styled(Row)`
    flex-direction: column;

    @media(min-width: ${forDesktop.minWidth}px){
        flex-direction:row;
        justify-content: space-between;
    }
`;