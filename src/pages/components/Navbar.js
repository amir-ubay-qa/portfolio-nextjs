import Link from 'next/link'
import Image from 'next/image';
import logo from '../assets/logo.png'
import { useState } from 'react';

const MenuItem = ({ text, link }) => {
  return (
    <li>
      <Link className='rounded-box' href={link}>{text}</Link>
    </li>
  );
};

const ChildItem = ({ text, link }) => {
  return (
    <li>
      <a className="text-primary" href={link}>{text}</a>
    </li>
  );
};

const DropdownMenu = () => {
  return (
    <>
      <li tabIndex={0}>
        <a>
          Home
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </a>
        <ul className="p-2 bg-base-100">
          <ChildItem text="Get Started" link="/#hero" />
          <ChildItem text="Skills" link="/#skill" />
          <ChildItem text="Experiences" link="/#experiences" />
          <ChildItem text="Portfolio" link="/#portfolio" />
        </ul>
      </li>
    </>
  )
}


const Navbar = () => {

  const [open, SetOpen] = useState(false)

  const handleMenu = () => {
    SetOpen(preState => !preState)
  }

  return (
    <div className="navbar bg-primary text-primary-content w-full fixed z-50">
      <div className="m-auto max-w-screen-xl w-full grid grid-cols-2 justify-items-stretch">
        <div className="justify-self-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl"><Image src={logo} width={40} /></Link>
        </div>
        <div className="justify-self-end">
          <div className="hidden sm:block">
            <ul className="menu menu-horizontal p-0">
              <MenuItem text="Home" link="/" />
              <MenuItem text="Skills" link="/#skill" />
              <MenuItem text="Services" link="/#services" />
              <MenuItem text="Experiences" link="/#experiences" />
              <MenuItem text="Portfolio" link="/#portfolio" />
            </ul>
          </div>
          <div className="block sm:hidden drawer-side">
            <button className="btn btn-square btn-ghost" onClick={handleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
          <div className={open? ("bg-neutral-700 bg-opacity-70 h-screen w-screen absolute top-0 duration-300 left-0") : ("bg-neutral-700 bg-opacity-70 h-screen w-screen absolute top-0 -left-full duration-300")} id='overlay-menu' onClick={handleMenu}>
              <ul className="opacity-100 menu absolute top-0 left-0 w-8/12 h-screen bg-white text-gray-800 p-4">
                <MenuItem text="Home" link="/" />
                <MenuItem text="Skills" link="/#skill" />
                <MenuItem text="Services" link="/#services" />
                <MenuItem text="Experiences" link="/#experiences" />
                <MenuItem text="Portfolio" link="/#portfolio" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
