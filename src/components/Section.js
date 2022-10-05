import React from 'react'
import styled from '@emotion/styled';
import { Fade } from "react-awesome-reveal";

const Section = ({title,description,backgroundImg,leftBtnText,rigthBtnText}) => {
  return (
    <Wrap bgImage={backgroundImg}>
        <TextItem>
            <Fade  delay={1000}>
            <h1>{title}</h1>
            </Fade >
            <Fade delay={2000}>
            <p>{description}</p>
            </Fade>
        </TextItem>
        <Buttons>
            <Fade delay={2500}>
            <ButtonGroup>
                <LeftButton>{leftBtnText}</LeftButton>
                {rigthBtnText && 
                    <RightButton>{rigthBtnText}</RightButton>
                }
            </ButtonGroup>
            </Fade>
            {rigthBtnText &&
                    <DownArrow src='/images/down-arrow.svg' />
            }

        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: ${props => `url("/images/${props.bgImage}")`};
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

const TextItem = styled.div`
    padding-top: 15vh;
    text-align: center;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    gap:20px;

    @media (max-width: 768px){
        flex-direction: column;
        gap: 10px;
    }
`
const LeftButton = styled.div`
    background-color: rgba(23,26,23,0.8);
    color: white;
    height: 40px;
    width: 256px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.85;
    text-transformation: uppercase;
    font-size: 12px;
    cursor: pointer;
`
const RightButton = styled(LeftButton)`
    color: rgba(23,26,23,0.8);
    opacity: 0.65;
    background-color: white;
`
const DownArrow = styled.img`
    height: 40px;
    animation: bounce infinite 1.5s;
`

const Buttons = styled.div`
display: flex;
justify-content: center;
flex-direction:column;
`
