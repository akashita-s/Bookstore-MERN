import { Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

const BackButton = ({ destination = "/" }) => {
  return (
    <div >
      <Link
        to={destination}
        style={{
          background: "pink",
          padding: 20,
          borderColor: "black",
          borderWidth: 15,
          border: "double",
        }}
      >
        <BsArrowLeft/>
      </Link>
    </div>
  );
};

export default BackButton;
