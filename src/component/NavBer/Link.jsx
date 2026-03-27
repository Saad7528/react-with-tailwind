import React from 'react';

const Link = ({route}) => {
    return (
        
        <ul className='hover:bg-amber-400'>
            <li className='mr-2.5'> <a href={route.path}>{route.name}</a></li>
        </ul>
    );
};

export default Link;