import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';




const Home = () => {
    const loderData=useLoaderData()

   

    return (
        <div>
            <h1>Main home components {loderData.data.length}</h1>


            <div className='grid grid-cols-4 gap-4 p-4'>
            {
                loderData.data.map((item)=><Cart
                key={item.id}
                item={item}
                ></Cart> )
            }          
            </div>      
        </div>
    );
};


export default Home;          