import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as mainService from "../../services/mainService";
import { useEffect } from "react";
import { useNotificationContext } from "../../contexts/NotificationContext";

const Delete = () => {
  const { addNotification } = useNotificationContext();

  const { bookId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    mainService
      .deleteOne(bookId)
      .then(() =>
        addNotification("Book deleted successfully!", "alert-success")
      )
      .then(() => navigate("/all-books"))
      .catch((error) => {
        addNotification(error.error, "alert-danger");
        navigate(`/details/${bookId}`);
      });
  });

  return null;
};

export default Delete;
