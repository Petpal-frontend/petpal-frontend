import React from 'react';
import ProductList from '../../components/Product/ProductList';
import Header from '../../components/Common/Header/Header';

export default function ProductListPage() {
  return (
    <>
      <Header type='list' title='쇼핑하기' />
      <ProductList />
    </>
  );
}
