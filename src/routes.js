import {  Login, Register, Welcome } from "./pages";

export const routes = [
   
    {
        path:'/',
        component: Login,
       
        exact: true,
    },
    {
        path:'/register',
        component: Register,
        exact: false,
    },
    {
        path:'/welcome',
        component: Welcome,
        exact: false,
    },

   
]