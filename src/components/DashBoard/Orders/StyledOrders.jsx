import styled from 'styled-components';

const DirectionChange = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  > * {
    flex-grow: 1; 
    flex-basis: 105px;
    padding: 0px 10px 0px 10px;
    @media(max-width: 1250px) {
      padding: 0px;
    }
  }
`;
export default DirectionChange;