import React from "react";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";
const WorkshopRequest = () => {
  const [pendingWorkshop, setpendingWorkshop] = useState(null);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/pending`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpendingWorkshop(data);
      });
  }, []);
  return (
    <div>
      <h3>Workshop Request</h3>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>View</th>
          </tr>
          {pendingWorkshop && (
            <tr>
              {pendingWorkshop.map((workshop) => (
                <tr key={workshop._id}>
                  <td>{workshop.dueDate}</td>
                  <td>{workshop.topic}</td>
                  <td>
                    <div>
                      <Link to="/auth/user/reviewer/workshop/card">
                        <button type="button" className="cardbtn">
                          view Card
                        </button>
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tr>
          )}
        </table>
      </div>
      <hr></hr>
    </div>
  );
};

export default WorkshopRequest;
