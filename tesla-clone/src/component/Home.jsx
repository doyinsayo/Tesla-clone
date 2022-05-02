import React from 'react';
import Section from './Section';

function Home() {
  return (
    <div>
      <Section
      title='Model S'
      description='Order Online for Touchless Delivery'
      backgroundImg='model-s.jpg'
      leftBtnText='Custom order'
      rightBtnText='Existing inventory'
      />
      <Section
      title='Model Y'
      description='Order Online for Touchless Delivery'
      backgroundImg='model-y.jpg'
      leftBtnText='Custom order'
      rightBtnText='Existing inventory'
      />
      <Section
      title='Model 3'
      description='Order Online for Touchless Delivery'
      backgroundImg='model-3.jpg'
      leftBtnText='Custom order'
      rightBtnText='Existing inventory'
      />
      <Section
      title='Model X'
      description='Order Online for Touchless Delivery'
      backgroundImg='model-x.jpg'
      leftBtnText='Custom order'
      rightBtnText='Existing inventory'
      />
      <Section 
      title="New Interior"
      model='New Interior' 
      backgroundImg='new-interior.jpg' 
      leftBtnText='Order now'
      rightBtnText='Learn more'
      /> 
      <Section 
      title='Solar Panels'
      model='Solar Panels' 
      backgroundImg='solar-panel.jpg' 
      description='Lowest Cost Solar Panels in America'
      leftBtnText='Order now'
      rightBtnText='Learn more'
      />
      <Section 
      title='Solar Roof'
      model='Solar Roof' 
      backgroundImg='solar-roof.jpg' 
      description='Produce Clean Energy From Your Roof'
      leftBtnText='Order now'
      rightBtnText='Learn more'
      />
      <Section
      title="Accessories"
      description=""
      backgroundImg="accessories.jpg"
      leftBtnText="Order Now"
      />
    </div>
  )
}

export default Home