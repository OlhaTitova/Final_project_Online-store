import styled from 'styled-components'

export const AnimationWrapper = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: ${(props) => props.width};
    height: ${(props) => props.height};
`
export const Spin = styled.div`
@keyframes spin {
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
}   
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateX(-50%) translateY(-50%);
    width: 70px;
    height: 70px;
    border: 10px solid #ccc;
    border-top: 8px solid blue;
    border-radius: 100%;
    animation: spin 0.8s linear infinite;
`