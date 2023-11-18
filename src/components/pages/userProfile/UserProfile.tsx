import React from 'react';
import style from './UserProfile.module.scss'
import {Navigate, useParams} from "react-router-dom";
import {test} from "../../../redux/slices/userSlice";
import {useAppSelector} from "../../../redux/store";
import img from '../../../images/img2.png'
import {useSelector} from "react-redux";
import {selectInput} from "../../../redux/slices/inputSlice";

const UserProfile = () => {
  const {id} = useParams()
  const userId = useAppSelector(test(Number(id)))
  const {updateValue} = useSelector(selectInput)

  console.log(userId)
  return (
    <>
      {
        userId && updateValue
          ?
          <div className={style.profileContainer}>
            <div className={style.image}>
              <img src={img} alt=""/>
            </div>
            <div className={style.description}>
              <h3 className={style.name}>{userId.name}</h3>
              <div>
                <span className={style.email}>email: </span>
                <span className={style.emailText}>{userId.email}</span>
              </div>
              <div>
                <span className={style.phone}>phone: </span>
                <span className={style.phoneText}>{userId.phone}</span>
              </div>
              <h3 className={style.about}>О себе: </h3>
              <span className={style.aboutText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
            </div>
          </div>
          :
          <Navigate to='/'/>
      }
    </>
  );
};

export default UserProfile;