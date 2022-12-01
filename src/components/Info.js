import photo from "../photo.jpeg";
import "./Info.css";

const Info = () => {
  return (
    <div className="Info">
      <img src={photo} className="Photo" alt="me" />
      <h1>Angela Collings</h1>
      <h2>Software Developer</h2>
    </div>
  );
};

export default Info;
