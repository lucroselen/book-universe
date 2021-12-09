import { useParams, useNavigate } from "react-router-dom";
import * as mainService from "../../services/mainService";
import { useEffect } from "react";

const Vote = (params) => {
  const { bookId } = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (params.mode === "up") {
      mainService.voteUp(bookId);
    } else if (params.mode === "down") {
      mainService.voteDown(bookId);
    }
    setTimeout(() => {
      navigate(`/details/${bookId}`);
    }, 100);
  });

  return null;
};

export default Vote;
