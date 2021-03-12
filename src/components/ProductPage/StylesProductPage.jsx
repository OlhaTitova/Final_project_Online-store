import styled from 'styled-components'
import { forTablet, forDesktop } from '../../styles/mediaBreakPoints'

export const PageContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    @media(min-width: 721px){
        flex-direction: row;
    }
`
export const ProductImagesCarouselBox = styled.div`
    width: 100%;
    border: 3px solid #F5F7FF;
    @media(min-width: 721px) and (max-width: ${forTablet.maxWidth}px){
        width: 55%;
    }
    @media(min-width: ${forDesktop.minWidth}px){
        width: 50%;
    }
`
export const InformationBox = styled.div`
    display: flex;
    align-self: stretch;
    flex-direction: column;
    width: 100%;
    
    @media(min-width: 721px) and (max-width: ${forTablet.maxWidth}px){
        width: 50%;
        padding: 12px 20px;
        background-color: #F5F7FF;
    }
    @media(min-width: ${forDesktop.minWidth}px){
        width: 60%;
        padding: 12px 20px;
        background-color: #F5F7FF;
    }
`
export const ImageBox = styled.div`
    height: 60vh;
`
export const StyledImg = styled.img`
    object-fit: contain;
    width: 100%;
    height: 100%;
`
export const Description = styled.div`
    margin: 20px 0 13px 0;
    font-size: 12px;
    line-height: 18px;
    font-weight: 600;
    color: #666666;
`
export const ProductHeading = styled.h3`
    margin-bottom: 7px;
    font-size: 22px;
    line-height: 33px;
    font-weight: 500;
`
export const AboutProduct = styled.ul`
    display: flex;
    flex-direction: column;
    list-style: disc;
    margin-left: 14px;
    li {
        font-size: 15px;
        line-height: 20px;
        font-weight: 300;
        b {
            font-weight: 500;
        }
    }
`
export const PriceBox = styled.div`
    text-align: center;
    background-color: #F5F7FF;
    border-radius: 4px;
    padding: 7px 10px;
    font-weight: 300;
    b {
        font-weight: 500;
    }
`