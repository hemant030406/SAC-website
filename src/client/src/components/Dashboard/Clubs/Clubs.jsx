import React from "react";
import LayoutLeft from "../Layout/LayoutLeft/LayoutLeft";
import LayoutRight from "../Layout/LayoutRight/LayoutRight";
import MyClubs from "./components/MyClubs";
import "./styles.css";

const Clubs = () => {
  return (
    <div className="d-flex flex-row">
      <div style={{ width: "20rem" }}>
        <LayoutLeft ele="clubs" />
      </div>
      <div
        className=""
        style={{ width: "40rem", margin: "10rem 4rem", textAlign: "justify" }}
      >
        <div id="Clubs" className="clubs">
          <h3>My Clubs</h3>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <MyClubs />
              <MyClubs />
              <MyClubs />
            </div>
            <div className="d-flex flex-row">
              <MyClubs />
              <MyClubs />
              <MyClubs />
            </div>
          </div>
        </div>

        <div id="Clubs" className="clubs">
          {/* button at start and other at end side */}
          <div className="d-flex justify-content-between">
            <h3>Explore Clubs</h3>
            <button className="btn btn-primary">Explore More</button>
          </div>
          <div className="d-flex flex-column">
            <div className="d-flex flex-row">
              <MyClubs />
              <MyClubs />
              <MyClubs />
            </div>
            <div className="d-flex flex-row">
              <MyClubs />
              <MyClubs />
              <MyClubs />
            </div>
          </div>
        </div>
      </div>
      <div style={{ width: "20rem" }}>
        <LayoutRight />
      </div>
    </div>
  );
};

export default Clubs;
