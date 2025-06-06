import {useState} from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [Isopen, setIsopen] = useState(false);
  return (
    <>
    <div className='p-5 min-h-[4rem] shadow-md flex justify-between'>
        <div>
            <h1>Millianium</h1>
        </div>
        <ul className='hidden gap-5 md:flex'>
            <NavLink to='/' className='cursor-pointer'>Home</NavLink>
            <NavLink to='/about' className='cursor-pointer'>About</NavLink>
            <NavLink to='/services' className='cursor-pointer'>Services</NavLink>
            <NavLink to='/contact' className='cursor-pointer'>Contact Us</NavLink>
        </ul>
        <button className='md:hidden cursor-pointer' onClick={()=>setIsopen(!Isopen)}>{Isopen ? "X" :"="}</button>
    </div>
    {Isopen && (
        <div>
            <ul className='flex flex-col gap-5 p-6 '>
            <NavLink>Home</NavLink>
            <NavLink>About</NavLink>
            <NavLink>Services</NavLink>
            <NavLink>Contact Us</NavLink>
        </ul>
        </div>
    )}
    </>

  )
}

export default Navbar
