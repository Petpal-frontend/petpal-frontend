import { ModalStyle } from './ModalStyle';

export function Modal({ contents, handleFunc }) {
  return (
    <ModalStyle>
      <div className="bar"></div>
      <ul>
        {contents.map((item, index) => {
          return (
            <li key={index}>
              <button className="settingComponent" onClick={handleFunc}>
                {item}
              </button>
            </li>
          );
        })}
      </ul>
    </ModalStyle>
  );
}
