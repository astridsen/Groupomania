import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';
import logoutIcon from '../../assets/logout.svg';

const Logout = () => {
    const removeCookie = (key) => {
        if (window !== "undefined") {
          cookie.remove(key, { expires: 1 });
        }
      };
    
      const logout = async () => {
        await axios({
          method: "get",
          url: `http://localhost:3000/api/auth/logout`,
          withCredentials: true,
        })
          .then(() => removeCookie("jwt"))
          .catch((err) => console.log(err));
        
        window.location = "/auth";
      };
    
    return (
    <li onClick={logout}>
      <img class="w-8" src={logoutIcon} alt="logout" />
    </li>
    )
}

export default Logout;
