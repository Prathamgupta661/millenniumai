import {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [Isopen, setIsopen] = useState(false);
  return (
    <>
    <nav className='p-5 min-h-[4rem] shadow-md flex justify-between bg-gradient-to-r from-cyan-500 to-pink-500'>
        <div>
            <h1 className='cursor-pointer text-xl'>Millianium</h1>
        </div>
        <ul className='hidden gap-5 md:flex'>
            <NavLink to='/' className='cursor-pointer hover:text-gray-500 text-lg'>Home</NavLink>
            <NavLink to='/about' className='cursor-pointer hover:text-gray-500 text-lg'>About</NavLink>
            <NavLink to='/services' className='cursor-pointer hover:text-gray-500 text-lg'>Services</NavLink>
            <NavLink to='/contact' className='cursor-pointer hover:text-gray-500 text-lg'>Contact Us</NavLink>
        </ul>
        <button className='md:hidden cursor-pointer ' onClick={()=>setIsopen(!Isopen)}>{Isopen ? "X" :"="}</button>
    </nav>
    {Isopen && (
        <nav className='absolute bg-white w-full'>
            <ul className='flex flex-col gap-5 p-6 '>
            <NavLink to='/' classname='bg-gray-500'>Home</NavLink>
            <NavLink to='/about' classname='bg-gray-500'>About</NavLink>
            <NavLink to='/services' classname='bg-gray-500'>Services</NavLink>
            <NavLink to='/contact' classname='bg-gray-500'>Contact Us</NavLink>
        </ul>
        </nav>
    )}
    </>

  )
}

export default Navbar
