import React from "react";
import "../sass/content.scss";

import img from "../images/img1.png";

const Content = () => {
  return (
    <main>
      <div className="wrapper__main">
        <div className="wrapper__main__text">
          <h1>
            Make <br />
            remote work
          </h1>
          <p>
            Get your team in sync, no matter your location.
            <br />
            Streamline processes, create team rituals, and
            <br />
            watch productivity soar.
          </p>
          <button>Learn more</button>

          <p>some labels</p>
        </div>
        <div className="wrapper__main__image">
          <img src={img} alt="img" />
        </div>
      </div>
    </main>
  );
};

export default Content;
