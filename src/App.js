import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import { Login } from './components/auth/Login';
import { SignUp } from './components/auth/SignUp';
import { Chats } from './components/chat/Chats';
import { Navbar } from './components/layouts/Navbar';
import { Home } from './components/pages/Home';
import { Users } from './components/users/Users';
import { validate } from './features/auth/extraReducers';


function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
      dispatch(validate())
  },[])

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>

         {/*<Route path='/users' element={<Users/>}/>
        <Route path='/chats' element={<Chats/>}/>
        <Route path='/chats/:id' element={<Chats/>}/>
        <Route path='/users' element={<Users/>}/> */}

      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
