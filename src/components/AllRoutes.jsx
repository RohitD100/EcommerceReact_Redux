import React from "react";
import { Routes, Route } from "react-router-dom";
import CardsDetails from './CardsDetails';
import Cards from './Cards';
import Home from './Home'
import LoginForm from './LoginForm'
const AllRoutes = () => {
    return (
        <Routes>
            <Route path="/products" element={<Cards />} />
            <Route path='/' element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path='/cart/:id' element={<CardsDetails />} />
        </Routes>
    )
}

export default AllRoutes;