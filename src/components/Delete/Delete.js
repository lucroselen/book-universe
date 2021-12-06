import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as mainService from "../../services/mainService";
import { useEffect } from "react";

const Delete = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    mainService.deleteOne(bookId).then(() => {
      navigate("/all-books");
    });
  });

  return null;
};

export default Delete;
