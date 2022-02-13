import React from "react";
import photo from '../photo.png';

const Info = () => {
    return (
        <>
        <header>
        <img src={photo} className="photo" alt="me" />
        <h1>Angela Collings</h1>
        <h2>Software Developer</h2>
        </header>
        </>
    )
};

export default Info;