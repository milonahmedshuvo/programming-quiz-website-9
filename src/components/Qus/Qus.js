import React from 'react';
import Option from '../Option/Option';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Qus = ({qus,name}) => {
const {correctAnswer, id, options, question }=qus


const notify = (id) =>{
    toast(`${correctAnswer}`);
}

const trueToFalse=(optValue)=>{
   

    if(optValue===correctAnswer){
       toast('Your answer is correct')
    }else{
       toast('Your answer is wrong')
    }
}








    return (
        <div className=' mb-10 w-8/12 drop-shadow-lg bg-pink-50 pt-8 mt-60'>

              <h1 className='text-2xl font-bold mb-10 text-blue-800'>Quiz of {name}</h1>

           <div className='flex justify-around'>
               <h1 className='w-8/12 font-bold'>{question}</h1>
               <EyeIcon onClick={()=>notify(id)} className="h-6 w-6 text-blue-500"/>
               <ToastContainer></ToastContainer>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-10  p-8'>
            {
                options.map((option, index)=> <Option
                option={option}
                key={index}
                trueToFalse={trueToFalse}
                ></Option> )
            }
           </div>

        </div>
    );
};

export default Qus; 


