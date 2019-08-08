export const INPUT_SUBMIT='INPUT_SUBMIT';
export const ADD_TODO='ADD_TODO';
export const CHANGE_MODE='CHANGE_MODE';
export const DELETE_ITEM='DELETE_ITEM';

export const inputSubmit=(payload)=>({
  type:INPUT_SUBMIT,
  payload
});

export const addTodo=(payload)=>({
  type:ADD_TODO,
  payload
});

export const changeMode=(payload,id)=>({
  type:CHANGE_MODE,
  payload,
  id
});

export const deleteItem=id=>({
  type:DELETE_ITEM,
  id
});

