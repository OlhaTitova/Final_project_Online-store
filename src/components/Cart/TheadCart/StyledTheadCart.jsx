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

    p.item {
        width: 120px;
    }
    p.description {
        width: 270px;
        padding: 0 25px;
    }
    p.price {
        width: 90px;
        padding: 0 60px;
    }
    p.qty {
        width: 70px;
    }
    p.subtotal {
        width: 90px;
    }
    p.edit {
        width: 27px;
        padding: 0 7px;
    }
`;

export default StyledThead;