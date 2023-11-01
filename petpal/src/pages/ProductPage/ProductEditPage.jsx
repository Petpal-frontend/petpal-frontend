import React, { useState, useEffect } from 'react';
import ProductPost from '../../components/Product/ProductPost';
import { updateProduct } from '../../api/product';
import { uploadImg } from '../../api/imageApi';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
export default function ProductEditPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { product } = location.state;
  const [productTitle, setProductTitle] = useState(product.itemName || '');
  const [productPrice, setProductPrice] = useState(product.price || '');
  const [productDescription, setProductDescription] = useState(
    product.link || '',
  );
  const [imageFile, setImageFile] = useState(product.itemImage ?? '');
  const [previewImage, setPreviewImage] = useState(product.itemImage ?? '');
  const handleTitleChange = e => {
    setProductTitle(e.target.value);
  };

  const handlePriceChange = e => {
    setProductPrice(e.target.value);
  };

  const handleDescriptionChange = e => {
    setProductDescription(e.target.value);
  };

  const handleImageChange = e => {
    const file = e.target.files[0];
    if (file) {
      setPreviewImage(URL.createObjectURL(file));
      setImageFile(file);
    }
  };
  const handleProductUpload = async () => {
    try {
      const imgData = new FormData();
      imgData.append('image', imageFile);

      const imageUpload = await uploadImg(imgData);
      const updatedProduct = {
        itemName: productTitle,
        price: parseInt(productPrice),
        link: productDescription,
        itemImage:
          'https://api.mandarin.weniv.co.kr/' + imageUpload.data.filename,
      };
      // console.log('ewqeqd+===' + product);
      //   console.log(imageUpload.data.filename);
      const response = await updateProduct(product.id, updatedProduct);
      // console.log('Producid', product.id);
      // console.log('Product uploaded response:', response);
      // console.log('updatedProduct:', updatedProduct);
      alert('상품이 수정되었습니다.');
      navigate('/productList');
    } catch (error) {
      console.error('Error uploading product:', error);
      // TODO: 오류 처리, 사용자에게 알리기 등
    }
  };

  return (
    <>
      <ProductPost
        productTitle={productTitle}
        productPrice={productPrice}
        productDescription={productDescription}
        imageFile={previewImage}
        onTitleChange={handleTitleChange}
        onPriceChange={handlePriceChange}
        onDescriptionChange={handleDescriptionChange}
        onImageChange={handleImageChange}
        onUploadClick={handleProductUpload}
      />
    </>
  );
}
