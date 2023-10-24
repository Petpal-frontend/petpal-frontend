import React, { useState } from 'react';
import SignupInput from '../Common/Input/SignupInput';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = 'https://api.mandarin.weniv.co.kr/user';

const SignUpForm = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [accountname, setAccountname] = useState('');
  const [image, setImage] = useState(
    'https://api.mandarin.weniv.co.kr/Ellipse.png',
  );
  const [info, setInfo] = useState('');

  const Signup = () => {
    axios
      .post(apiUrl, {
        username: username,
        email: email,
        password: password,
        accountname: accountname,
        image: image,
        info: info,
      })
      .then(response => {
        console.log(response);
        alert('회원가입성공');
        if (response.status === 200) {
          return navigate('/login');
        }
      })
      .catch(err => {
        console.log(err);
      });
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
      <div className="signup_input">
        <label>accountname</label>
        <br />
        <input
          type="accountname"
          placeholder="accountname"
          onChange={e => {
            setAccountname(e.target.value);
          }}
        />
      </div>
      <div className="signup_input">
        <label>info</label>
        <br />
        <input
          type="info"
          placeholder="info"
          onChange={e => {
            setInfo(e.target.value);
          }}
        />
      </div>
      <button onClick={Signup}>singup</button>
    </div>
  );
};

export default SignUpForm;
