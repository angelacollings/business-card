import photo from "../photo.jpeg";
import "./Info.css";

const Info = () => {
  return (
    <div className="Info">
      <img src={photo} className="Photo" alt="me" width="200" height="200" />
      <h1>Angela Collings</h1>
      <p>Freelance Software Developer</p>
    </div>
  );
};

export default Info;
