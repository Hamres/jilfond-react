import React, {ChangeEvent, FC, useCallback, useState} from 'react';
import debounce from "lodash.debounce";
import './Input.module.scss'
import {setUpdateValue} from "../../redux/slices/inputSlice";
import {useAppDispatch} from "../../redux/store";

const Input: FC = () => {
  const dispatch = useAppDispatch()
  const [value, setValue] = useState('')

  const updateSearchValue = useCallback(
    debounce((str: string) => {
      dispatch(setUpdateValue(str))
    }, 500),
    []
  )


  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }

  return (
    <input
      type="text"
      placeholder='Введите id или имя'
      value={value}
      onChange={onChangeInput}
    />
  );
};

export default Input;