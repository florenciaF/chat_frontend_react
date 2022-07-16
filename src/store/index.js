import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/auth';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { api } from '../api/query';

const store = configureStore({
    reducer:{
        auth:authReducer
    },
    middleware:(getDefaultMiddleware)=>{
        return getDefaultMiddleware().concat(api.middleware)
    }
})

setupListeners(store.dispatch)
export default store