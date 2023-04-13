import { Routes, Route } from 'react-router-dom';
import Login from '../pages/Login';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import Eyes from '../pages/Eyes';
import Lips from '../pages/Lips';
import Skin from '../pages/Skin';
import Account from '../pages/Account';
import Eyebrows from '../pages/Eyebrows';
import Landing from '../pages/Landing';
import Cart from '../pages/Cart';

export const AppRoutes = (props) => {

    return (

        <Routes>

            <Route path='/home' element={<Home {...props} />} />
            <Route path='/account' element={<Account {...props} />} />
            <Route path='/login' element={<Login {...props} />} />
            <Route path='/signup' element={<Signup {...props} />} />
            <Route path='/eyes' element={<Eyes {...props} />} />
            <Route path='/lips' element={<Lips {...props} />} />
            <Route path='/skin' element={<Skin {...props} />} />
            <Route path='/eyebrows' element={<Eyebrows {...props} />} />
            <Route path='/cart' element={<Cart {...props} />} />
            <Route path='*' element={<Landing {...props} />} />

        </Routes>
    )
}