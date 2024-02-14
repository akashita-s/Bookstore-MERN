import { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5555/books")
      .then((response) => {
        setBooks(response.data.data);
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
        alignItems: "center",
        padding: 4,
        background: "#E6E6FA",
        height: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: 38, color: "#483D8B" }}>Books List</h1>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table style={{ width: "100%" }}>
          <thead style={{ alignItems: "center" }}>
            <tr>
              <th style={{ border: "double", fontSize: 32, color: "#6A5ACD" }}>
                No
              </th>
              <th style={{ border: "double", fontSize: 32, color: "#6A5ACD" }}>
                Title
              </th>
              <th style={{ border: "double", fontSize: 32, color: "#6A5ACD" }}>
                Author
              </th>
              <th style={{ border: "double", fontSize: 32, color: "#6A5ACD" }}>
                Publish Year
              </th>
              <th style={{ border: "double", fontSize: 32, color: "#6A5ACD" }}>
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td
                  style={{
                    color: "grey",
                    borderStyle: "double",
                    padding: "15px",
                  }}
                >
                  {index + 1}
                </td>
                <td
                  style={{
                    fontSize: 28,
                    color: "grey",
                    borderStyle: "double",
                    padding: "15px",
                  }}
                >
                  {book.title}
                </td>
                <td
                  style={{
                    color: "grey",
                    borderStyle: "double",
                    padding: "15px",
                  }}
                >
                  {book.author}
                </td>
                <td
                  style={{
                    color: "grey",
                    borderStyle: "double",
                    padding: "15px",
                  }}
                >
                  {book.publishYear}
                </td>
                <td
                  style={{
                    color: "grey",
                    borderStyle: "double",
                    padding: "15px",
                  }}
                >
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Link to={`/books/details/${book._id}`}>
                      <BsInfoCircle style={{ fontSize: 30, margin: 5 }} />
                    </Link>
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit style={{ fontSize: 30, margin: 5 }} />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <MdOutlineDelete style={{ fontSize: 30, margin: 5 }} />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <Link to="/books/create">
        <MdOutlineAddBox style={{ fontSize: 70, margin: 30 }} />
      </Link>
    </div>
  );
};

export default Home;
