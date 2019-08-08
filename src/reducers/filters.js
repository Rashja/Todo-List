import { FILTER_ALL, FILTER_UN_DONE, FILTER_DONE } from './../actions/filters';

/*------------------------------------reducer--------------------------------- */
const filters= (state,action) => {
    switch(action.type){
        case FILTER_ALL:
            return {
                mode:'All'
            }
        case FILTER_UN_DONE:
            return {
                mode:'UnDone'
            }
        case FILTER_DONE:
            return{
                mode:'Done'
            }

        default:
            return state;
    }
}
export default filters;