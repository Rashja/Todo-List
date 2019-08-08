import React , { useContext, useEffect } from 'react';
//-------------------------------Store
import { rootContext } from '../store/store';
import { addTodo } from '../actions/form';
import { filterDone, filterUnDone, filterAll } from '../actions/filters';
//---------------------------Components
import Form from './Form';
import Todo from './Todo';
import Button from './Button';


const TodoList = () =>{
  /*-----------------------context & Ref------------------------*/
  const context=useContext(rootContext);
  const { todos, todo }=context.state.form;
  const { mode }=context.state.filters;
  const { filtersDispatch }=context.dispatch;  
  /*--------------------------Effect--------------------------*/  
  useEffect(()=>{
  
    if(todo !== ''){
      if(todos.includes(todo) === false){
        context.dispatch.formDispatch(addTodo(todo));
      }
    }
  },[todo,todos])
  /*-----------------------Render Filters----------------------*/
  const renderFilter=(t,index)=>{
    if(mode === t.mode)
      return <Todo id={t.id} children={t.text} mode={t.mode} />
    else if(mode === 'All')
      return <Todo key={index} id={t.id} children={t.text} mode={t.mode} /> 
  };
  /*-----------------------------------------------------------*/
  return(
    <>
      <h1 className='title-todo' >Todo Lists !</h1>
      <Form />
      <div className='button-filters-container' >
        <Button 
          className='all-button-filter' 
          onClick={()=>filtersDispatch(filterAll())} 
          children='All' 
        />
        <Button 
          className='un-done-button-filter' 
          onClick={()=>filtersDispatch(filterUnDone())} 
          children='UnDone' 
        />
        <Button
          className='done-button-filter'
          onClick={()=>filtersDispatch(filterDone())}
          children='Done'
        />
      </div>
      <div className='todos-container' >
        {todos.map((t,index) =>renderFilter(t,index))}
      </div>
    </>
  )
}
export default TodoList;