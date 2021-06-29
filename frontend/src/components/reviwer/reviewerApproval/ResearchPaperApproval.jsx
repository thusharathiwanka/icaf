import React from "react";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";
const ResearchPaperApproval = () => {
  const [approvedWorkshop, setApprovedWorkshop] = useState(null);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publication/approved`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setApprovedWorkshop(data);
      });
  }, []);

  return (
    <div>
      <h3>Approved Research Papers</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Researcher Name</th>
          </tr>
          {approvedWorkshop && (
            <tr>
              {approvedWorkshop.map((approvedpaper) => (
                <tr key={approvedpaper._id}>
                  <td>Alfreds Futterkiste</td>
                  <td>Maria Anders</td>
                  <td>Germany</td>
                </tr>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchPaperApproval;
