import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Cart from '../Cart/Cart';




const Home = () => {
    const loderData=useLoaderData()

   

    return (
        <div className=' md:mt-32 mt-80'>
            
            <div className='w-full flex flex-col  items-center'>
            <div className='w-11/12'>
                <div className="card w-full mb-28 bg-base-100 shadow-xl image-full">
                <figure><img className='w-full' src="https://www.pedmore.dudley.sch.uk/wp-content/uploads/2020/03/buzzfeed-quiz.jpg" alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">Quiz yourself on Coding!</h2>
                    <p>Are you a budding computer programmer? Take our 10-question quiz to see how much you know about the world of coding! </p>
                    <div className="card-actions justify-end">
                    <button className="btn btn-primary">Start Quiz</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>



            <div className='grid grid-cols-2 md:grid-cols-4 gap-4 p-4'>
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