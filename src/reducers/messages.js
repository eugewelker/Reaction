import {NEW_MESSAGE} from '../actions/types';

const DEFAULT_MESSAGES = {items: [] };

const messageReducer = (state= DEFAULT_MESSAGES,action) =>{
    switch(action.type){
        case NEW_MESSAGE:
            return {...state, items: [...state.items,action.items]   };
    default:
        return state;
    }
}

export default messagesReducer;

