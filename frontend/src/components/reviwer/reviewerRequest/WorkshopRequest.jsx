import React from "react";
import { Link } from "react-router-dom";
const WorkshopRequest = () => {
  return (
    <div>
      <h3>Workshop Request</h3>
      <hr></hr>
      <div>
        <table id="customers">
          <tr>
            <th>Date</th>
            <th>Topic</th>
            <th>Researcher Name</th>
            <th>View</th>
          </tr>
          <tr>
            <td>Alfreds Futterkiste</td>
            <td>Maria Anders</td>
            <td>Germany</td>
            <td>
              {" "}
              <div>
                <Link to="/auth/user/reviewer/reasearch/card">
                  <button type="button" className="downbtn">
                    view Card
                  </button>
                </Link>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <hr></hr>
    </div>
  );
};

export default WorkshopRequest;
