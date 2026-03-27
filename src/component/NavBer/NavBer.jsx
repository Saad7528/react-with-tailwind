import { Menu, X } from 'lucide-react';
import React, { useState } from 'react';
import Link from './Link';

const navigationData = [
  {
    id: 1,
    name: "Home",
    email: "home@example.com",
    mobile: "01711000001",
    path: "/"
  },
  {
    id: 2,
    name: "About",
    email: "about@example.com",
    mobile: "01711000002",
    path: "/about"
  },
  {
    id: 3,
    name: "Services",
    email: "services@example.com",
    mobile: "01711000003",
    path: "/services"
  },
  {
    id: 4,
    name: "Portfolio",
    email: "portfolio@example.com",
    mobile: "01711000004",
    path: "/portfolio"
  },
  {
    id: 5,
    name: "Contact",
    email: "contact@example.com",
    mobile: "01711000005",
    path: "/contact"
  }
];

const links = navigationData.map(route => <Link key={route.id} route={route}></Link>);

const NavBer = () => {

  const [open, setOpen] = useState(false)
    return (
        <nav className='flex justify-between mx-5 mt-4'>
          <span className='flex gap-2' onClick={() => setOpen(!open)}>
            {
              open ? 
                <X className='md:hidden'></X> 
              : <Menu className='md:hidden'></Menu>
            }
            
            <ul className={`md:hidden bg-amber-100 text-black p-2 absolute duration-1000
              ${
                open? 'top-7' : '-top-40'
              }`}>
              {
                links
              }
            </ul>
          
          <h2>My Site</h2>
          </span>
          
          <ul className=' hidden md:flex' >
            {
              links
            }
          </ul>
          <button className='btn'>Sine In</button>
            
        </nav>
    );
};

export default NavBer;