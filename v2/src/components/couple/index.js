import React from "react";
import Sectiontitle from "../section-title";
import "./style.css";

const Couple = (props) => {
  return (
    <div id="couple" className={`about-wrap ${props.couple}`}>
      <div className="couple-area section-padding">
        <Sectiontitle section={"Happy Couple"} />
        <div className="container">
          <div className="couple-wrap">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-2">
                  <div className="couple-img">
                    <img src={props.coupleimg1} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Moumita Akter Nakhluza</h3>
                      <p>
                        This is the person behind the big smiles of Evan. An
                        attractive woman with the gorgeous eyes. A person with
                        beautiful smile that kills everyone. A look of her can
                        melt the iceberg within seconds. A melting tone that
                        sounds like a bird singing a song. A person that never
                        fails to show love. And lastly this is a women that
                        every writer writes poems by thinking of her.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 couple-single">
                <div className="couple-wrap couple-wrap-3">
                  <div className="couple-img couple-img-2">
                    <img src={props.coupleimg2} alt="thumb" />
                  </div>
                  <div className="couple-text">
                    <div className="couple-content">
                      <h3>Siam Rashid Evan</h3>
                      <p>
                        This is the person who wants attention 24/7. Who knows
                        how to treat the women and give priority. This is the
                        person who loves to talk with his women. You can see his
                        women on the left side watching her again and again and
                        my eyes be like give a look for once cause she belongs
                        to you.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Couple;
