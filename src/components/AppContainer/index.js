import React from "react";
import Header from '../Header/index'
import Home from '../../Screens/Home/index'
import FeatureProducts from '../../Screens/FeaturedProducts/index'
import StoreOnMyPricee from '../../Screens/StoreOnMyPricee/index'
import MostPopularInMyPricee from '../../Screens/MostPopularInMyPricee/index'
import RecomenderForYou from '../../Screens/RecommendedForYou/index'
import Adds from '../../Screens/adds/index'
import FavouritesFromMyPricee from '../../Screens/FavouritesFromMyPricee/index'
import PriceDrops from '../../Screens/PriceDrops/index'
import MixCat from '../../Screens/MixCategory/index'
import GreatDeal from '../../Screens/GreatDealsFoundByMyPricee/index'
import MyRecentSearches from '../../Screens/MyRecentSearches/index'
import Coupons from '../../Screens/coupon/index'
import RelatedArticals from '../../Screens/RelatedArticles/index'
import OurPartners from '../../Screens/OurPartners/index'
import Footer from '../Footer/index'
import "antd/dist/antd.css";

const AppContainer = () => {
  return (
    <div>
      <Header />
      <Home />
      <FeatureProducts />
      <StoreOnMyPricee />
      <MostPopularInMyPricee />
      <RecomenderForYou />
      <Adds />
      <FavouritesFromMyPricee />
      <PriceDrops />
      <MixCat />
      <GreatDeal />
      <MyRecentSearches />
      <Coupons />
      <RelatedArticals />
      <OurPartners />
      <Footer />
    </div>

  )
};

// export default windowSize(AppContainer);
export default AppContainer;