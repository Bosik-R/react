import React from 'react'
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-2.svg';
import Icon3 from '../../images/svg-3.svg';

import { 
  ServicesContainer, 
  ServicesTitle,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesIconTitle,
  ServicesParagraph
} from './Services.Elements';

const Services = () => {
  return (
    <>
      <ServicesContainer id='services'>
        <ServicesTitle>Our Services</ServicesTitle>
        <ServicesWrapper>
          <ServicesCard>
            <ServicesIcon src={Icon1} />
            <ServicesIconTitle>Reduce expenses</ServicesIconTitle>
            <ServicesParagraph>We help reduce your fees and increase your revenue</ServicesParagraph>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServicesIconTitle>Virtual offices</ServicesIconTitle>
            <ServicesParagraph>We help reduce your fees and increase your revenue</ServicesParagraph>
          </ServicesCard>
          <ServicesCard>
            <ServicesIcon src={Icon3} />
            <ServicesIconTitle>Premium benefits</ServicesIconTitle>
            <ServicesParagraph>We help reduce your fees and increase your revenue</ServicesParagraph>
          </ServicesCard>

        </ServicesWrapper>
      </ServicesContainer>
      
    </>
  )
}

export default Services;
