import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const PriceFeature = ({feature}) => {
    return (
        
            <p className='flex gap-2 mt-2'> <CircleCheckBig></CircleCheckBig>{feature}</p>
        
    );
};

export default PriceFeature;