import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    createBrowserRouter,
    RouterProvider,
    Route,
    Navigate,
  } from "react-router-dom";
  
import { BrowserRouter } from "react-router-dom";
import {Test} from './components' 
import { CounterApp } from './01-useState.jsx/CounterApp'
import { CounterWithCustomHook } from './01-useState.jsx/CounterWithCustomHook'
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
import { SimpleForm } from './02-useEffect/SimpleForm'
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks'
import { FocusScreen } from './04-useRef/FocusScreen'
import { CallbackHook } from './06-memos/CallbackHook'
import { Padre } from './07-tarea-memo/Padre'
//import './08-useReducer/intro-reducer';
import { TodoApp } from './08-useReducer/TodoApp'
import { MainApp } from './09-useContext/MainApp'
import { LoginPage } from './09-useContext/LoginPage';
import { ErrorPage } from './09-useContext/ErrorPage';
import { HomePage } from './09-useContext/HomePage';
import { AboutPage } from './09-useContext/AboutPage';
import { router } from './09-useContext/Router';
import { UserProvider } from './09-useContext/context/UserProvider';


ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode> 
    <UserProvider>
      {/* <RouterProvider router={router} /> */}
      <TodoApp/>
    </UserProvider>
   </React.StrictMode>
)
