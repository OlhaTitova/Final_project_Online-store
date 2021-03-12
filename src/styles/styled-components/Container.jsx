<<<<<<< HEAD
import styled from 'styled-components'
import { forDesktop } from '../mediaBrakepoints'

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    
    @media(min-width: ${forDesktop.minWidth}px){
        max-width: 1200px;
    }
`
export default Container
=======
import styled from 'styled-components'
import { forDesktop } from '../mediaBreakPoints'

export const Container = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 0 10px;
    
    @media(min-width: ${forDesktop.minWidth}px){
        max-width: 1200px;
    }
`
export default Container
>>>>>>> 3bc288988ca276d8d36307ff648f4aa672669eb0
