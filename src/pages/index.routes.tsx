import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Cart } from './Cart';

import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/cart' element={<Cart />} />
            </Route>
        </Routes>
    )
}