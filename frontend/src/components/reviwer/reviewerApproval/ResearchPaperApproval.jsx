import React from "react";
import { Link } from "react-router-dom";

const ResearchPaperApproval = () => {
  return (
    <div>
      <h3>Approved Research Papers</h3>
      <table id="customers">
        <tr>
          <th>Date</th>
          <th>Topic</th>
          <th>Researcher Name</th>
        </tr>
        <tr>
          <td>Alfreds Futterkiste</td>
          <td>Maria Anders</td>
          <td>Germany</td>
        </tr>
      </table>
    </div>
  );
};

export default ResearchPaperApproval;
