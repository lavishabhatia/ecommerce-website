import React from "react";
import Head from "./Component/Head";
import Search from "./Component/Search";
import Categories from "./Component/Categories";
import Middle from "./Component/Middle";
import Delivery from "./Component/Delivery";
import Map_card from "./Component/Map_card";
import Deal_cloth from "./Component/Deal_cloth";
import Avail_discount from "./Component/Avail_discount";
import Electronics from "./Component/Electronics";
import Week_sales from "./Component/Week_sales";
import Women from "./Component/Women";
import Features_brand from "./Component/Features_brand";
import Black_Fri from "./Component/Black_Fri";
import Selected from "./Component/Selected";
import Fotter from "./Component/Fotter";
// import Selected_Product from "./Component/Selected_Product";
function App() {
  return (
    <div className="bg-[#F6F6F6]">
      <div className="bg-white ">
        <Head />

        <Search />
        <Categories />
      </div>
      <Middle />
      <Delivery />
      <Map_card />
      <Black_Fri />
      <Deal_cloth />
      <Avail_discount />
      <Electronics />
      <Week_sales />
      <Women />
      <Features_brand />
      {/* <Selected_Product /> */}
      <Selected />
      <Fotter />
    </div>
  );
}
export default App;
