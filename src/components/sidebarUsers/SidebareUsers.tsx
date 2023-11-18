import React, {FC} from 'react';
import style from './SidebareUsers.module.scss'
import { NavLink} from "react-router-dom";
import img from '../../images/img1.png'

export type SidebareUsersProps = {
  id: number
  email: string,
  username: string,
}

const SidebareUsers:FC<SidebareUsersProps> = ({id, email, username}) => {
  return (
    <NavLink to={`user/${id}`} style={{textDecoration: 'none'}} >
      {({isActive}) => (
        <div className={style.userCard}>
          <div className={style.img}>
            <img src={img} alt=""/>
          </div>
          <div className={`${style.description} ${isActive ? style.active : ''}`}>
            <div className={style.name}><p>{username}</p></div>
            <div className={style.email}><p>{email}</p></div>
          </div>
        </div>
      )}
    </NavLink>
  );
};

export default SidebareUsers;