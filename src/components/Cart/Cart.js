import React from 'react';
import { NavLink } from 'react-router-dom';

const Cart = ({item}) => {

const {id, name , logo, total}=item

    return (
        <div className=''>
                

             <div className='border rounded pb-4'>
                
                <div className='bg-sky-200'>
                <img className='w-full' src={logo} alt="" />
                </div>

                <div className='text-start mt-2 font-medium'>
                    <p>Total Qustion: {total}</p>
                </div>

                <div className='flex justify-between mt-10'>
                <p className='font-medium text-xl text-violet-400 ml-3 '>{name}</p>
                <NavLink to={`/${id}`} className='bg-orange-500 text-xs  font-medium pt-1 pb-1 pl-2 pr-2 text-white rounded mr-2'>Start Qustion</NavLink>
                 </div>
             </div>

        </div>
    );
};

export default Cart;