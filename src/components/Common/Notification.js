import "./Notification.css";
import { useNotificationContext } from "../../contexts/NotificationContext";

const Notification = () => {
  const { notification, hideNotification } = useNotificationContext();
  return (
    <div
      className={"alert adjust " + notification.type}
      role="alert"
      style={{ display: notification.display }}
      onClick={hideNotification}
    >
      {notification.message}
    </div>
  );
};

export default Notification;
