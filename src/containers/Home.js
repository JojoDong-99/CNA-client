import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div className="Home">
      <div className="lander">
        <h1><img src="./logo-home.png" alt="" height="300px"/></h1>
        <p className="text-muted">Cloud Note App</p>
        <p>Jojo's first AWS serverless web application</p>
      </div>
    </div>
  );
}