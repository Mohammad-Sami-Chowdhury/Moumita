import React from "react";
import "./style.css";

const Welcome = (props) => {
  // const {} = props;

  return (
    <div className={`welcome-area ${props.welcome}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="welcome-content">
              <h2>It's All About You</h2>
              <p>
                “Love is not about finding the perfect person, but about seeing
                someone perfectly.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
