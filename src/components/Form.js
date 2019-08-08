import React, { useContext,useRef } from 'react';
import { rootContext } from './../store/store';
import {  inputSubmit } from './../actions/form';

const Form = () => {
  /*-----------------------context & Ref------------------------*/
  const context=useContext(rootContext);
  const inputRef=useRef(); 
  /*-------------------------On Submit-------------------------*/
  const handleSubmit = e => {
    e.preventDefault();
    if(inputRef.current.value !== ''){
      context.dispatch.formDispatch(inputSubmit(inputRef.current.value));
      inputRef.current.value=''
    }else{
      return null;
    }
  };
  /*----------------------------------------------------------*/
  return(
    <div className='form-container' >
      <form onSubmit={handleSubmit} >
        <input className='input-form' ref={inputRef} />
        <button className='button-form' children='Add Todo' />
      </form>
    </div>
  )
}
export default Form;