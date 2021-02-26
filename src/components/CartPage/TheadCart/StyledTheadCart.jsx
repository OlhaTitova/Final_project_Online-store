import styled from 'styled-components';

const StyledThead = styled.div`
    display: flex;
    justify-content: space-between;
    border-bottom: 1px solid #cccccc;
    padding: 10px 0;
    font-weight: 600;
    font-size: 14px;
    line-height: 21px;
    color: #000000;
    width: 100%;
    margin-bottom: 25px;


    p.item {
        width: 13.2%;
    }
    p.description {
        width: 29.7%;
        margin: 0 2.75%;
    }
    p.price {
        width: 9.9%;
        
    }
    p.qty {
        width: 7.7%;
        margin: 0 6.6%;
    }
    p.subtotal {
        width: 9.9%;
    }
    p.edit {
        width: 2.97%;
        margin: 0 0.77%;
    }
`;

export default StyledThead;