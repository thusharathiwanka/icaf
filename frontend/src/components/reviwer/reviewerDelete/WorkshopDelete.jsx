import React from "react";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";

const WorkshopDelete = () => {
  const [rejectedWorkshop, setRejectedWorkshop] = useState(null);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/workshop/rejected`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRejectedWorkshop(data);
      });
  }, []);
  return (
    <div>
      <h3>Diclined Workshops</h3>

      <table id="customers">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Researcher Name</th>
          </tr>
          {rejectedWorkshop && (
            <tr>
              {rejectedWorkshop.map((deletedworkshop) => (
                <tr key={deletedworkshop._id}>
                  <td>{deletedworkshop.createdAt}</td>
                  <td>{deletedworkshop.topic}</td>
                </tr>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default WorkshopDelete;
