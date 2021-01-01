import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { 
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroTitle,
  HeroParagraph,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight
} from './Hero.Elements';
import { Button } from '../common/Button/Button.Elements';


const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  }

  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </HeroBg>
      <HeroContent>
        <HeroTitle>Virtual Banking Made Easy</HeroTitle>
        <HeroParagraph>
          Sign up for a new account today and recive $250 in credits towards your next payment.
        </HeroParagraph>
        <HeroBtnWrapper>
          <Button to='signup' onMouseEnter={onHover} onMouseLeave={onHover} primary='true' dark='true'>
            Get started
            {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  )
}

export default Hero;
