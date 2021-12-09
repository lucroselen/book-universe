import { useParams, useNavigate } from "react-router-dom";
import * as mainService from "../../services/mainService";
import { useEffect } from "react";

const Favorite = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    mainService.favorite(bookId);
    setTimeout(() => {
      navigate(`/details/${bookId}`);
    }, 100);
  });

  return null;
};

export default Favorite;
