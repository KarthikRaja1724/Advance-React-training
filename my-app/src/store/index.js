import { createStore, combineReducers , applyMiddleware } from 'redux';
import bugsReducer from '../reducers/bugsReducer';
import projectsReducer from '../reducers/projectsReducer';
import logger from 'redux-logger';
//const store = createStore(bugsReducer);
//const store = createStore(projectsReducer);

const rootReducer = combineReducers({
    bugState : bugsReducer,
    projectState : projectsReducer
})

function loggerMiddleware(store){
return function (next){
    return function (action){
     console.log(action.type);
     return next(action);   
    }
}
}
function stateMiddleware(store){
    return function(next){
        return function(action){
            if(typeof action === 'function'){
                const actionObj = store.getState();
                return next(actionObj);
            }
            return next(action);
        }
    }
}
const store = createStore(rootReducer,applyMiddleware(logger,stateMiddleware));

export default store;
