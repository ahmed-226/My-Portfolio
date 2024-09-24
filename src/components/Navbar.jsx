import React, { useState } from 'react'
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/Logo.png'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300  '>
      <div>
        <img src={Logo} alt="logo" className=' w-[100px]' />
      </div>
      <div className='hidden md:flex'>
        <ul className='hidden md:flex'>
          <li>Home</li>
          <li>Skill</li>
          <li>About</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>

      {/* Hamgurger  */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mobile   */}

      <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>Skill</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Work</li>
        <li className='py-6 text-4xl'>Contact</li>
      </ul>

      {/* soical icons  */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]  '>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail  size={30} className='ml-2' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#565f69]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Facebook  <BsFillPersonLinesFill size={30} className='ml-2'/>
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300  bg-[#333333]'>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              Github <FaGithub size={30} className='ml-2' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#4d92d2] '>
            <a href="/" className='flex justify-between items-center w-full text-gray-300'>
              LinkedIN <FaLinkedin size={30}  className='ml-2'/>
            </a>
          </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
