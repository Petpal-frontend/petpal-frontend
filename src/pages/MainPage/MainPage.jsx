import React, { useEffect, useState } from 'react';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/Common/NavBar/NavBar';

export default function MainPage() {
  return (
    <div>
      <HomePage />
      <NavBar />
    </div>
  );
}
