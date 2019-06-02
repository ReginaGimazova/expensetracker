import React from "react";
import "./calendar__timeCell.css";

const TimeCell = ({children}) => (
  <td className="calendar__cell_time">
    {children}
  </td>
);

export default TimeCell;
