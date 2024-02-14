import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5555/books/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "#E6E6FA",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h1 style={{ fontSize: 38, color: "#483D8B" }}>Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            background: "white",
            alignItems: "center",
            height: "100%",
            padding: 50,
            margin: 50,
          }}
        >
          <div style={{ margin: 20 }}>
            <span style={{ fontSize: 22, color: "grey", margin: 10 }}>
              Id
            </span>
            <span>{book._id}</span>
          </div>
          <div style={{ margin: 20 }}>
            <span style={{ fontSize: 22, color: "grey", margin: 10 }}>
              Title
            </span>
            <span>{book.title}</span>
          </div>
          <div style={{ margin: 20 }}>
            <span style={{ fontSize: 22, color: "grey", margin: 10 }}>
              Author
            </span>
            <span>{book.author}</span>
          </div>
          <div style={{ margin: 20 }}>
            <span style={{ fontSize: 22, color: "grey", margin: 10 }}>
              Publish Year
            </span>
            <span>{book.publishYear}</span>
          </div>
          <div style={{ margin: 20 }}>
            <span style={{ fontSize: 22, color: "grey", margin: 10 }}>
              Create Time
            </span>
            <span>{new Date(book.createdAt).toString()}</span>
          </div>
          <div style={{ margin: 20 }}>
            <span style={{ fontSize: 22, color: "grey", margin: 10 }}>
              Last Update Time
            </span>
            <span>{new Date(book.updatedAt).toString()}</span>
          </div>
        </div>
      )}
      <BackButton />
    </div>
  );
};

export default ShowBook;
