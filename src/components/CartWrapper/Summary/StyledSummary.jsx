import styled from 'styled-components';
import { forTablet, forDesktop } from '../../../styles/mediaBreakPoints';

const WrapperSummary = styled.div`
    margin: 0 0 20px 0;
    background-color: #F5F9FF;
    padding: 20px 25px;
    flex: 0 2 343px;

    h4 {
        font-weight: 600;
        font-size: 14px;
        line-height: 21px;
        margin-bottom: 20px;
    }
    .sumtotal {
        font-weight: 600;
        font-size: 14px;
        line-height: 210%;
    }
    div {
        margin: 15px 0;
    }
    .paypall {
        margin-left:15px;
    }

    @media(min-width: ${forTablet.minWidth}px) and (max-width: ${forTablet.maxWidth}px) {
        margin: 0 0 30px 25px;
        padding: 20px 25px;
        min-width: 343px;
    
        h4 {
            font-weight: 600;
            font-size: 14px;
            line-height: 21px;
            margin-bottom: 20px;
        }

        .sumtotal {
            font-weight: 600;
            font-size: 11px;
        line-height: 210%;
        }

        div {
            margin: 15px 0;
        }

        @media(min-width: 481px) and (max-width: 767px) {
            margin: 0 0 30px 0;
        }
    }

    @media(min-width: ${forDesktop.minWidth}px){
        margin: 0 0 30px 35px;
        padding: 20px 25px;
        flex: 0 2 343px;


        h4 {
            font-weight: 600;
            font-size: 24px;
            line-height: 36px;
            margin-bottom: 20px;
        }

        p, span {
            font-weight: 600;
            font-size: 13px;
            line-height: 210%;
        }

        div {
            margin: 15px 0;
        }
    }
`;

export default WrapperSummary;