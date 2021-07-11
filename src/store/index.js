import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit'
import counterReducer from './reducer/counterSlice'
import {combineReducers} from 'redux';
import { FLUSH,PAUSE,PERSIST,persistReducer,persistStore,PURGE,REGISTER,REHYDRATE} from 'redux-persist';
import storage from 'redux-persist/lib/storage'


const rootReducer = combineReducers({
    counter: counterReducer,
  
});

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),

})

export const persistor = persistStore(store);
export default store;
