import React from 'react';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
        <div className='flex justify-between p-5 bg-gray-200 '>
         
         <div>
            <p className='text-2xl text-amber-900	' >Website Name</p>
         </div>

        <div className='text-xl font-medium'>
            <Link to='/' className='mr-3 hover:text-orange-400'>Home</Link>
            <Link to='/statistics' className='mr-3  hover:text-orange-400'>Statistic</Link>
            <Link to='/blog' className='mr-3  hover:text-orange-400'>Blog</Link>
        </div>

        </div>
    );
};




       
export default Header;