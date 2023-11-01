import { ButtonStyle, AlertStyle } from './AlertStyle';

export default function Alert({ alertMsg, choice, handleFunc }) {
  return (
    <div>
      <AlertStyle>
        <p>{alertMsg}</p>
        <ButtonStyle>
          <button className="cancle" onClick={handleFunc}>
            {choice[0]}
          </button>
          {choice[1] && (
            <button className="delete" onClick={handleFunc}>
              {choice[1]}
            </button>
          )}
        </ButtonStyle>
      </AlertStyle>
    </div>
  );
}
