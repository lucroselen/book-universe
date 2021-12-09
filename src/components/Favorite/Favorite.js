import { useParams, useNavigate } from "react-router-dom";
import * as mainService from "../../services/mainService";
import { useEffect } from "react";

const Favorite = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    mainService.favorite(bookId);

    navigate(`/details/${bookId}`);
  });

  return null;
};

export default Favorite;
