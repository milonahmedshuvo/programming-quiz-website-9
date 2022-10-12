import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Qus from '../Qus/Qus';

const Qustion = () => {
    const idData=useLoaderData()

 
 const {questions}=idData.data
 



    return (
        <div className='flex flex-col items-center'>
          
           
                {
                    questions.map((qus)=><Qus
                    key={qus.id}
                    qus={qus}
                    ></Qus>)
                }
           
        </div>
    );
};

export default Qustion;