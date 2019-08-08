import React, { useRef, useContext } from 'react';
import { rootContext } from '../store/store';
import { changeMode, deleteItem } from './../actions/form';
import Button from './Button';


const Todo=(props)=>{
  /*-----------------------context & Ref------------------------*/
 const checkBoxRef=useRef();
 const context=useContext(rootContext);
 const { formDispatch }=context.dispatch;
  /*------------------------Handle Check-----------------------*/
 const handleCheck = () => {
  let checkBox;
  let id=checkBoxRef.current.id;

  if(checkBoxRef.current.checked === true)
   checkBox='Done'
  else if(checkBoxRef.current.checked === false)
   checkBox='UnDone'

  formDispatch(changeMode(checkBox,id))
 };
  /*-------------------------Delete Item------------------------*/
 const handleDeleteItem = () => {
  let id=checkBoxRef.current.id;

  formDispatch(deleteItem(id))
 }
  /*------------------------------------------------------------*/
  return(
    <div className={['todo-container',props.mode === 'Done' ? 'done-color' : 'un-done-color'].join(' ')} >
      <label className='todo-label' for="check">{props.children}</label>
      <div className='actions-container' >
        <input
          className='input-checkbox'
          ref={checkBoxRef}
          id={props.id}
          checked={props.mode === 'Done' ? true : false}
          type="checkbox"
          onClick={handleCheck}
        />
        <Button className='delete-button-todo' onClick={handleDeleteItem} children='X' />
      </div>
    </div>
  )
}
export default Todo;