import React from 'react';
import logo from '../assets/logo.png';
import profilIcon from '../assets/profil-icon.svg';
import Logout from '../components/Log/logout';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div class="shadow bg-white rounded-lg max-w-2xl md:mx-auto py-3" >
      <ul class="flex items-center justify-between gap-5">
        <li class="ml-6 rounded-full hover:bg-red-200  transition-colors" href="">
            <NavLink to ='/profil' exact><img class="relative w-14" src={profilIcon} alt="profil-icon" /></NavLink>
        </li>
        <li>
            <NavLink to ='/'exact><img class="relative w-56" src={logo} alt="groupomanie-logo" /></NavLink>
        </li>
        <li class="mr-6 p-2 rounded-full hover:bg-red-200 transition-colors" href=""><Logout /></li>
      </ul>
</div>
  );
};



export default Navbar;