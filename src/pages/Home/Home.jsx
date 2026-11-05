import { Container } from '@mui/material';
import React, { useState } from 'react';
import Hero from '../../component/homeComponent/Hero';
import ProductSection from '../../component/homeComponent/ProductSection';
import Categories from '../../component/Categories';
import CategoriesSection from '../../component/homeComponent/CategoriesSection';
import { useAuthStore } from '../../store/useAuthStore';

export default function Home() {
  
const token =useAuthStore ((state)=>state.token);

  return (
    <>
    
      <Hero />
     <CategoriesSection />
      <ProductSection />
    </>
  );
}