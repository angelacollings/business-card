import React from "react";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="Socials">
      <button
        className="Button"
        onClick={() =>
          window.open("https://www.linkedin.com/in/angelacollings/", "_blank")
        }
        class="fa fa-linkedin"
      ></button>
      <button
        className="Button"
        onClick={() => (window.location = "mailto:angecollings@gmail.com")}
        class="fa fa-envelope"
      ></button>
      <button
        className="Button"
        onClick={() =>
          window.open("https://github.com/angelacollings", "_blank")
        }
        class="fa fa-github"
      ></button>
    </div>
  );
};

export default Socials;
