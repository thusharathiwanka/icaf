import React from "react";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";
const WorkshopApproval = () => {
  const [pendingWorkshops, setPendingWorkshops] = useState(null);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/approved`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPendingWorkshops(data);
      });
  }, []);
  return (
    <div>
      <h3>Approved Workshop</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Researcher Name</th>
          </tr>
          {pendingWorkshops && (
            <tr>
              {pendingWorkshops.map((approvedworkshop) => (
                <tr key={approvedworkshop._id}>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
              ))}
            </tr>
          )}
        </tbody>
      </table>
      <hr></hr>
    </div>
  );
};

export default WorkshopApproval;
