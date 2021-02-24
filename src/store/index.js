import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { MODULE_NAME as getNewProductsModule, reducer as getNewProductsReducer } from './getNewProducts/reducer'

const rootReducer = combineReducers({
  [getNewProductsModule]: getNewProductsReducer
});
export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export default store;
