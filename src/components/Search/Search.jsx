import React from 'react';
import { Link } from 'react-router-dom';
import { MainWrap, ProductLi } from './SearchStyle';

export default function Search({ users, inputValue }) {
  // console.log(users);

  return (
    <MainWrap>
      <ul>
        {inputValue ? (
          users.map((el, i) => {
            // console.log('users== ' + users[i].accountname);
            const splitedWord = el.username.split(inputValue);
            return (
              <ProductLi key={i}>
                <Link to={`/yourProfile/${users[i].accountname}`}>
                  <span className="profileImg">
                    <img src={el.image} alt="프로필 이미지" />
                  </span>
                  <span className="text">
                    <strong>
                      <>
                        {splitedWord.map((el, i) => {
                          return i === 0 ? (
                            el
                          ) : (
                            <React.Fragment key={i}>
                              <span style={{ color: '#B3BEDC' }}>
                                {inputValue}
                              </span>
                              {el}
                            </React.Fragment>
                          );
                        })}
                      </>
                    </strong>
                  </span>
                </Link>
              </ProductLi>
            );
          })
        ) : (
          <></>
        )}
      </ul>
    </MainWrap>
  );
}
