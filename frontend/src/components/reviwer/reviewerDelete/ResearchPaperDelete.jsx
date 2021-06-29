import React from "react";
import React, { useState, useEffect } from "react";
import { BASE_URL } from "../../../config/config";

const ResearchPaperDelete = () => {
  const [Deletedpaper, setRejectedPublications] = useState(null);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publication/rejected`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setRejectedPublications(data);
      });
  }, []);
  return (
    <div>
      <hr></hr>
      <h3>Diclined Research Papers</h3>
      <table id="customers">
        <tbody>
          <tr>
            <th>Date</th>
            <th>Topic</th>
          </tr>
          {Deletedpaper && (
            <tr>
              {Deletedpaper.map((deletedpaper) => (
                <tr key={deletedpaper._id}>
                  <td>{deletedpaper.createdAt}</td>
                  <td>{deletedpaper.topic}</td>
                </tr>
              ))}
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ResearchPaperDelete;
