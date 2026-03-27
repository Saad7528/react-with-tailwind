import React, { use } from "react";
import PriceingCard from "../PricingCard/PriceingCard";
import PricingDaisy from "../pricingDaisy/PricingDaisy";

const PricingOptions = ({ pricingPromice }) => {
  const pricingData = use(pricingPromice);
  console.log(pricingData);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-5xl text-center underline font-bold text-blue-500">Get Our Plans</h1>
      <div className="grid md:grid-cols-3 grid-cols-1 gap-5">
        {/* {pricingData.map((priceData) => (
          <PriceingCard key={priceData.id} priceData={priceData}></PriceingCard>
        ))} */}

        { pricingData.map(prices => <PricingDaisy 
        key={prices.id}
        prices={prices}
        ></PricingDaisy>)}
      </div>
    </div>
  );
};

export default PricingOptions;
