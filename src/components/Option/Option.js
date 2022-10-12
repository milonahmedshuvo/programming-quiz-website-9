import React from 'react';

const Option = ({option, trueToFalse}) => {
    

    return (
        <div>
            
            <label className='bg-purple-400 p-2 text-white rounded flex items-center ' >
            <input type="radio" name="radio-2" id="css" className="radio radio-primary"  onClick={()=>trueToFalse(option)}/>

            {option}
            </label>
           

        </div>
    );
};


export default Option;


// onClick={()=>trueToFalse(option)}