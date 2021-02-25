import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {
  persistStore,
  persistReducer
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {reducer as authReducer} from './auth/reducer';
import { reducer as productsReducer } from './products/reducer';
import { MODULE_NAME as getNewProductsModule, reducer as getNewProductsReducer } from './getNewProducts/reducer'

const persistConfig = {
  key: 'authLS',
  storage,
}

const persistedAuthReducer = persistReducer(persistConfig, authReducer)

const rootReducer = combineReducers({
  auth: persistedAuthReducer,
  products: productsReducer,
  [getNewProductsModule]: getNewProductsReducer
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
export const persistor = persistStore(store);

export default store;
