import React, {FC, useEffect} from 'react';
import style from './Home.module.scss'
import Input from "../input/Input";
import {useSelector} from "react-redux";
import {fetchUser, selectUser} from '../../redux/slices/userSlice'
import IsLoading from "../loading/IsLoading";
import SidebareUsers from "../sidebarUsers/SidebareUsers";
import {useAppDispatch} from "../../redux/store";
import {selectInput} from "../../redux/slices/inputSlice";

const Home:FC = () => {
  const {updateValue} = useSelector(selectInput)
  const dispatch = useAppDispatch()

  const {users, status} = useSelector(selectUser)
  const getUsers = async () => {
    const search = updateValue
    dispatch(
      fetchUser({
        search
    }))
  }


  useEffect(() => {
    if(updateValue) {
      getUsers()
    }
  }, [updateValue])

  const text = (
    <span className={style.text}>
      {status === 'wait' && "начните поиск"}
      {status === 'loading' && <IsLoading/>}
      {status === 'success' && !updateValue && "начните поиск"}
      {status === 'success' && !users.length && updateValue && "ничего не найдено"}
      {status === 'error' && "ошибка запроса"}
    </span>
  );

  const card = updateValue ? users.map((obj: any) => <SidebareUsers {...obj} key={obj.id}/>) : <span>начните поиск</span>

  return (
      <div className={style.layout}>
        <div className={style.sidebar}>
          <span>Поиск сотрудников</span>
          <div className={style.sidebareInput}><Input/></div>
          <span>Результаты</span>
            <div className={style.sidebarResult}>
              {
                status === 'success' && users.length ? card : text
              }
            </div>
        </div>
      </div>
  );
};

export default Home;

