import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { XMarkIcon, Bars3Icon} from '@heroicons/react/24/solid';



const Header = () => {

    const [open, setOpen] = useState(true)




    return (
        <div className='bg-indigo-400 '>
         
         <div onClick={()=>setOpen(!open)} className=' w-6 text-white font-extrabold md:hidden '>
                {
                    open ? <XMarkIcon/> : <Bars3Icon/>
                }
            </div>



                <div>
                                        
                        

                        <div className={`text-2xl font-bold flex flex-col md:flex-row w-full items-center justify-end p-3  text-white bg-indigo-400  absolute duration-500	  ${open ? 'top-5' : 'top-[-245px]'} `}>
                             
                            <div className='md:mr-auto text-center' >
                                <p className='text-3xl text-white mb-3'>Programming Quiz</p>
                            </div>

                                <Link to='/' className='mr-3 hover:text-orange-400'>Home</Link>
                                <Link to='/statistics' className='mr-3  hover:text-orange-400'>Statistic</Link>
                                <Link to='/blog' className='mr-3  hover:text-orange-400'>Blog</Link>
                        </div>

                </div>
        </div>
    );
};







       
export default Header;