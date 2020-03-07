import React from 'react';
import styled, {keyframes} from 'styled-components';

const Container = styled.div`
    position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
`

const loadingAnimation = keyframes`
    0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
`

const Ring = styled.div`

    display: inline-block;
    width: 80px;
    height: 80px;

    &:after{
        content: " ";
        display: block;
        width: 64px;
        height: 64px;
        margin: 8px;
        border-radius: 50%;
        border: 6px solid #fff;
        border-color: rgb(215, 218, 220) transparent rgb(215, 218, 220) transparent;
        animation: ${loadingAnimation} 1.2s linear infinite;
    }
    
`


const LoadingSymbol = (props) => {

    
    return (
        <Container>
            <Ring>

            </Ring>
        </Container>
    )
}

export {LoadingSymbol};