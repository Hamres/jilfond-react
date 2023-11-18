import React from 'react';
import style from './HomeClear.module.scss'
import {useSelector} from "react-redux";
import {selectInput} from "../../../redux/slices/inputSlice";

const HomeClear = () => {
  const {updateValue} = useSelector(selectInput)
  return (
    <div className={updateValue ? style.clearActive : style.clear}>
      <span>Выберите сотрудника, чтобы посмотреть его профиль</span>
    </div>
  );
};

export default HomeClear;