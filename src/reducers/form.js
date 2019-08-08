import uuid from 'uuidv4';
import { INPUT_SUBMIT, ADD_TODO, CHANGE_MODE, DELETE_ITEM } from './../actions/form';

const changeMode=(state,action)=>{
  let updateModeTodo=state.todos.find(todo =>
    todo.id === action.id
    );
  updateModeTodo.mode=action.payload
   return {...state};
}
/*--------------------------------------------------------------*/
const addSubmit=(state,action) => {
  return {
    ...state,
    todo:{
      text:action.payload,
      mode:'UnDone',
      id:uuid()
    }
  };
}
/*--------------------------------------------------------------*/
const deleteItem = (state,action) =>{
  return {
    ...state,
    todos:
      state.todos.filter(todo=>
        todo.id !== action.id
      ),
  }
}
/*------------------------------------reducer--------------------------------- */
const form=(state,action) => {
    switch(action.type){

      case INPUT_SUBMIT:
        return addSubmit(state,action)

      case ADD_TODO:
        return {
          ...state,
          todos:[...state.todos,action.payload]
        };

      case CHANGE_MODE:
        return changeMode(state,action);
      
      case DELETE_ITEM:
        return deleteItem(state,action)

      default:
        return state;
    }
  }
  export default form;