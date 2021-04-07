import React from 'react';
import {BannerSlider} from '../BannerSlider/BannerSlider';
import {HomepageFollowUs} from '../BrandsAndFollow/FollowUsInstagram';
import {HomepageBrands} from '../BrandsAndFollow/HomePageBrands';
import Description from '../Description/Description';
import {Catalog} from '../MainCatalog/Catalog';
import NewProductsSlider from '../NewProductsSlider/NewProductsSlider';
import ReviewSlider from '../ReviewSlider/ReviewSlider';

const HomePage = () => {
  window.scrollTo(0, 0)

  return (
    <div>
      <BannerSlider />
      <NewProductsSlider />
      <Catalog />
      <Description />
      <HomepageBrands />
      <HomepageFollowUs />
      <ReviewSlider />
    </div>
  )
}

export default HomePage;