import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
    <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt = 'chef'/>
    </div>
    <div className='app__wrapper_infor'>
      <SubHeading title="Chef's Word"/>
      <h1 className='headtext__cormorant'>What we believe in</h1>
      <div className='app__chef-content'>
        <div className='app__chef-content_quote'>
          <img src={images.quote} alt="quote"/>
          <p className='p__opensans'>I ate a huge Pinneapple once and it inspired me to eat more</p>
        </div>
        <p className='p__opensans'>Note: That Pinneapple came from a garden my Mom made</p>
      </div>
      <div className='app__chef-sign'>
        <p>Kevin Sun</p>
        <p className='p__opensans'>Chef and Founder</p>
        <img src= {images.sign} alt='sign'/>
      </div>
    </div>
  </div>
);

export default Chef;
