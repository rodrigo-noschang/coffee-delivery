import { Routes, Route } from 'react-router-dom';

import { Home } from './Home';
import { Order } from './Order';

import { DefaultLayout } from '../layouts/DefaultLayout';

export function Router() {
    return (
        <Routes>
            <Route element={<DefaultLayout />}>
                <Route path='/' element={<Home />} />
                <Route path='/order' element={<Order />} />
            </Route>
        </Routes>
    )
}