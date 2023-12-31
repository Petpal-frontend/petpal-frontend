import React, { useState } from 'react';
import ProductPost from '../../components/Product/ProductPost';
import { uploadProduct } from '../../api/product';
import { uploadImg } from '../../api/imageApi';
import { useNavigate } from 'react-router-dom';

export default function ProductPostPage() {
  const navigate = useNavigate();

  const [productTitle, setProductTitle] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');
  const [imageFile, setImageFile] = useState(null);

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
      setImageFile(file);
    }
  };

  const handleProductUpload = async () => {
    try {
      const imgData = new FormData();
      imgData.append('image', imageFile);

      const imageUpload = await uploadImg(imgData);
      const product = {
        product: {
          itemName: productTitle,
          price: parseInt(productPrice),
          link: productDescription,
          itemImage:
            'https://api.mandarin.weniv.co.kr/' + imageUpload.data.filename,
        },
      };
      const response = await uploadProduct(product);
      alert('상품이 등록되었습니다.');
      navigate(-1);
    } catch (error) {
      console.error('Error uploading product:', error);
    }
  };

  return (
    <>
      <ProductPost
        productTitle={productTitle}
        productPrice={productPrice}
        productDescription={productDescription}
        imageFile={imageFile}
        onTitleChange={handleTitleChange}
        onPriceChange={handlePriceChange}
        onDescriptionChange={handleDescriptionChange}
        onImageChange={handleImageChange}
        onUploadClick={handleProductUpload}
      />
    </>
  );
}
