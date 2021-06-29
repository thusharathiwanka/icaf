import React from "react";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../../config/config";
const ResearchPaperRequest = () => {
  const [pendingPublications, setpendingPublications] = useState(null);
  const handleId = (id) => {
    setId(id);
    console.log(id);
  };
  useEffect(() => {
    fetch(`${BASE_URL}/publications/pending`, {
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setpendingPublications(data);
      });
  }, []);
  return (
    <div>
      <h3>Research Paper Request</h3>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>View</th>
          </tr>
          {pendingPublications && (
            <tr>
              {pendingPublications.map((paper) => (
                <tr key={paper._id}>
                  <td>{paper.createdAt}</td>
                  <td>{paper.topic}</td>
                  <td>
                    {" "}
                    <div>
                      <Link to="/auth/user/reviewer/reasearch/card">
                        <button type="button" className="cardbtn">
                          Reasearch Paper Card
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

export default ResearchPaperRequest;
