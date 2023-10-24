import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../../api/signUpApi';
import { uploadImg } from '../../api/imageApi';
import AddressSearch from '../AddressSearch/AddressSearch';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image, setImage] = useState(
    'https://api.mandarin.weniv.co.kr/Ellipse.png',
  );
  const [previewImage, setPreviewImage] = useState(null);

  const [intro, setIntro] = useState('');
  const [latestValue, setLatestValue] = useState(1);

  //받아온 주소값 짤라서 intro에 넣어줌
  const handleAddressSelect = address => {
    setIntro(address.split(' ')[0]);
  };

  //accountname에 petpal_ + 현재시각(절대 안겹치게 했어요) 부여해주는 로직
  useEffect(() => {
    const generateUniqueAccountname = () => {
      const currentTime = new Date();
      const timestamp = `${currentTime.getFullYear()}${(
        currentTime.getMonth() + 1
      )
        .toString()
        .padStart(2, '0')}${currentTime
        .getDate()
        .toString()
        .padStart(2, '0')}${currentTime
        .getHours()
        .toString()
        .padStart(2, '0')}${currentTime
        .getMinutes()
        .toString()
        .padStart(2, '0')}${currentTime
        .getSeconds()
        .toString()
        .padStart(2, '0')}`;
      const uniqueAccountname = `petpal_${timestamp}`;
      return uniqueAccountname;
    };

    // 회원가입 폼이 마운트될 때 자동으로 accountname 생성
    const generatedAccountname = generateUniqueAccountname();
    setAccountname(generatedAccountname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // 빈 배열을 전달하여 마운트될 때 한 번만 실행되도록 함

  const Signup = async () => {
    try {
      const userData = {
        user: {
          username,
          email,
          password,
          accountname,
          image,
          intro,
        },
      };

      const response = await postSignUp(userData);

      console.log(response.data);
      alert('회원가입성공');

      if (response.status === 200) {
        return navigate(`/login`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="signup">
      <div className="signup_input">
        <label>name</label>
        <br />
        <input
          type="text"
          placeholder="username"
          onChange={e => {
            setUsername(e.target.value);
          }}
        />
      </div>
      <div className="signup_input">
        <label>Email</label>
        <br />
        <input
          type="text"
          placeholder="email"
          onChange={e => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="signup_input">
        <label>password</label>
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={e => {
            setPassword(e.target.value);
          }}
        />
      </div>
      <AddressSearch onAddressSelect={handleAddressSelect} />
      <button onClick={Signup}>signup</button>
    </div>
  );
};

export default SignUpForm;
