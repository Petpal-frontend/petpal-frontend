import { useState } from 'react';
import { AlertContainer } from './useAlertControlStyle';
export default function useAlertControl() {
  const [alertState, setAlertState] = useState(false);

  const openAlert = () => {
    setAlertState(true);
  };

  const closeAlert = () => {
    setAlertState(false);
  };

  const AlertComponent = ({ children }) => {
    return (
      <>
        {alertState && (
          <AlertContainer onClick={closeAlert}>
            <div>{children}</div>
          </AlertContainer>
        )}
      </>
    );
  };

  return { openAlert, AlertComponent };
}
