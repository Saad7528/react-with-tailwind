import React from 'react';
import PriceFeature from './PriceFeature';

const PriceingCard = ({priceData}) => {
    const {plan, price, features, button_text} = priceData;
    console.log(priceData);
    return (
        <div className='bg-amber-600 border-2 rounded-3xl p-5 flex flex-col'>

            <div>
                <h2 className='text-4xl'>{plan}</h2>
                <h2 className='text-2xl'>{price}</h2>
            </div>
            <div className='bg-amber-500 p-2 rounded-2xl mt-3 flex-1'>
                {
                    features.map(feature => <PriceFeature feature={feature}></PriceFeature>)
                }
            </div>
            <button className='btn w-full mt-4'>{button_text}</button>
            
        </div>
    );
};

export default PriceingCard;