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
import { Link } from 'react-scroll';

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
          <li>
            <Link to='home' smooth={true} duration={800}>
              Home
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={800}>
              Skill
            </Link>
          </li>
          <li>
            <Link to='About' smooth={true} duration={800}>
              About
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={800}>
              Work
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={800}>
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamgurger  */}
      <div onClick={handleClick} className='md:hidden z-10 mr-2'>
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* mobile   */}

      <ul className={!nav ? 'hidden' : ' absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={800}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='skills' smooth={true} duration={800}>
            Skill
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='About' smooth={true} duration={800}>
            About
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='work' smooth={true} duration={800}>
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='contact' smooth={true} duration={800}>
            Contact
          </Link>
        </li>
      </ul>

      {/* soical icons  */}

      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#6fc2b0]'>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=ahmedmhmouad41@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
              Email <HiOutlineMail size={30} className='ml-2' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#333333]'>
            <a href="https://github.com/ahmed-226" className='flex justify-between items-center w-full text-gray-300'>
              Github <FaGithub size={30} className='ml-2' />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[0px] duration-300 bg-[#4d92d2]'>
            <a href="https://www.linkedin.com/in/ahmed-mahmoud-5837b8253" className='flex justify-between items-center w-full text-gray-300'>
              LinkedIn <FaLinkedin size={30} className='ml-2' />
            </a>
          </li>

        </ul>
      </div>

    </div>
  )
}

export default Navbar
