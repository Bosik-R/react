import React from 'react'
import { Button } from '../common/Button/Button.Elements';
import {
  MainContainer,
  MainWrapper,
  MainRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrapper,
  ImgWrapper,
  Img,
} from './Main.Elements';

const Main = ({ id, darkBg, lightText, topLine, headline, description, buttonLabel, imgStart, img, alt, primary, dark}) => {
  return (
    <>
      <MainContainer darkBg={darkBg} id={id}>
        <MainWrapper>
          <MainRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightText={lightText}>{description}</Subtitle>
                <BtnWrapper>
                  <Button 
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary} 
                    dark={dark} 
                    to='home'
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrapper>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrapper>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </Column2>
          </MainRow>
        </MainWrapper>
      </MainContainer>
    </>
  )
}

export default Main;
