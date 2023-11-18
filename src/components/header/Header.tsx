import React from 'react';
import style from "./Header.module.scss";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <div className='container'>
      <div className={style.header}>
        <Link to='/' style={{textDecoration: 'none'}}>
          <h1>Жилфонд</h1>
        </Link>
        <span>Пользователь</span>
      </div>
    </div>
  );
};

export default Header;