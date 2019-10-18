import React, { useState, useEffect } from "react";
import { getHealthRisks } from "./functions/fetchHealthData";

import "./Filters.css";

const Filters = props => {
  const risks = getHealthRisks();

  const [risk, setRisk] = useState(null);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleHealthRisk = event => setRisk(event.target.value);
  const handleStartDate = event => setStartDate(event.target.value);
  const handleEndDate = event => setEndDate(event.target.value);

  useEffect(() => {
    let idToShow = [...props.reports];

    // RISK
    if (risk !== null && risk !== "all")
      idToShow = idToShow.filter(
        report => report.HealthRiskId === parseInt(risk)
      );

    // Start Date
    if (startDate !== null) console.log(startDate);
    if (endDate !== null) console.log(endDate);

    // SEND TO UPDATE MAPS COMPONENTS
    props.showing(idToShow);
  }, [risk, startDate, endDate]);

  return (
    <div className="Filters">
      <div className="filter">
        <span className="label">Health risks</span>
        <div className="inputFilter">
          <select onChange={e => handleHealthRisk(e)}>
            <option key="all" value="all">
              ALL
            </option>

            {risks.map(risk => {
              return (
                <option key={risk.Id} value={risk.Id}>
                  {risk.Name}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="filter">
        <span className="label">Start date</span>
        <div className="inputFilter">
          <input
            type="date"
            name="startDate"
            onChange={e => handleStartDate(e)}
          ></input>
        </div>
      </div>

      <div className="filter">
        <span className="label">End date</span>
        <div className="inputFilter">
          <input
            type="date"
            name="endDate"
            onChange={e => handleEndDate(e)}
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Filters;