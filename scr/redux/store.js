import { configureStore ,getDefaultMiddleware} from '@reduxjs/toolkit';
import BalanceSlice from './slices/BalanceSlice';
import {persistReducer,persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from '@react-native-async-storage/async-storage';
 
const persistConfig = {
  key :"root",
  storage,
  version: 1,
}
const store = configureStore({
  reducer: {
    balance : persistReducer(persistConfig,BalanceSlice)
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export default store;
export const persistor =  persistStore(store)