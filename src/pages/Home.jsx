// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchProductsRequest } from '../redux/actions/productActions';
import MainLayout from '../layouts/MainLayout';
import ProductList from '../components/common/home/ProductList';
import CategoryFilter from '../components/common/home/CategoryFilter';
import './Home.css';

const Home = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProductsRequest());
    }, [dispatch]);

    return (
        <MainLayout>
            <div className="home-container">
                <h1 className="home-title">Welcome to FlipMart</h1>
                <p className="home-subtitle">Discover amazing products at incredible prices</p>
            </div>


            <CategoryFilter />
            <ProductList />
        </MainLayout>
    );
};

export default Home;