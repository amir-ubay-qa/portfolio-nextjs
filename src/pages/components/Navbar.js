import Link from 'next/link'
import Image from 'next/image';
import logo from '../assets/logo.png'

const MenuItem = ({ text, link }) => {
  return (
    <li>
      <Link href={link}>{text}</Link>
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


const Navbar = () => {
  return (
    <div className="navbar bg-primary text-primary-content w-full ">
      <div className="m-auto max-w-screen-xl w-full grid grid-cols-2 justify-items-stretch">
        <div className="justify-self-start">
          <Link href="/" className="btn btn-ghost normal-case text-xl"><Image src={logo} width={40}/></Link>
        </div>
        <div className="justify-self-end">
          <ul className="menu menu-horizontal p-0">
            {/* <li tabIndex={0}>
              <a>
                Home
                <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z"/></svg>
              </a>
              <ul className="p-2 bg-base-100">
                <ChildItem text="Get Started" link="/#hero" />
                <ChildItem text="Skills" link="/#skill" />
                <ChildItem text="Experiences" link="/#experiences" />
                <ChildItem text="Portfolio" link="/#portfolio" />
              </ul>
            </li> */}
            <MenuItem text="Home" link="/" />
            <MenuItem text="Skills" link="/#skill" />
            <MenuItem text="Experiences" link="/#experiences" />
            <MenuItem text="Portfolio" link="/#portfolio" />
            {/* <MenuItem text="Contact" link="contact" /> */}
            {/* <MenuItem text="Sand Box" link="sandBox" /> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
