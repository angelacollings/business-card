import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

import "./Socials.css";

const Socials = () => {
  return (
    <div className="Socials">
      <FontAwesomeIcon
        icon={faLinkedin}
        onClick={() =>
          window.open("https://www.linkedin.com/in/angelacollings/", "_blank")
        }
        className="Icon"
      />
      <FontAwesomeIcon
        icon={faEnvelope}
        onClick={() => (window.location = "mailto:angecollings@gmail.com")}
        className="Icon"
      />
      <FontAwesomeIcon
        icon={faGithub}
        onClick={() =>
          window.open("https://github.com/angelacollings", "_blank")
        }
        className="Icon"
      />
    </div>
  );
};

export default Socials;
