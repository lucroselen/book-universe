import { createContext, useContext, useState } from "react";

export const NotificationContext = createContext();

const initialNotificationState = {
  display: "none",
  type: "",
  message: "",
};

export const NotificationProvider = ({ children }) => {
  const [notification, setNotification] = useState(initialNotificationState);

  const addNotification = (message, type) => {
    setNotification({ display: "block", message, type });

    setTimeout(() => {
      setNotification(initialNotificationState);
    }, 5000);
  };

  const hideNotification = () => setNotification(initialNotificationState);

  return (
    <NotificationContext.Provider
      value={{ notification, addNotification, hideNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
};

export const useNotificationContext = () => {
  const state = useContext(NotificationContext);

  return state;
};
