import {NEW_USER} from './actions';

function users(state = [], action) {
    switch (action.type) {
    case NEW_USER:
        return [{
            id: action.id,
            name: action.name,
        }
        , ...state];
    default:
      return state;
    }
}

export default users();