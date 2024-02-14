import { useState } from "react";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishYear, setPublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();

  const handleSaveBook = () => {
    const data = {
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5555/books", data)
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Created successfully", { variant: "success" });
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
      <h1 style={{ fontSize: 38, color: "#483D8B" }}>Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div
        style={{
          background: "white",
        }}
      >
        <div style={{ margin: 20 }}>
          <label style={{ fontSize: 24 }}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            style={{
              border: "double",
              borderColor: "grey",
              padding: 10,
              margin: 15,
            }}
          />
        </div>
        <div style={{ margin: 20 }}>
          <label style={{ fontSize: 24 }}>Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            style={{
              border: "double",
              borderColor: "grey",
              padding: 10,
              margin: 15,
            }}
          />
        </div>
        <div style={{ margin: 20 }}>
          <label style={{ fontSize: 24 }}>Publish Year</label>
          <input
            type="number"
            value={publishYear}
            onChange={(e) => setPublishYear(e.target.value)}
            style={{
              border: "double",
              borderColor: "grey",
              padding: 10,
              margin: 15,
            }}
          />
        </div>
        <button
          style={{
            border: "double",
            background: "#3CB371",
            padding: 10,
            margin: 80,
            fontSize: 18,
          }}
          onClick={handleSaveBook}
        >
          Save
        </button>
      </div>
      <BackButton />
    </div>
  );
};

export default CreateBooks;
