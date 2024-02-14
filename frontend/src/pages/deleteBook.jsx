import React, { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useSnackbar } from "notistack";

const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { enqueueSnackbar } = useSnackbar();

  const handleDeleteBook = () => {
    setLoading(true);
    axios
      .delete(`http://localhost:5555/books/${id}`)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Deleted successfully", { variant: "success" });
        navigate("/");
      })
      .catch((error) => {
        setLoading(false);
        // alert('An error happened. Please Chack console');
        enqueueSnackbar("Error", { variant: "error" });
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "#E6E6FA",
        alignItems: "center",
      }}
    >
      <h1 style={{ fontSize: 38, color: "#483D8B" }}>Delete Book</h1>
      {loading ? <Spinner /> : ""}
      <div>
        <h3>Are You Sure You want to delete this book?</h3>

        <button
          style={{
            border: "double",
            background: "	#CD5C5C",
            padding: 10,
            margin: 120,
          }}
          onClick={handleDeleteBook}
        >
          Yes, Delete it
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default DeleteBook;
