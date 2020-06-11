import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

import { todoReducer } from '../modules/todo';
import { todoGroupReducer } from '../modules/todoGroup';

export const rootReducer = combineReducers({
    todos: todoReducer,
    todoGroups: todoGroupReducer,
});

function configureStore() {
    return createStore(
        rootReducer,
        composeWithDevTools(applyMiddleware(thunkMiddleware))
    );
}

const store = configureStore();

export type RootState = ReturnType<typeof rootReducer>;

export default store;
