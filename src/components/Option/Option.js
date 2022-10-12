import React from 'react';

const Option = ({option, trueToFalse}) => {
    

    return (
        <div>
            
            <div className=' bg-purple-400 p-2 text-white rounded flex items-center'>
            <input type="radio" name="radio-2" className="radio radio-primary"  onClick={()=>trueToFalse(option)}/>
               {option}
            </div>
        </div>
    );
};

export default Option;