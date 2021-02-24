import styled from 'styled-components'
import { forDesktop } from '../../styles/mediaBreakPoints'

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    
    @media(min-width: ${forDesktop.minWidth}px){
        max-width: 1200px;
    }
`
export default Container;