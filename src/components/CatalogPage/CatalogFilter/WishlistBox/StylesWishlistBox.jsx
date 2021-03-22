import styled from 'styled-components'

export const WishList = styled.div`
  @media(max-width: 592px) {
    display: none;
  }
  margin-top: 50px;
  height: 120px;
  border-top: 7px solid white;
  border-bottom: 7px solid white;
  h5{
    text-align: center;
    font-size: 20px;
    padding-top: 10px;
    color: black;
  }

  h5:hover {
      text-decoration: underline;
  }
`;

export const NoWishItem = styled.div`
  padding: 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
export const WishItem = styled.div`
  padding: 0px 5px;
  p{
    font-size: 12px;
    text-align: center;
    padding-top: 5px;
  }
`;
