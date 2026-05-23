import React from "react";
import  Charti from "../Charti/Charti";
import  Chartii from "../Chartii/Chartii";

function Chart({ chartId }) {
  switch (chartId) {
    case 1:
      return <Charti />;

    case 2:
      return <Chartii />;

    default:
      return <div>.</div>;
  }
}

export default Chart;