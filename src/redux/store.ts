import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
// import { persistReducer, persistStore } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import storage from 'redux-persist/lib/storage/session';

import posts from './features/postsSlice';

const rootReducer = combineReducers({
    posts
});

// const persistConfig = {
//     key: 'root',
//     storage
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const storeConfig = {
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production'
};

const store = configureStore(storeConfig);

// export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;