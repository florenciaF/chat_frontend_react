import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { baseURL } from '../config'
import usersEndpoints from './users'
import chatsEndpoints from './chats'


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl:baseURL,
        credentials:"include"
    }),
    endpoints:(builder)=>({
        ...usersEndpoints(builder),
        ...chatsEndpoints(builder),
    })
})
