import React from 'react';
import Option from '../Option/Option';
import { BeakerIcon, EyeIcon } from '@heroicons/react/24/solid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Qus = ({qus}) => {
const {correctAnswer, id, options, question }=qus


const notify = (id) =>{
    toast(`${correctAnswer}`);
}

const trueToFalse=(optValue)=>{
    console.log(optValue)

    if(optValue===correctAnswer){
       toast('carrent answer korso')
    }else{
       toast('tumi vul answer a click korso')
    }
}








    return (
        <div className=' mb-10 w-8/12 drop-shadow-lg bg-pink-50 pt-8 mt-10'>

           <div className='flex justify-around'>
               <h1 className='w-8/12 font-bold'>{question}</h1>
               <EyeIcon onClick={()=>notify(id)} className="h-6 w-6 text-blue-500"/>
               <ToastContainer></ToastContainer>
           </div>

           <div className='grid grid-cols-1 md:grid-cols-2 gap-10  p-8'>
            {
                options.map((option)=> <Option
                option={option}
                trueToFalse={trueToFalse}
                ></Option> )
            }
           </div>

        </div>
    );
};

export default Qus; 