import React from 'react';

const Socials = () => {
    return (
        <div className="Socials">
            <button 
                onClick={() => window.open(
                    "https://www.linkedin.com/in/angelacollings/", "_blank")} 
                class="fa fa-linkedin">
            </button>
            <button 
                onClick={() => window.open(
                    "https://github.com/angelacollings", "_blank")}
                class="fa fa-github">
            </button>
            <button 
                onClick={() => window.open(
                    "https://twitter.com/angecollings", "_blank")} 
                class="fa fa-twitter">
            </button>
        </div>
    )
};

export default Socials;